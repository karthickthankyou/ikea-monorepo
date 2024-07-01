import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { UserProductsService } from './user-products.service'
import { UserProduct } from './entities/user-product.entity'
import {
  FindManyUserProductArgs,
  FindUniqueUserProductArgs,
} from './dto/find.args'
import { CreateUserProductInput } from './dto/create-user-product.input'
import { UpdateUserProductInput } from './dto/update-user-product.input'
import { Product } from '../products/entities/product.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { User } from '../users/entities/user.entity'
import {
  AllowAuthenticated,
  AllowAuthenticatedOptional,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/util'

@Resolver(() => UserProduct)
export class UserProductsResolver {
  constructor(
    private readonly userProductsService: UserProductsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => UserProduct)
  async createUserProduct(
    @Args('createUserProductInput') args: CreateUserProductInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.userProductsService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [UserProduct], { name: 'allUserProducts' })
  findAll(@Args() args: FindManyUserProductArgs) {
    return this.userProductsService.findAll(args)
  }

  @AllowAuthenticatedOptional()
  @Query(() => [UserProduct], { name: 'myProducts' })
  myProducts(
    @Args() args: FindManyUserProductArgs,
    @GetUser() user: GetUserType,
  ) {
    if (!user.uid) return []

    return this.userProductsService.findAll({
      ...args,
      where: { ...args.where, uid: { equals: user.uid } },
    })
  }

  @AllowAuthenticated()
  @Query(() => UserProduct, { name: 'userProduct' })
  async findOne(
    @Args() args: FindUniqueUserProductArgs,
    @GetUser() user: GetUserType,
  ) {
    const userProduct = await this.userProductsService.findOne(args)
    const product = await this.prisma.product.findUnique({
      where: { id: userProduct.pid },
    })
    checkRowLevelPermission(user, [userProduct.uid, product.sellerId])
    return userProduct
  }

  @AllowAuthenticated()
  @Mutation(() => UserProduct)
  updateUserProduct(
    @Args('updateUserProductInput') args: UpdateUserProductInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)

    return this.userProductsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => UserProduct)
  async removeUserProduct(
    @Args() args: FindUniqueUserProductArgs,
    @GetUser() user: GetUserType,
  ) {
    const userProduct = await this.userProductsService.findOne(args)

    checkRowLevelPermission(user, userProduct.uid)
    return this.userProductsService.remove(args)
  }

  @ResolveField(() => Product)
  product(@Parent() parent: UserProduct) {
    return this.prisma.product.findUnique({ where: { id: parent.pid } })
  }

  @ResolveField(() => User)
  user(@Parent() parent: UserProduct) {
    return this.prisma.user.findUnique({ where: { uid: parent.uid } })
  }
}
