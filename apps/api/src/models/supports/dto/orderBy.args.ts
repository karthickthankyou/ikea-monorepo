import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SortOrder } from 'src/common/dtos/common.input'
import { UserOrderByWithRelationInput } from 'src/models/users/dto/orderBy.args'

@InputType()
export class SupportOrderByWithRelationInput
  implements Required<Prisma.SupportOrderByWithRelationInput>
{
  @Field(() => SortOrder, { nullable: true })
  category: Prisma.SortOrder
  @Field(() => SortOrder, { nullable: true })
  location: Prisma.SortOrder
  @Field(() => SortOrder, { nullable: true })
  id: SortOrder
  @Field(() => SortOrder, { nullable: true })
  createdAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  updatedAt: SortOrder
  @Field(() => SortOrder, { nullable: true })
  uid: SortOrder
  @Field(() => SortOrder, { nullable: true })
  title: SortOrder
  @Field(() => SortOrder, { nullable: true })
  message: SortOrder
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user: UserOrderByWithRelationInput
}

@InputType()
export class SupportOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count: SortOrder
}
