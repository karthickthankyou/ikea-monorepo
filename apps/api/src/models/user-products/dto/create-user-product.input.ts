import { InputType, PickType } from '@nestjs/graphql'
import { UserProduct } from '../entities/user-product.entity'

@InputType()
export class CreateUserProductInput extends PickType(
  UserProduct,
  ['pid', 'uid', 'status'],
  InputType,
) {}
