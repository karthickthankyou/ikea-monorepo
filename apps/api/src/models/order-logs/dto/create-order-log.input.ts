import { InputType, PickType } from '@nestjs/graphql'
import { OrderLog } from '../entities/order-log.entity'

@InputType()
export class CreateOrderLogInput extends PickType(
  OrderLog,
  ['orderId', 'status'],
  InputType,
) {}
