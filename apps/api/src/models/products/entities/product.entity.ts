import { Field, Float, Int, ObjectType } from '@nestjs/graphql'
import { Product as ProductType } from '@prisma/client'

@ObjectType()
export class Product implements ProductType {
  @Field(() => Number)
  id: number
  createdAt: Date
  updatedAt: Date
  name: string
  @Field(() => String, { nullable: true })
  url: string
  @Field(() => Float)
  price: number
  category: string
  subCategory: string
  @Field(() => Boolean, { nullable: true })
  outOfStock: boolean
  @Field(() => Int, { nullable: true })
  reviews: number
  @Field(() => Float, { nullable: true })
  rating: number
  @Field(() => Float, { nullable: true })
  discount: number
  @Field(() => Float, { nullable: true })
  oldPrice: number
  tags: string[]
  @Field(() => String, { nullable: true })
  description: string
  sellerId: string
  @Field(() => [String])
  images: string[]
  @Field(() => String, { nullable: true })
  measurements: string
}
