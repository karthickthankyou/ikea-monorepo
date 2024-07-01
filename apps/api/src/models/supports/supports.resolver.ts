import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { SupportsService } from './supports.service'
import { Support } from './entities/support.entity'
import { FindManySupportArgs, FindUniqueSupportArgs } from './dto/find.args'
import { CreateSupportInput } from './dto/create-support.input'
import { UpdateSupportInput } from './dto/update-support.input'
import { User } from '../users/entities/user.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/util'
import { ProductCountOutput } from '../products/dto/count.output'
import { SupportWhereInput } from './dto/where.args'

@Resolver(() => Support)
export class SupportsResolver {
  constructor(
    private readonly supportsService: SupportsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Support)
  createSupport(
    @Args('createSupportInput') args: CreateSupportInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.supportsService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [Support], { name: 'supports' })
  findAll(@Args() args: FindManySupportArgs) {
    return this.supportsService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => [Support], { name: 'mySupports' })
  mySupports(@Args() args: FindManySupportArgs, @GetUser() user: GetUserType) {
    return this.supportsService.findAll({
      ...args,
      where: { ...args.where, uid: { equals: user.uid } },
    })
  }

  @AllowAuthenticated()
  @Query(() => Support, { name: 'support' })
  async findOne(
    @Args() args: FindUniqueSupportArgs,
    @GetUser() user: GetUserType,
  ) {
    const support = await this.prisma.support.findUnique(args)
    checkRowLevelPermission(user, support.uid)
    return support
  }

  @AllowAuthenticated()
  @Mutation(() => Support)
  async updateSupport(
    @Args('updateSupportInput') args: UpdateSupportInput,
    @GetUser() user: GetUserType,
  ) {
    const support = await this.prisma.support.findUnique({
      where: { id: args.id },
    })
    checkRowLevelPermission(user, support.uid)
    return this.supportsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Support)
  async removeSupport(
    @Args() args: FindUniqueSupportArgs,
    @GetUser() user: GetUserType,
  ) {
    const support = await this.prisma.support.findUnique(args)
    checkRowLevelPermission(user, support.uid)
    return this.supportsService.remove(args)
  }

  @ResolveField(() => User)
  user(@Parent() parent: Support) {
    return this.prisma.user.findUnique({ where: { uid: parent.uid } })
  }

  @Query(() => ProductCountOutput, { name: 'supportAggregate' })
  async supportsTotal(
    @Args('SupportWhereInput', { nullable: true }) where: SupportWhereInput,
  ) {
    const supportCount = await this.prisma.support.aggregate({
      _count: { _all: true },
      where,
    })

    return { count: supportCount._count._all }
  }
}
