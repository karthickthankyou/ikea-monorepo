import { Field, InputType, registerEnumType } from '@nestjs/graphql'

import { Prisma } from '@prisma/client'
import {
  BoolFilter,
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { OrderListRelationFilter } from 'src/models/orders/dto/where.args'
import { SellerRelationFilter } from 'src/models/sellers/dto/where.args'
import { UserProductListRelationFilter } from 'src/models/user-products/dto/where.args'
import { ViewListRelationFilter } from 'src/models/views/dto/where.args'

@InputType()
export class ProductWhereUniqueInput
  implements Required<Prisma.ProductWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

// @InputType()
// export class EnumCategoryFilter {
//   @Field(() => Category, { nullable: true })
//   equals: Category;
//   @Field(() => [Category], { nullable: true })
//   in?: Category[]
//   @Field(() => [Category], { nullable: true })
//   notIn?: Category[]
//   @Field(() => EnumCategoryFilter, { nullable: true })
//   not?: EnumCategoryFilter
// }

@InputType()
export class ProductWhereInput implements Required<Prisma.ProductWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  name: StringFilter
  @Field(() => StringFilter, { nullable: true })
  url: StringFilter
  @Field(() => IntFilter, { nullable: true })
  price: IntFilter
  @Field(() => StringFilter, { nullable: true })
  category: StringFilter
  @Field(() => StringFilter, { nullable: true })
  subCategory: StringFilter
  @Field(() => BoolFilter, { nullable: true })
  outOfStock: BoolFilter
  @Field(() => IntFilter, { nullable: true })
  reviews: IntFilter
  @Field(() => IntFilter, { nullable: true })
  rating: IntFilter
  @Field(() => IntFilter, { nullable: true })
  discount: IntFilter
  @Field(() => IntFilter, { nullable: true })
  oldPrice: IntFilter
  @Field(() => StringFilter, { nullable: true })
  tags: StringFilter
  @Field(() => StringFilter, { nullable: true })
  description: StringFilter
  @Field(() => StringFilter, { nullable: true })
  sellerId: StringFilter
  @Field(() => StringFilter, { nullable: true })
  images: StringFilter
  @Field(() => StringFilter, { nullable: true })
  measurements: StringFilter
  @Field(() => SellerRelationFilter, { nullable: true })
  seller: SellerRelationFilter
  @Field(() => ViewListRelationFilter, { nullable: true })
  View: ViewListRelationFilter
  @Field(() => OrderListRelationFilter, { nullable: true })
  Order: OrderListRelationFilter
  @Field(() => UserProductListRelationFilter, { nullable: true })
  UserProduct: UserProductListRelationFilter

  @Field(() => [ProductWhereInput], { nullable: true })
  AND: ProductWhereInput[]
  @Field(() => [ProductWhereInput], { nullable: true })
  OR: ProductWhereInput[]
  @Field(() => [ProductWhereInput], { nullable: true })
  NOT: ProductWhereInput[]
}

@InputType()
export class ProductListRelationFilter {
  @Field(() => ProductWhereInput)
  every?: ProductWhereInput
  @Field(() => ProductWhereInput)
  some?: ProductWhereInput
  @Field(() => ProductWhereInput)
  none?: ProductWhereInput
}

@InputType()
export class ProductRelationFilter {
  @Field(() => ProductWhereInput)
  is?: ProductWhereInput
  @Field(() => ProductWhereInput)
  isNot?: ProductWhereInput
}

// registerEnumType(Category, {
//   name: 'Category',
// })
