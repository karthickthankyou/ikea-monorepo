import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { SellersService } from './sellers.service'
import { Seller } from './entities/seller.entity'
import { FindManySellerArgs, FindUniqueSellerArgs } from './dto/find.args'
import { CreateSellerInput } from './dto/create-seller.input'
import { UpdateSellerInput } from './dto/update-seller.input'
import { Product } from '../products/entities/product.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/util'

@Resolver(() => Seller)
export class SellersResolver {
  constructor(
    private readonly sellersService: SellersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Seller)
  createSeller(
    @Args('createSellerInput') args: CreateSellerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.sellersService.create(args)
  }

  @AllowAuthenticated()
  @Query(() => [Seller], { name: 'sellers' })
  findAll(@Args() args: FindManySellerArgs) {
    return this.sellersService.findAll(args)
  }

  @Query(() => Seller, { name: 'seller' })
  findOne(@Args() args: FindUniqueSellerArgs) {
    return this.sellersService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Seller)
  updateSeller(
    @Args('updateSellerInput') args: UpdateSellerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.sellersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Seller)
  removeSeller(
    @Args() args: FindUniqueSellerArgs,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.where.uid)
    return this.sellersService.remove(args)
  }

  @ResolveField(() => [Product])
  products(@Parent() parent: Seller) {
    return this.prisma.userProduct.findMany({ where: { uid: parent.uid } })
  }
}
