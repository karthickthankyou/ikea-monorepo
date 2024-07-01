import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ProductCountOutput {
  @Field(() => Number)
  count: number
}
