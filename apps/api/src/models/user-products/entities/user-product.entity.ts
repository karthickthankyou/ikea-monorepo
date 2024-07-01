import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
  UserProduct as UserProductType,
  UserProductStatus,
} from '@prisma/client'

registerEnumType(UserProductStatus, {
  name: 'UserProductStatus',
})

@ObjectType()
export class UserProduct implements UserProductType {
  id: number
  createdAt: Date
  updatedAt: Date
  pid: number
  @Field(() => String)
  uid: string
  @Field(() => UserProductStatus)
  status: UserProductStatus
}
