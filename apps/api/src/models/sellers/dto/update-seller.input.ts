import { CreateSellerInput } from './create-seller.input'
import { InputType, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateSellerInput extends PartialType(CreateSellerInput) {
  id: string
}
