import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, IntFilter } from 'src/common/dtos/common.input'
import { OrderRelationFilter } from 'src/models/orders/dto/where.args'
import { OrderStatus } from '../entities/order-log.entity'

@InputType()
export class OrderLogWhereUniqueInput
  implements Required<Prisma.OrderLogWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class EnumOrderStatusFilter {
  @Field(() => OrderStatus, { nullable: true })
  equals: OrderStatus;
  @Field(() => [OrderStatus], { nullable: true })
  in?: OrderStatus[]
  @Field(() => [OrderStatus], { nullable: true })
  notIn?: OrderStatus[]
  @Field(() => EnumOrderStatusFilter, { nullable: true })
  not?: EnumOrderStatusFilter
}

@InputType()
export class OrderLogWhereInput implements Required<Prisma.OrderLogWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => IntFilter, { nullable: true })
  orderId: IntFilter
  @Field(() => EnumOrderStatusFilter, { nullable: true })
  status: EnumOrderStatusFilter
  @Field(() => OrderRelationFilter, { nullable: true })
  order: OrderRelationFilter

  @Field(() => [OrderLogWhereInput], { nullable: true })
  AND: OrderLogWhereInput[]
  @Field(() => [OrderLogWhereInput], { nullable: true })
  OR: OrderLogWhereInput[]
  @Field(() => [OrderLogWhereInput], { nullable: true })
  NOT: OrderLogWhereInput[]
}

@InputType()
export class OrderLogListRelationFilter {
  @Field(() => OrderLogWhereInput)
  every?: OrderLogWhereInput
  @Field(() => OrderLogWhereInput)
  some?: OrderLogWhereInput
  @Field(() => OrderLogWhereInput)
  none?: OrderLogWhereInput
}

@InputType()
export class OrderLogRelationFilter {
  @Field(() => OrderLogWhereInput)
  is?: OrderLogWhereInput
  @Field(() => OrderLogWhereInput)
  isNot?: OrderLogWhereInput
}
