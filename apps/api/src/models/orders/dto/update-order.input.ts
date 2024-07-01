import { CreateOrderInput } from './create-order.input'
import { InputType, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
  id: number
}
