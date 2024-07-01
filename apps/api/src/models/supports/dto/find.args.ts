import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { SupportOrderByWithRelationInput } from './orderBy.args'
import { SupportWhereInput, SupportWhereUniqueInput } from './where.args'

registerEnumType(Prisma.SupportScalarFieldEnum, {
  name: 'SupportScalarFieldEnum',
})

@ArgsType()
export class FindManySupportArgs
  implements Required<Omit<Prisma.SupportFindManyArgs, 'include' | 'select'>>
{
  @Field(() => SupportWhereInput, { nullable: true })
  where: SupportWhereInput
  @Field(() => [SupportOrderByWithRelationInput], { nullable: true })
  orderBy: SupportOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputNumber, { nullable: true })
  cursor: WhereUniqueInputNumber
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.SupportScalarFieldEnum], { nullable: true })
  distinct: Prisma.SupportScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueSupportArgs {
  @Field({ nullable: true })
  where: SupportWhereUniqueInput
}
