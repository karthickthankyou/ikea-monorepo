import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { OrdersService } from './orders.service'
import { Order } from './entities/order.entity'
import { FindManyOrderArgs, FindUniqueOrderArgs } from './dto/find.args'
import { CreateOrderInput } from './dto/create-order.input'
import { UpdateOrderInput } from './dto/update-order.input'
import { Product } from '../products/entities/product.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { User } from '../users/entities/user.entity'
import { OrderLog } from '../order-logs/entities/order-log.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/util'
import { ProductCountOutput } from '../products/dto/count.output'
import { OrderWhereInput } from './dto/where.args'

@Resolver(() => Order)
export class OrdersResolver {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Order)
  createOrder(
    @Args('createOrderInput') args: CreateOrderInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.ordersService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [Order], { name: 'orders' })
  findAll(@Args() args: FindManyOrderArgs) {
    return this.ordersService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => [Order], { name: 'myOrders' })
  myOrders(@Args() args: FindManyOrderArgs, @GetUser() user: GetUserType) {
    return this.ordersService.findAll({
      ...args,
      where: {
        ...args.where,
        uid: { equals: user.uid },
      },
    })
  }

  @AllowAuthenticated()
  @Query(() => Order, { name: 'order' })
  async findOne(
    @Args() args: FindUniqueOrderArgs,
    @GetUser() user: GetUserType,
  ) {
    const order = await this.ordersService.findOne(args)

    checkRowLevelPermission(user, order.uid)
    return order
  }

  @Query(() => ProductCountOutput, { name: 'orderAggregate' })
  async orderAggregate(
    @Args('OrderWhereInput', { nullable: true }) where: OrderWhereInput,
  ) {
    const orderCount = await this.prisma.order.aggregate({
      _count: { _all: true },
      where,
    })
    return { count: orderCount._count._all }
  }

  @AllowAuthenticated()
  @Mutation(() => Order)
  async updateOrder(
    @Args('updateOrderInput') args: UpdateOrderInput,
    @GetUser() user: GetUserType,
  ) {
    const order = await this.ordersService.findOne({ where: { id: args.id } })
    checkRowLevelPermission(user, order.uid)
    return this.ordersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Order)
  async removeOrder(
    @Args() args: FindUniqueOrderArgs,
    @GetUser() user: GetUserType,
  ) {
    const order = await this.ordersService.findOne(args)
    checkRowLevelPermission(user, order.uid)
    return this.ordersService.remove(args)
  }

  @ResolveField(() => Product)
  product(@Parent() parent: Order) {
    return this.prisma.product.findUnique({ where: { id: parent.pid } })
  }

  @ResolveField(() => User)
  user(@Parent() parent: Order) {
    return this.prisma.user.findUnique({ where: { uid: parent.uid } })
  }

  @ResolveField(() => [OrderLog])
  orderLogs(@Parent() parent: Order) {
    return this.prisma.orderLog.findMany({ where: { orderId: parent.id } })
  }
}
