import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, StringFilter } from 'src/common/dtos/common.input'
import { ProductListRelationFilter } from 'src/models/products/dto/where.args'
import { UserRelationFilter } from 'src/models/users/dto/where.args'

@InputType()
export class SellerWhereUniqueInput
  implements Required<Prisma.SellerWhereUniqueInput>
{
  @Field(() => String, { nullable: true })
  uid: string
}

@InputType()
export class SellerWhereInput implements Required<Prisma.SellerWhereInput> {
  @Field(() => UserRelationFilter, { nullable: true })
  user: UserRelationFilter
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => ProductListRelationFilter, { nullable: true })
  Product: ProductListRelationFilter

  @Field(() => [SellerWhereInput], { nullable: true })
  AND: SellerWhereInput[]
  @Field(() => [SellerWhereInput], { nullable: true })
  OR: SellerWhereInput[]
  @Field(() => [SellerWhereInput], { nullable: true })
  NOT: SellerWhereInput[]
}

@InputType()
export class SellerListRelationFilter {
  @Field(() => SellerWhereInput)
  every?: SellerWhereInput
  @Field(() => SellerWhereInput)
  some?: SellerWhereInput
  @Field(() => SellerWhereInput)
  none?: SellerWhereInput
}

@InputType()
export class SellerRelationFilter {
  @Field(() => SellerWhereInput)
  is?: SellerWhereInput
  @Field(() => SellerWhereInput)
  isNot?: SellerWhereInput
}
