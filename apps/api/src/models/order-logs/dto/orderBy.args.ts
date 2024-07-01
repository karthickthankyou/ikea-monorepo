import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SortOrder } from 'src/common/dtos/common.input'
import { OrderOrderByWithRelationInput } from 'src/models/orders/dto/orderBy.args'

@InputType()
export class OrderLogOrderByWithRelationInput
  implements Required<Prisma.OrderLogOrderByWithRelationInput>
{
  @Field(() => SortOrder, { nullable: true })
  id: SortOrder
  @Field(() => SortOrder, { nullable: true })
  createdAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  updatedAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  orderId: SortOrder
  @Field(() => SortOrder, { nullable: true })
  status: SortOrder
  @Field(() => SortOrder, { nullable: true })
  order: OrderOrderByWithRelationInput

  // Todo: Add properties
  // id: Prisma.SortOrder
}

@InputType()
export class OrderLogOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count: SortOrder
}
