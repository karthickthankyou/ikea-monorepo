import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { OrderOrderByWithRelationInput } from './orderBy.args'
import { OrderWhereInput, OrderWhereUniqueInput } from './where.args'

registerEnumType(Prisma.OrderScalarFieldEnum, {
  name: 'OrderScalarFieldEnum',
})

@ArgsType()
export class FindManyOrderArgs
  implements Required<Omit<Prisma.OrderFindManyArgs, 'include' | 'select'>>
{
  @Field(() => OrderWhereInput, { nullable: true })
  where: OrderWhereInput
  @Field(() => [OrderOrderByWithRelationInput], { nullable: true })
  orderBy: OrderOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputNumber, { nullable: true })
  cursor: WhereUniqueInputNumber
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.OrderScalarFieldEnum], { nullable: true })
  distinct: Prisma.OrderScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueOrderArgs {
  @Field({ nullable: true })
  where: OrderWhereUniqueInput
}
