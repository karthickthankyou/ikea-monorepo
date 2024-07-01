import { Field, InputType, registerEnumType } from '@nestjs/graphql'
import { Prisma, UserProductStatus } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { ProductRelationFilter } from 'src/models/products/dto/where.args'
import { UserRelationFilter } from 'src/models/users/dto/where.args'

@InputType()
export class UserProductWhereUniqueInput
  implements Required<Pick<Prisma.UserProductWhereUniqueInput, 'id'>>
{
  @Field(() => Number, { nullable: true })
  id: number
}

registerEnumType(UserProductStatus, {
  name: 'UserProductStatus',
})

@InputType()
export class EnumUserProductStatusFilter {
  @Field(() => UserProductStatus, { nullable: true })
  equals: UserProductStatus;
  @Field(() => [UserProductStatus], { nullable: true })
  in?: UserProductStatus[]
  @Field(() => [UserProductStatus], { nullable: true })
  notIn?: UserProductStatus[]
  @Field(() => EnumUserProductStatusFilter, { nullable: true })
  not?: EnumUserProductStatusFilter
}

@InputType()
export class UserProductWhereInput
  implements Required<Prisma.UserProductWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => IntFilter, { nullable: true })
  pid: IntFilter
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => EnumUserProductStatusFilter, { nullable: true })
  status: EnumUserProductStatusFilter
  @Field(() => ProductRelationFilter, { nullable: true })
  product: ProductRelationFilter
  @Field(() => UserRelationFilter, { nullable: true })
  user: UserRelationFilter

  @Field(() => [UserProductWhereInput], { nullable: true })
  AND: UserProductWhereInput[]
  @Field(() => [UserProductWhereInput], { nullable: true })
  OR: UserProductWhereInput[]
  @Field(() => [UserProductWhereInput], { nullable: true })
  NOT: UserProductWhereInput[]
}

@InputType()
export class UserProductListRelationFilter {
  @Field(() => UserProductWhereInput)
  every?: UserProductWhereInput
  @Field(() => UserProductWhereInput)
  some?: UserProductWhereInput
  @Field(() => UserProductWhereInput)
  none?: UserProductWhereInput
}

@InputType()
export class UserProductRelationFilter {
  @Field(() => UserProductWhereInput)
  is?: UserProductWhereInput
  @Field(() => UserProductWhereInput)
  isNot?: UserProductWhereInput
}
