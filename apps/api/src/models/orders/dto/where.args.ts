import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import {
  EnumOrderStatusFilter,
  OrderLogListRelationFilter,
} from 'src/models/order-logs/dto/where.args'
import { ProductRelationFilter } from 'src/models/products/dto/where.args'
import { UserRelationFilter } from 'src/models/users/dto/where.args'

@InputType()
export class OrderWhereUniqueInput
  implements Required<Prisma.OrderWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class OrderWhereInput implements Required<Prisma.OrderWhereInput> {
  @Field(() => OrderLogListRelationFilter, { nullable: true })
  OrderLog: OrderLogListRelationFilter
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => IntFilter, { nullable: true })
  pid: IntFilter
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => EnumOrderStatusFilter, { nullable: true })
  status: EnumOrderStatusFilter
  @Field(() => ProductRelationFilter, { nullable: true })
  product: ProductRelationFilter
  @Field(() => UserRelationFilter, { nullable: true })
  user: UserRelationFilter

  @Field(() => [OrderWhereInput], { nullable: true })
  AND: OrderWhereInput[]
  @Field(() => [OrderWhereInput], { nullable: true })
  OR: OrderWhereInput[]
  @Field(() => [OrderWhereInput], { nullable: true })
  NOT: OrderWhereInput[]
}

@InputType()
export class OrderListRelationFilter {
  @Field(() => OrderWhereInput)
  every?: OrderWhereInput
  @Field(() => OrderWhereInput)
  some?: OrderWhereInput
  @Field(() => OrderWhereInput)
  none?: OrderWhereInput
}

@InputType()
export class OrderRelationFilter {
  @Field(() => OrderWhereInput)
  is?: OrderWhereInput
  @Field(() => OrderWhereInput)
  isNot?: OrderWhereInput
}
