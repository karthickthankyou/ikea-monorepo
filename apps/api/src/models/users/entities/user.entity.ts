import { Field, ObjectType } from '@nestjs/graphql'
import { User as UserType } from '@prisma/client'

@ObjectType()
export class User implements UserType {
  @Field(() => String)
  createdAt: Date
  @Field(() => String)
  updatedAt: Date
  @Field(() => String)
  uid: string
  @Field(() => String)
  displayName: string
  @Field(() => String)
  address: string
  @Field(() => String)
  about: string
}
