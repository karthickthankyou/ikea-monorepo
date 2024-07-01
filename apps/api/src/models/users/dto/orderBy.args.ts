import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SortOrder } from 'src/common/dtos/common.input'
import { OrderOrderByRelationAggregateInput } from 'src/models/orders/dto/orderBy.args'
import { SellerOrderByWithRelationInput } from 'src/models/sellers/dto/orderBy.args'
import { SupportOrderByRelationAggregateInput } from 'src/models/supports/dto/orderBy.args'
import { UserProductOrderByRelationAggregateInput } from 'src/models/user-products/dto/orderBy.args'
import { ViewOrderByRelationAggregateInput } from 'src/models/views/dto/orderBy.args'

@InputType()
export class UserOrderByWithRelationInput
  implements Required<Prisma.UserOrderByWithRelationInput>
{
  @Field(() => SellerOrderByWithRelationInput, { nullable: true })
  Seller: SellerOrderByWithRelationInput
  @Field(() => SortOrder, { nullable: true })
  uid: SortOrder
  @Field(() => SortOrder, { nullable: true })
  createdAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  updatedAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  displayName: SortOrder
  @Field(() => SortOrder, { nullable: true })
  address: SortOrder
  @Field(() => SortOrder, { nullable: true })
  about: SortOrder
  @Field(() => ViewOrderByRelationAggregateInput, { nullable: true })
  View: ViewOrderByRelationAggregateInput
  @Field(() => OrderOrderByRelationAggregateInput, { nullable: true })
  Order: OrderOrderByRelationAggregateInput
  @Field(() => SupportOrderByRelationAggregateInput, { nullable: true })
  Support: SupportOrderByRelationAggregateInput
  @Field(() => UserProductOrderByRelationAggregateInput, { nullable: true })
  UserProduct: UserProductOrderByRelationAggregateInput

  // Todo: Add properties
  // @Field(() => Prisma.SortOrder, { nullable: true })
  // id: Prisma.SortOrder
}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count: SortOrder
}
