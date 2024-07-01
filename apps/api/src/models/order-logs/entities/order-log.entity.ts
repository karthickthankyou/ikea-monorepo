import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { OrderLog as OrderLogType } from '@prisma/client'

export enum OrderStatus {
  ORDER_RECEIVED = 'ORDER_RECEIVED',
  DELIVERED = 'DELIVERED',
  DISPATCHED = 'DISPATCHED',
}

registerEnumType(OrderStatus, {
  name: 'OrderStatus',
})

@ObjectType()
export class OrderLog implements OrderLogType {
  @Field(() => Number)
  id: number
  @Field(() => String)
  createdAt: Date
  @Field(() => String)
  updatedAt: Date
  @Field(() => Number)
  orderId: number
  @Field(() => OrderStatus)
  status: OrderStatus
}
