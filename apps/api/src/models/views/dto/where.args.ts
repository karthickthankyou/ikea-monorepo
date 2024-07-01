import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { ProductRelationFilter } from 'src/models/products/dto/where.args'
import { UserRelationFilter } from 'src/models/users/dto/where.args'

@InputType()
export class ViewWhereUniqueInput
  implements Required<Prisma.ViewWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class ViewWhereInput implements Required<Prisma.ViewWhereInput> {
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
  @Field(() => ProductRelationFilter, { nullable: true })
  product: ProductRelationFilter
  @Field(() => UserRelationFilter, { nullable: true })
  user: UserRelationFilter

  @Field(() => [ViewWhereInput], { nullable: true })
  AND: ViewWhereInput[]
  @Field(() => [ViewWhereInput], { nullable: true })
  OR: ViewWhereInput[]
  @Field(() => [ViewWhereInput], { nullable: true })
  NOT: ViewWhereInput[]
}

@InputType()
export class ViewListRelationFilter {
  @Field(() => ViewWhereInput)
  every?: ViewWhereInput
  @Field(() => ViewWhereInput)
  some?: ViewWhereInput
  @Field(() => ViewWhereInput)
  none?: ViewWhereInput
}

@InputType()
export class ViewRelationFilter {
  @Field(() => ViewWhereInput)
  is?: ViewWhereInput
  @Field(() => ViewWhereInput)
  isNot?: ViewWhereInput
}
