import {
  InputType,
  IntersectionType,
  PartialType,
  PickType,
} from '@nestjs/graphql'
import { User } from '../entities/user.entity'

@InputType()
export class CreateUserInput extends IntersectionType(
  PickType(User, ['uid', 'displayName', 'address']),
  PartialType(PickType(User, ['about'])),
  InputType,
) {}
