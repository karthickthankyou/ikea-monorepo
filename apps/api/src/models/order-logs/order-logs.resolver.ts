import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { OrderLogsService } from './order-logs.service'
import { OrderLog } from './entities/order-log.entity'
import { FindManyOrderLogArgs, FindUniqueOrderLogArgs } from './dto/find.args'
import { CreateOrderLogInput } from './dto/create-order-log.input'
import { UpdateOrderLogInput } from './dto/update-order-log.input'
import { Order } from '../orders/entities/order.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/util'

@Resolver(() => OrderLog)
export class OrderLogsResolver {
  constructor(
    private readonly orderLogsService: OrderLogsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => OrderLog)
  async createOrderLog(
    @Args('createOrderLogInput') args: CreateOrderLogInput,
    @GetUser() user: GetUserType,
  ) {
    const order = await this.prisma.order.findUnique({
      where: { id: args.orderId },
    })
    checkRowLevelPermission(user, order.uid)
    return this.orderLogsService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [OrderLog], { name: 'orderLogs' })
  findAll(@Args() args: FindManyOrderLogArgs) {
    return this.orderLogsService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => OrderLog, { name: 'orderLog' })
  async findOne(
    @Args() args: FindUniqueOrderLogArgs,
    @GetUser() user: GetUserType,
  ) {
    const orderLog = await this.prisma.orderLog.findUnique({
      where: { id: args.where.id },
      include: { order: true },
    })
    checkRowLevelPermission(user, orderLog.order.uid)
    return this.orderLogsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => OrderLog)
  async updateOrderLog(
    @Args('updateOrderLogInput') args: UpdateOrderLogInput,
    @GetUser() user: GetUserType,
  ) {
    const orderLog = await this.prisma.orderLog.findUnique({
      where: { id: args.id },
      include: { order: true },
    })
    checkRowLevelPermission(user, orderLog.order.uid)
    return this.orderLogsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => OrderLog)
  async removeOrderLog(
    @Args() args: FindUniqueOrderLogArgs,
    @GetUser() user: GetUserType,
  ) {
    const orderLog = await this.prisma.orderLog.findUnique({
      where: args.where,
      include: { order: true },
    })
    checkRowLevelPermission(user, orderLog.order.uid)
    return this.orderLogsService.remove(args)
  }

  @ResolveField(() => Order)
  order(@Parent() parent: OrderLog) {
    return this.prisma.order.findMany({ where: { id: parent.orderId } })
  }
}
