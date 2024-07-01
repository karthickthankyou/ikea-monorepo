import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { OrderLogOrderByWithRelationInput } from './orderBy.args'
import { OrderLogWhereInput, OrderLogWhereUniqueInput } from './where.args'

registerEnumType(Prisma.OrderLogScalarFieldEnum, {
  name: 'OrderLogScalarFieldEnum',
})

@ArgsType()
export class FindManyOrderLogArgs
  implements Required<Omit<Prisma.OrderLogFindManyArgs, 'include' | 'select'>>
{
  @Field(() => OrderLogWhereInput, { nullable: true })
  where: OrderLogWhereInput
  @Field(() => [OrderLogOrderByWithRelationInput], { nullable: true })
  orderBy: OrderLogOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputNumber, { nullable: true })
  cursor: WhereUniqueInputNumber
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.OrderLogScalarFieldEnum], { nullable: true })
  distinct: Prisma.OrderLogScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueOrderLogArgs {
  @Field({ nullable: true })
  where: OrderLogWhereUniqueInput
}
