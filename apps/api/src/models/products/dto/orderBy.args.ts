import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SortOrder } from 'src/common/dtos/common.input'
import { OrderOrderByRelationAggregateInput } from 'src/models/orders/dto/orderBy.args'
import { SellerOrderByWithRelationInput } from 'src/models/sellers/dto/orderBy.args'
import { UserProductOrderByRelationAggregateInput } from 'src/models/user-products/dto/orderBy.args'
import { ViewOrderByRelationAggregateInput } from 'src/models/views/dto/orderBy.args'

@InputType()
export class ProductOrderByWithRelationInput
  implements Required<Prisma.ProductOrderByWithRelationInput>
{
  @Field(() => SortOrder, { nullable: true })
  id: SortOrder
  @Field(() => SortOrder, { nullable: true })
  createdAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  updatedAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  name: SortOrder
  @Field(() => SortOrder, { nullable: true })
  url: SortOrder
  @Field(() => SortOrder, { nullable: true })
  price: SortOrder
  @Field(() => SortOrder, { nullable: true })
  category: SortOrder
  @Field(() => SortOrder, { nullable: true })
  subCategory: SortOrder
  @Field(() => SortOrder, { nullable: true })
  outOfStock: SortOrder
  @Field(() => SortOrder, { nullable: true })
  reviews: SortOrder
  @Field(() => SortOrder, { nullable: true })
  rating: SortOrder
  @Field(() => SortOrder, { nullable: true })
  discount: SortOrder
  @Field(() => SortOrder, { nullable: true })
  oldPrice: SortOrder
  @Field(() => SortOrder, { nullable: true })
  tags: SortOrder
  @Field(() => SortOrder, { nullable: true })
  description: SortOrder
  @Field(() => SortOrder, { nullable: true })
  sellerId: SortOrder
  @Field(() => SortOrder, { nullable: true })
  images: SortOrder
  @Field(() => SortOrder, { nullable: true })
  measurements: SortOrder
  @Field(() => SellerOrderByWithRelationInput, { nullable: true })
  seller: SellerOrderByWithRelationInput
  @Field(() => ViewOrderByRelationAggregateInput, { nullable: true })
  View: ViewOrderByRelationAggregateInput
  @Field(() => OrderOrderByRelationAggregateInput, { nullable: true })
  Order: OrderOrderByRelationAggregateInput
  @Field(() => UserProductOrderByRelationAggregateInput, { nullable: true })
  UserProduct: UserProductOrderByRelationAggregateInput

  // Todo: Add properties

  // id: Prisma.SortOrder
}

@InputType()
export class ProductOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count: SortOrder
}
