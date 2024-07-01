import { CreateOrderLogInput } from './create-order-log.input'
import { InputType, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateOrderLogInput extends PartialType(CreateOrderLogInput) {
  id: number
}
