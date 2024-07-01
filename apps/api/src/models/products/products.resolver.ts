import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ProductsService } from './products.service'
import { Product } from './entities/product.entity'
import { FindManyProductArgs, FindUniqueProductArgs } from './dto/find.args'
import { CreateProductInput } from './dto/create-product.input'
import { UpdateProductInput } from './dto/update-product.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { View } from '../views/entities/view.entity'
import { Order } from '../orders/entities/order.entity'
import { UserProduct } from '../user-products/entities/user-product.entity'
import {
  AllowAuthenticated,
  AllowAuthenticatedOptional,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/util'
import { ProductWhereInput } from './dto/where.args'
import { ProductCountOutput } from './dto/count.output'

@Resolver(() => Product)
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Product)
  async createProduct(
    @Args('createProductInput') args: CreateProductInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.sellerId)
    const seller = await this.prisma.seller.findUnique({
      where: { uid: user.uid },
    })
    if (!seller) {
      // create seller
      await this.prisma.seller.create({ data: { uid: user.uid } })
    }
    return this.productsService.create(args)
  }

  @Query(() => [Product], { name: 'products' })
  findAll(@Args() args: FindManyProductArgs) {
    return this.productsService.findAll(args)
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args() args: FindUniqueProductArgs) {
    return this.productsService.findOne(args)
  }

  @Query(() => ProductCountOutput, { name: 'productAggregate' })
  async productTotal(
    @Args('ProductWhereInput', { nullable: true }) where: ProductWhereInput,
  ) {
    const productCount = await this.prisma.product.aggregate({
      _count: { _all: true },
      where,
    })
    console.log('Product count', productCount)
    return { count: productCount._count._all }
  }

  @AllowAuthenticated()
  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput') args: UpdateProductInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.sellerId)
    return this.productsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Product)
  async removeProduct(
    @Args() args: FindUniqueProductArgs,
    @GetUser() user: GetUserType,
  ) {
    const product = await this.productsService.findOne(args)
    checkRowLevelPermission(user, product.sellerId)

    return this.productsService.remove(args)
  }

  @AllowAuthenticated()
  @ResolveField(() => [View])
  views(@Parent() parent: Product, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, parent.sellerId)

    return this.prisma.view.findMany({ where: { pid: parent.id } })
  }

  @AllowAuthenticated()
  @ResolveField(() => [Order])
  orders(@Parent() parent: Product, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, parent.sellerId)
    return this.prisma.order.findMany({ where: { pid: parent.id } })
  }

  @AllowAuthenticatedOptional()
  @ResolveField(() => UserProduct, { nullable: true })
  async userProduct(@Parent() parent: Product, @GetUser() user: GetUserType) {
    if (!user?.uid) return null
    const userProduct = await this.prisma.userProduct.findUnique({
      where: { uid_pid: { pid: parent.id, uid: user.uid } },
    })
    return userProduct
  }

  @AllowAuthenticated()
  @ResolveField(() => [UserProduct], { nullable: true })
  userProducts(@Parent() parent: Product, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, parent.sellerId)
    return this.prisma.userProduct.findMany({ where: { pid: parent.id } })
  }
}
