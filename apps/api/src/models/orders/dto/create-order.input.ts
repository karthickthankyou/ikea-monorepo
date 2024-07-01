import { InputType, PickType } from '@nestjs/graphql'
import { Order } from '../entities/order.entity'

@InputType()
export class CreateOrderInput extends PickType(
  Order,
  ['pid', 'uid', 'status'],
  InputType,
) {}
