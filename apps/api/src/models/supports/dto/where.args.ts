import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { UserRelationFilter } from 'src/models/users/dto/where.args'

@InputType()
export class SupportWhereUniqueInput
  implements Required<Prisma.SupportWhereUniqueInput>
{
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class SupportWhereInput implements Required<Prisma.SupportWhereInput> {
  @Field(() => StringFilter, { nullable: true })
  category: StringFilter
  location: StringFilter
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => StringFilter, { nullable: true })
  title: StringFilter
  @Field(() => StringFilter, { nullable: true })
  message: StringFilter
  @Field(() => UserRelationFilter, { nullable: true })
  user: UserRelationFilter

  @Field(() => [SupportWhereInput], { nullable: true })
  AND: SupportWhereInput[]
  @Field(() => [SupportWhereInput], { nullable: true })
  OR: SupportWhereInput[]
  @Field(() => [SupportWhereInput], { nullable: true })
  NOT: SupportWhereInput[]
}

@InputType()
export class SupportListRelationFilter {
  @Field(() => SupportWhereInput)
  every?: SupportWhereInput
  @Field(() => SupportWhereInput)
  some?: SupportWhereInput
  @Field(() => SupportWhereInput)
  none?: SupportWhereInput
}

@InputType()
export class SupportRelationFilter {
  @Field(() => SupportWhereInput)
  is?: SupportWhereInput
  @Field(() => SupportWhereInput)
  isNot?: SupportWhereInput
}
