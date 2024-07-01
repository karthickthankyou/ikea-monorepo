import { InputType, PickType } from '@nestjs/graphql'
import { Support } from '../entities/support.entity'

@InputType()
export class CreateSupportInput extends PickType(
  Support,
  ['uid', 'title', 'message', 'location', 'category'],
  InputType,
) {}
