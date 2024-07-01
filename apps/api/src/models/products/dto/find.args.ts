import { ArgsType, Field, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { WhereUniqueInputNumber } from 'src/common/dtos/common.input'
import { ProductOrderByWithRelationInput } from './orderBy.args'
import { ProductWhereInput, ProductWhereUniqueInput } from './where.args'

registerEnumType(Prisma.ProductScalarFieldEnum, {
  name: 'ProductScalarFieldEnum',
})

@ArgsType()
export class FindManyProductArgs
  implements Required<Omit<Prisma.ProductFindManyArgs, 'include' | 'select'>>
{
  @Field(() => ProductWhereInput, { nullable: true })
  where: ProductWhereInput
  @Field(() => [ProductOrderByWithRelationInput], { nullable: true })
  orderBy: ProductOrderByWithRelationInput[]
  @Field(() => WhereUniqueInputNumber, { nullable: true })
  cursor: WhereUniqueInputNumber
  @Field(() => Number, { nullable: true })
  take: number
  @Field(() => Number, { nullable: true })
  skip: number
  @Field(() => [Prisma.ProductScalarFieldEnum], { nullable: true })
  distinct: Prisma.ProductScalarFieldEnum[]
}

@ArgsType()
export class FindUniqueProductArgs {
  @Field({ nullable: true })
  where: ProductWhereUniqueInput
}
