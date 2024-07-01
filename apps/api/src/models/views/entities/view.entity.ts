import { Field, ObjectType } from '@nestjs/graphql'
import { View as ViewType } from '@prisma/client'

@ObjectType()
export class View implements ViewType {
  id: number
  createdAt: Date
  updatedAt: Date
  @Field(() => Number)
  pid: number
  @Field(() => String)
  uid: string
}
