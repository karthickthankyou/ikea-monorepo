import { Field, ObjectType } from '@nestjs/graphql'
import { Seller as SellerType } from '@prisma/client'

@ObjectType()
export class Seller implements SellerType {
  @Field(() => String)
  uid: string
  @Field(() => String)
  createdAt: Date
  @Field(() => String)
  updatedAt: Date
}
