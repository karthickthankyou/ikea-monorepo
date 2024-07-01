import { CreateViewInput } from './create-view.input'
import { InputType, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateViewInput extends PartialType(CreateViewInput) {
  id: number
}
