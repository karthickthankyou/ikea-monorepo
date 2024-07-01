import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, StringFilter } from 'src/common/dtos/common.input'

import { OrderListRelationFilter } from 'src/models/orders/dto/where.args'
import { SellerRelationFilter } from 'src/models/sellers/dto/where.args'
import { SupportListRelationFilter } from 'src/models/supports/dto/where.args'
import { UserProductListRelationFilter } from 'src/models/user-products/dto/where.args'
import { ViewListRelationFilter } from 'src/models/views/dto/where.args'

@InputType()
export class UserWhereUniqueInput
  implements Required<Prisma.UserWhereUniqueInput>
{
  @Field(() => String, { nullable: true })
  uid: string
}

@InputType()
export class UserWhereInput implements Required<Prisma.UserWhereInput> {
  @Field(() => SellerRelationFilter, { nullable: true })
  Seller: SellerRelationFilter

  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter
  @Field(() => StringFilter, { nullable: true })
  displayName: StringFilter
  @Field(() => StringFilter, { nullable: true })
  address: StringFilter
  @Field(() => StringFilter, { nullable: true })
  about: StringFilter
  @Field(() => ViewListRelationFilter, { nullable: true })
  View: ViewListRelationFilter
  @Field(() => OrderListRelationFilter, { nullable: true })
  Order: OrderListRelationFilter
  @Field(() => SupportListRelationFilter, { nullable: true })
  Support: SupportListRelationFilter
  @Field(() => UserProductListRelationFilter, { nullable: true })
  UserProduct: UserProductListRelationFilter

  @Field(() => [UserWhereInput], { nullable: true })
  AND: UserWhereInput[]
  @Field(() => [UserWhereInput], { nullable: true })
  OR: UserWhereInput[]
  @Field(() => [UserWhereInput], { nullable: true })
  NOT: UserWhereInput[]
}

@InputType()
export class UserListRelationFilter {
  @Field(() => UserWhereInput)
  every?: UserWhereInput
  @Field(() => UserWhereInput)
  some?: UserWhereInput
  @Field(() => UserWhereInput)
  none?: UserWhereInput
}

@InputType()
export class UserRelationFilter {
  @Field(() => UserWhereInput)
  is?: UserWhereInput
  @Field(() => UserWhereInput)
  isNot?: UserWhereInput
}
