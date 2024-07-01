import { CreateUserProductInput } from './create-user-product.input'
import { InputType, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateUserProductInput extends PartialType(
  CreateUserProductInput,
) {
  id: number
}
