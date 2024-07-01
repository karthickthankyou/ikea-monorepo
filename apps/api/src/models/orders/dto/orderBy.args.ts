import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SortOrder } from 'src/common/dtos/common.input'
import { OrderLogOrderByRelationAggregateInput } from 'src/models/order-logs/dto/orderBy.args'
import { ProductOrderByWithRelationInput } from 'src/models/products/dto/orderBy.args'
import { UserOrderByWithRelationInput } from 'src/models/users/dto/orderBy.args'

@InputType()
export class OrderOrderByWithRelationInput
  implements Required<Prisma.OrderOrderByWithRelationInput>
{
  @Field(() => SortOrder, { nullable: true })
  id: SortOrder
  @Field(() => SortOrder, { nullable: true })
  createdAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  updatedAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  pid: SortOrder
  @Field(() => SortOrder, { nullable: true })
  uid: SortOrder
  @Field(() => SortOrder, { nullable: true })
  status: SortOrder
  @Field(() => ProductOrderByWithRelationInput, { nullable: true })
  product: ProductOrderByWithRelationInput
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user: UserOrderByWithRelationInput
  @Field(() => OrderLogOrderByRelationAggregateInput, { nullable: true })
  OrderLog: OrderLogOrderByRelationAggregateInput
}

@InputType()
export class OrderOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count: SortOrder
}
