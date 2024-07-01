import { Field, ObjectType } from '@nestjs/graphql'
import { Order as OrderType } from '@prisma/client'
import { OrderStatus } from 'src/models/order-logs/entities/order-log.entity'

@ObjectType()
export class Order implements OrderType {
  id: number
  createdAt: Date
  updatedAt: Date
  pid: number
  uid: string
  @Field(() => OrderStatus)
  status: OrderStatus
  // Todo fill all properties
}
