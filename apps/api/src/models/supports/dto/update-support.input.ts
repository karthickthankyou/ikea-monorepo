import { CreateSupportInput } from './create-support.input'
import { Field, InputType, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateSupportInput extends PartialType(CreateSupportInput) {
  @Field(() => Number)
  id: number
}
