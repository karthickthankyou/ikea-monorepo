import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { UserProductOrderByWithRelationInput } from './orderBy.args'
import {
  UserProductWhereInput,
  UserProductWhereUniqueInput,
} from './where.args'

registerEnumType(Prisma.UserProductScalarFieldEnum, {
  name: 'UserProductScalarFieldEnum',
})

@ArgsType()
export class FindManyUserProductArgs
  implements
    Required<Omit<Prisma.UserProductFindManyArgs, 'include' | 'select'>>
{
  @Field(() => UserProductWhereInput, { nullable: true })
  where: UserProductWhereInput
  @Field(() => [UserProductOrderByWithRelationInput], { nullable: true })
  orderBy: UserProductOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputNumber, { nullable: true })
  cursor: WhereUniqueInputNumber
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.UserProductScalarFieldEnum], { nullable: true })
  distinct: Prisma.UserProductScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueUserProductArgs {
  @Field({ nullable: true })
  where: UserProductWhereUniqueInput
}
