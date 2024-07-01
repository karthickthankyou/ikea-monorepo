import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './entities/user.entity'
import { FindManyUserArgs, FindUniqueUserArgs } from './dto/find.args'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { View } from '../views/entities/view.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Order } from '../orders/entities/order.entity'
import { Support } from '../supports/entities/support.entity'
import { UserProduct } from '../user-products/entities/user-product.entity'
import { Seller } from '../sellers/entities/seller.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/util'

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => User)
  createUser(
    @Args('createUserInput') args: CreateUserInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.usersService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [User], { name: 'users' })
  findAll(@Args() args: FindManyUserArgs) {
    return this.usersService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => User, { name: 'user' })
  findOne(@Args() args: FindUniqueUserArgs, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, args.where.uid)
    return this.usersService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => User)
  updateUser(
    @Args('updateUserInput') args: UpdateUserInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.usersService.update(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => User)
  removeUser(@Args() args: FindUniqueUserArgs) {
    return this.usersService.remove(args)
  }

  @ResolveField(() => [View])
  views(@Parent() parent: User) {
    return this.prisma.view.findMany({ where: { uid: parent.uid } })
  }

  @ResolveField(() => [Order])
  orders(@Parent() parent: User) {
    return this.prisma.order.findMany({ where: { uid: parent.uid } })
  }

  @ResolveField(() => [Support])
  supports(@Parent() parent: User) {
    return this.prisma.support.findMany({ where: { uid: parent.uid } })
  }

  @ResolveField(() => [UserProduct])
  userProducts(@Parent() parent: User) {
    return this.prisma.userProduct.findMany({ where: { uid: parent.uid } })
  }

  @ResolveField(() => Seller)
  seller(@Parent() parent: User) {
    return this.prisma.seller.findUnique({ where: { uid: parent.uid } })
  }
}
