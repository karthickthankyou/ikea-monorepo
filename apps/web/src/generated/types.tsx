import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
}

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>
  not?: InputMaybe<Scalars['Boolean']>
}

export type CreateOrderInput = {
  pid: Scalars['Int']
  status: OrderStatus
  uid: Scalars['String']
}

export type CreateOrderLogInput = {
  orderId: Scalars['Int']
  status: OrderStatus
}

export type CreateProductInput = {
  category: Scalars['String']
  description?: InputMaybe<Scalars['String']>
  discount?: InputMaybe<Scalars['Float']>
  images: Array<Scalars['String']>
  measurements?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  oldPrice?: InputMaybe<Scalars['Float']>
  outOfStock?: InputMaybe<Scalars['Boolean']>
  price: Scalars['Float']
  rating?: InputMaybe<Scalars['Float']>
  reviews?: InputMaybe<Scalars['Int']>
  sellerId: Scalars['String']
  subCategory: Scalars['String']
  tags: Array<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export type CreateSellerInput = {
  uid: Scalars['String']
}

export type CreateSupportInput = {
  category: Scalars['String']
  location: Scalars['String']
  message: Scalars['String']
  title: Scalars['String']
  uid: Scalars['String']
}

export type CreateUserInput = {
  about?: InputMaybe<Scalars['String']>
  address: Scalars['String']
  displayName: Scalars['String']
  uid: Scalars['String']
}

export type CreateUserProductInput = {
  pid: Scalars['Int']
  status: UserProductStatus
  uid: Scalars['String']
}

export type CreateViewInput = {
  pid: Scalars['Int']
  uid: Scalars['String']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
}

export type EnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>
  in?: InputMaybe<Array<OrderStatus>>
  not?: InputMaybe<EnumOrderStatusFilter>
  notIn?: InputMaybe<Array<OrderStatus>>
}

export type EnumUserProductStatusFilter = {
  equals?: InputMaybe<UserProductStatus>
  in?: InputMaybe<Array<UserProductStatus>>
  not?: InputMaybe<EnumUserProductStatusFilter>
  notIn?: InputMaybe<Array<UserProductStatus>>
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Scalars['Int']>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<Scalars['Int']>
  notIn?: InputMaybe<Scalars['Int']>
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type LoginOutput = {
  __typename?: 'LoginOutput'
  displayName: Scalars['String']
  email: Scalars['String']
  expiresIn: Scalars['String']
  idToken: Scalars['String']
  kind: Scalars['String']
  localId: Scalars['String']
  refreshToken: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createOrder: Order
  createOrderLog: OrderLog
  createProduct: Product
  createSeller: Seller
  createSupport: Support
  createUser: User
  createUserProduct: UserProduct
  createView: View
  login: LoginOutput
  refreshToken: RefreshTokenOutput
  register: RegisterOutput
  removeOrder: Order
  removeOrderLog: OrderLog
  removeProduct: Product
  removeSeller: Seller
  removeSupport: Support
  removeUser: User
  removeUserProduct: UserProduct
  removeView: View
  setAdmin: Scalars['Boolean']
  setRole: Scalars['Boolean']
  updateOrder: Order
  updateOrderLog: OrderLog
  updateProduct: Product
  updateSeller: Seller
  updateSupport: Support
  updateUser: User
  updateUserProduct: UserProduct
  updateView: View
}

export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput
}

export type MutationCreateOrderLogArgs = {
  createOrderLogInput: CreateOrderLogInput
}

export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput
}

export type MutationCreateSellerArgs = {
  createSellerInput: CreateSellerInput
}

export type MutationCreateSupportArgs = {
  createSupportInput: CreateSupportInput
}

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput
}

export type MutationCreateUserProductArgs = {
  createUserProductInput: CreateUserProductInput
}

export type MutationCreateViewArgs = {
  createViewInput: CreateViewInput
}

export type MutationLoginArgs = {
  credentials: LoginInput
}

export type MutationRefreshTokenArgs = {
  refreshTokenInput: RefreshTokenInput
}

export type MutationRegisterArgs = {
  credentials: RegisterInput
}

export type MutationRemoveOrderArgs = {
  where?: InputMaybe<OrderWhereUniqueInput>
}

export type MutationRemoveOrderLogArgs = {
  where?: InputMaybe<OrderLogWhereUniqueInput>
}

export type MutationRemoveProductArgs = {
  where?: InputMaybe<ProductWhereUniqueInput>
}

export type MutationRemoveSellerArgs = {
  where?: InputMaybe<SellerWhereUniqueInput>
}

export type MutationRemoveSupportArgs = {
  where?: InputMaybe<SupportWhereUniqueInput>
}

export type MutationRemoveUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type MutationRemoveUserProductArgs = {
  where?: InputMaybe<UserProductWhereUniqueInput>
}

export type MutationRemoveViewArgs = {
  where?: InputMaybe<ViewWhereUniqueInput>
}

export type MutationSetAdminArgs = {
  uid: Scalars['String']
}

export type MutationSetRoleArgs = {
  setRoleInput: SetRoleInput
}

export type MutationUpdateOrderArgs = {
  updateOrderInput: UpdateOrderInput
}

export type MutationUpdateOrderLogArgs = {
  updateOrderLogInput: UpdateOrderLogInput
}

export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput
}

export type MutationUpdateSellerArgs = {
  updateSellerInput: UpdateSellerInput
}

export type MutationUpdateSupportArgs = {
  updateSupportInput: UpdateSupportInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type MutationUpdateUserProductArgs = {
  updateUserProductInput: UpdateUserProductInput
}

export type MutationUpdateViewArgs = {
  updateViewInput: UpdateViewInput
}

export type Order = {
  __typename?: 'Order'
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  orderLogs: Array<OrderLog>
  pid: Scalars['Int']
  product: Product
  status: OrderStatus
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
  user: User
}

export type OrderListRelationFilter = {
  every?: InputMaybe<OrderWhereInput>
  none?: InputMaybe<OrderWhereInput>
  some?: InputMaybe<OrderWhereInput>
}

export type OrderLog = {
  __typename?: 'OrderLog'
  createdAt: Scalars['String']
  id: Scalars['Int']
  order: Order
  orderId: Scalars['Int']
  status: OrderStatus
  updatedAt: Scalars['String']
}

export type OrderLogListRelationFilter = {
  every?: InputMaybe<OrderLogWhereInput>
  none?: InputMaybe<OrderLogWhereInput>
  some?: InputMaybe<OrderLogWhereInput>
}

export type OrderLogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type OrderLogOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  order?: InputMaybe<SortOrder>
  orderId?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum OrderLogScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  OrderId = 'orderId',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type OrderLogWhereInput = {
  AND?: InputMaybe<Array<OrderLogWhereInput>>
  NOT?: InputMaybe<Array<OrderLogWhereInput>>
  OR?: InputMaybe<Array<OrderLogWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  order?: InputMaybe<OrderRelationFilter>
  orderId?: InputMaybe<IntFilter>
  status?: InputMaybe<EnumOrderStatusFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type OrderLogWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type OrderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type OrderOrderByWithRelationInput = {
  OrderLog?: InputMaybe<OrderLogOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  pid?: InputMaybe<SortOrder>
  product?: InputMaybe<ProductOrderByWithRelationInput>
  status?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type OrderRelationFilter = {
  is?: InputMaybe<OrderWhereInput>
  isNot?: InputMaybe<OrderWhereInput>
}

export enum OrderScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Pid = 'pid',
  Status = 'status',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export enum OrderStatus {
  Delivered = 'DELIVERED',
  Dispatched = 'DISPATCHED',
  OrderReceived = 'ORDER_RECEIVED',
}

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>
  NOT?: InputMaybe<Array<OrderWhereInput>>
  OR?: InputMaybe<Array<OrderWhereInput>>
  OrderLog?: InputMaybe<OrderLogListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  pid?: InputMaybe<IntFilter>
  product?: InputMaybe<ProductRelationFilter>
  status?: InputMaybe<EnumOrderStatusFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type Product = {
  __typename?: 'Product'
  category: Scalars['String']
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  discount?: Maybe<Scalars['Float']>
  id: Scalars['Int']
  images: Array<Scalars['String']>
  measurements?: Maybe<Scalars['String']>
  name: Scalars['String']
  oldPrice?: Maybe<Scalars['Float']>
  orders: Array<Order>
  outOfStock?: Maybe<Scalars['Boolean']>
  price: Scalars['Float']
  rating?: Maybe<Scalars['Float']>
  reviews?: Maybe<Scalars['Int']>
  sellerId: Scalars['String']
  subCategory: Scalars['String']
  tags: Array<Scalars['String']>
  updatedAt: Scalars['DateTime']
  url?: Maybe<Scalars['String']>
  userProduct?: Maybe<UserProduct>
  userProducts?: Maybe<Array<UserProduct>>
  views: Array<View>
}

export type ProductCountOutput = {
  __typename?: 'ProductCountOutput'
  count: Scalars['Int']
}

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>
  none?: InputMaybe<ProductWhereInput>
  some?: InputMaybe<ProductWhereInput>
}

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ProductOrderByWithRelationInput = {
  Order?: InputMaybe<OrderOrderByRelationAggregateInput>
  UserProduct?: InputMaybe<UserProductOrderByRelationAggregateInput>
  View?: InputMaybe<ViewOrderByRelationAggregateInput>
  category?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  discount?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  images?: InputMaybe<SortOrder>
  measurements?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  oldPrice?: InputMaybe<SortOrder>
  outOfStock?: InputMaybe<SortOrder>
  price?: InputMaybe<SortOrder>
  rating?: InputMaybe<SortOrder>
  reviews?: InputMaybe<SortOrder>
  seller?: InputMaybe<SellerOrderByWithRelationInput>
  sellerId?: InputMaybe<SortOrder>
  subCategory?: InputMaybe<SortOrder>
  tags?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  url?: InputMaybe<SortOrder>
}

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>
  isNot?: InputMaybe<ProductWhereInput>
}

export enum ProductScalarFieldEnum {
  Category = 'category',
  CreatedAt = 'createdAt',
  Description = 'description',
  Discount = 'discount',
  Id = 'id',
  Images = 'images',
  Measurements = 'measurements',
  Name = 'name',
  OldPrice = 'oldPrice',
  OutOfStock = 'outOfStock',
  Price = 'price',
  Rating = 'rating',
  Reviews = 'reviews',
  SellerId = 'sellerId',
  SubCategory = 'subCategory',
  Tags = 'tags',
  UpdatedAt = 'updatedAt',
  Url = 'url',
}

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>
  NOT?: InputMaybe<Array<ProductWhereInput>>
  OR?: InputMaybe<Array<ProductWhereInput>>
  Order?: InputMaybe<OrderListRelationFilter>
  UserProduct?: InputMaybe<UserProductListRelationFilter>
  View?: InputMaybe<ViewListRelationFilter>
  category?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  discount?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  images?: InputMaybe<StringFilter>
  measurements?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  oldPrice?: InputMaybe<IntFilter>
  outOfStock?: InputMaybe<BoolFilter>
  price?: InputMaybe<IntFilter>
  rating?: InputMaybe<IntFilter>
  reviews?: InputMaybe<IntFilter>
  seller?: InputMaybe<SellerRelationFilter>
  sellerId?: InputMaybe<StringFilter>
  subCategory?: InputMaybe<StringFilter>
  tags?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  url?: InputMaybe<StringFilter>
}

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type Query = {
  __typename?: 'Query'
  allUserProducts: Array<UserProduct>
  myOrders: Array<Order>
  myProducts: Array<UserProduct>
  mySupports: Array<Support>
  myViews: Array<View>
  order: Order
  orderAggregate: ProductCountOutput
  orderLog: OrderLog
  orderLogs: Array<OrderLog>
  orders: Array<Order>
  product: Product
  productAggregate: ProductCountOutput
  products: Array<Product>
  seller: Seller
  sellers: Array<Seller>
  support: Support
  supportAggregate: ProductCountOutput
  supports: Array<Support>
  user: User
  userProduct: UserProduct
  users: Array<User>
  view: View
  views: Array<View>
}

export type QueryAllUserProductsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<UserProductScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserProductOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<UserProductWhereInput>
}

export type QueryMyOrdersArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<OrderWhereInput>
}

export type QueryMyProductsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<UserProductScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserProductOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<UserProductWhereInput>
}

export type QueryMySupportsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<SupportScalarFieldEnum>>
  orderBy?: InputMaybe<Array<SupportOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SupportWhereInput>
}

export type QueryMyViewsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<ViewScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ViewOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ViewWhereInput>
}

export type QueryOrderArgs = {
  where?: InputMaybe<OrderWhereUniqueInput>
}

export type QueryOrderAggregateArgs = {
  OrderWhereInput?: InputMaybe<OrderWhereInput>
}

export type QueryOrderLogArgs = {
  where?: InputMaybe<OrderLogWhereUniqueInput>
}

export type QueryOrderLogsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<OrderLogScalarFieldEnum>>
  orderBy?: InputMaybe<Array<OrderLogOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<OrderLogWhereInput>
}

export type QueryOrdersArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<OrderWhereInput>
}

export type QueryProductArgs = {
  where?: InputMaybe<ProductWhereUniqueInput>
}

export type QueryProductAggregateArgs = {
  ProductWhereInput?: InputMaybe<ProductWhereInput>
}

export type QueryProductsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ProductWhereInput>
}

export type QuerySellerArgs = {
  where?: InputMaybe<SellerWhereUniqueInput>
}

export type QuerySellersArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>
  distinct?: InputMaybe<Array<SellerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<SellerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SellerWhereInput>
}

export type QuerySupportArgs = {
  where?: InputMaybe<SupportWhereUniqueInput>
}

export type QuerySupportAggregateArgs = {
  SupportWhereInput?: InputMaybe<SupportWhereInput>
}

export type QuerySupportsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<SupportScalarFieldEnum>>
  orderBy?: InputMaybe<Array<SupportOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SupportWhereInput>
}

export type QueryUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type QueryUserProductArgs = {
  where?: InputMaybe<UserProductWhereUniqueInput>
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<UserWhereInput>
}

export type QueryViewArgs = {
  where?: InputMaybe<ViewWhereUniqueInput>
}

export type QueryViewsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<ViewScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ViewOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ViewWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RefreshTokenInput = {
  refresh_token: Scalars['String']
}

export type RefreshTokenOutput = {
  __typename?: 'RefreshTokenOutput'
  access_token: Scalars['String']
  expires_in: Scalars['String']
  id_token: Scalars['String']
  project_id: Scalars['String']
  refresh_token: Scalars['String']
  token_type: Scalars['String']
  user_id: Scalars['String']
}

export type RegisterInput = {
  displayName?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  password: Scalars['String']
}

export type RegisterOutput = {
  __typename?: 'RegisterOutput'
  displayName: Scalars['String']
  email: Scalars['String']
  expiresIn: Scalars['String']
  idToken: Scalars['String']
  kind: Scalars['String']
  localId: Scalars['String']
  refreshToken: Scalars['String']
}

/** Enum for roles */
export enum RoleEnum {
  Admin = 'admin',
  Moderator = 'moderator',
}

export type Seller = {
  __typename?: 'Seller'
  createdAt: Scalars['String']
  products: Array<Product>
  uid: Scalars['String']
  updatedAt: Scalars['String']
}

export type SellerOrderByWithRelationInput = {
  Product?: InputMaybe<ProductOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type SellerRelationFilter = {
  is?: InputMaybe<SellerWhereInput>
  isNot?: InputMaybe<SellerWhereInput>
}

export enum SellerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type SellerWhereInput = {
  AND?: InputMaybe<Array<SellerWhereInput>>
  NOT?: InputMaybe<Array<SellerWhereInput>>
  OR?: InputMaybe<Array<SellerWhereInput>>
  Product?: InputMaybe<ProductListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type SellerWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>
}

export type SetRoleInput = {
  role: RoleEnum
  uid: Scalars['String']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type Support = {
  __typename?: 'Support'
  category: Scalars['String']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  location: Scalars['String']
  message: Scalars['String']
  title: Scalars['String']
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
  user: User
}

export type SupportListRelationFilter = {
  every?: InputMaybe<SupportWhereInput>
  none?: InputMaybe<SupportWhereInput>
  some?: InputMaybe<SupportWhereInput>
}

export type SupportOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type SupportOrderByWithRelationInput = {
  category?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  location?: InputMaybe<SortOrder>
  message?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export enum SupportScalarFieldEnum {
  Category = 'category',
  CreatedAt = 'createdAt',
  Id = 'id',
  Location = 'location',
  Message = 'message',
  Title = 'title',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type SupportWhereInput = {
  AND?: InputMaybe<Array<SupportWhereInput>>
  NOT?: InputMaybe<Array<SupportWhereInput>>
  OR?: InputMaybe<Array<SupportWhereInput>>
  category?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  location: StringFilter
  message?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type SupportWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type UpdateOrderInput = {
  id: Scalars['Int']
  pid?: InputMaybe<Scalars['Int']>
  status?: InputMaybe<OrderStatus>
  uid?: InputMaybe<Scalars['String']>
}

export type UpdateOrderLogInput = {
  id: Scalars['Int']
  orderId?: InputMaybe<Scalars['Int']>
  status?: InputMaybe<OrderStatus>
}

export type UpdateProductInput = {
  category?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  discount?: InputMaybe<Scalars['Float']>
  id: Scalars['Int']
  images?: InputMaybe<Array<Scalars['String']>>
  measurements?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  oldPrice?: InputMaybe<Scalars['Float']>
  outOfStock?: InputMaybe<Scalars['Boolean']>
  price?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
  reviews?: InputMaybe<Scalars['Int']>
  sellerId?: InputMaybe<Scalars['String']>
  subCategory?: InputMaybe<Scalars['String']>
  tags?: InputMaybe<Array<Scalars['String']>>
  url?: InputMaybe<Scalars['String']>
}

export type UpdateSellerInput = {
  id: Scalars['String']
  uid?: InputMaybe<Scalars['String']>
}

export type UpdateSupportInput = {
  category?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
  location?: InputMaybe<Scalars['String']>
  message?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['String']>
}

export type UpdateUserInput = {
  about?: InputMaybe<Scalars['String']>
  address?: InputMaybe<Scalars['String']>
  displayName?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  uid?: InputMaybe<Scalars['String']>
}

export type UpdateUserProductInput = {
  id: Scalars['Int']
  pid?: InputMaybe<Scalars['Int']>
  status?: InputMaybe<UserProductStatus>
  uid?: InputMaybe<Scalars['String']>
}

export type UpdateViewInput = {
  id: Scalars['Int']
  pid?: InputMaybe<Scalars['Int']>
  uid?: InputMaybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  about: Scalars['String']
  address: Scalars['String']
  createdAt: Scalars['String']
  displayName: Scalars['String']
  orders: Array<Order>
  seller: Seller
  supports: Array<Support>
  uid: Scalars['String']
  updatedAt: Scalars['String']
  userProducts: Array<UserProduct>
  views: Array<View>
}

export type UserOrderByWithRelationInput = {
  Order?: InputMaybe<OrderOrderByRelationAggregateInput>
  Seller?: InputMaybe<SellerOrderByWithRelationInput>
  Support?: InputMaybe<SupportOrderByRelationAggregateInput>
  UserProduct?: InputMaybe<UserProductOrderByRelationAggregateInput>
  View?: InputMaybe<ViewOrderByRelationAggregateInput>
  about?: InputMaybe<SortOrder>
  address?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type UserProduct = {
  __typename?: 'UserProduct'
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  pid: Scalars['Int']
  product: Product
  status: UserProductStatus
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
  user: User
}

export type UserProductListRelationFilter = {
  every?: InputMaybe<UserProductWhereInput>
  none?: InputMaybe<UserProductWhereInput>
  some?: InputMaybe<UserProductWhereInput>
}

export type UserProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type UserProductOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  pid?: InputMaybe<SortOrder>
  product?: InputMaybe<ProductOrderByWithRelationInput>
  status?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export enum UserProductScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Pid = 'pid',
  Status = 'status',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export enum UserProductStatus {
  InCart = 'IN_CART',
  RemovedFromWishlist = 'REMOVED_FROM_WISHLIST',
  SavedForLater = 'SAVED_FOR_LATER',
  Wishlisted = 'WISHLISTED',
}

export type UserProductWhereInput = {
  AND?: InputMaybe<Array<UserProductWhereInput>>
  NOT?: InputMaybe<Array<UserProductWhereInput>>
  OR?: InputMaybe<Array<UserProductWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  pid?: InputMaybe<IntFilter>
  product?: InputMaybe<ProductRelationFilter>
  status?: InputMaybe<EnumUserProductStatusFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type UserProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>
  isNot?: InputMaybe<UserWhereInput>
}

export enum UserScalarFieldEnum {
  About = 'about',
  Address = 'address',
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  Order?: InputMaybe<OrderListRelationFilter>
  Seller?: InputMaybe<SellerRelationFilter>
  Support?: InputMaybe<SupportListRelationFilter>
  UserProduct?: InputMaybe<UserProductListRelationFilter>
  View?: InputMaybe<ViewListRelationFilter>
  about?: InputMaybe<StringFilter>
  address?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>
}

export type View = {
  __typename?: 'View'
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  pid: Scalars['Int']
  product: Product
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
  user: User
}

export type ViewListRelationFilter = {
  every?: InputMaybe<ViewWhereInput>
  none?: InputMaybe<ViewWhereInput>
  some?: InputMaybe<ViewWhereInput>
}

export type ViewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ViewOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  pid?: InputMaybe<SortOrder>
  product?: InputMaybe<ProductOrderByWithRelationInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export enum ViewScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Pid = 'pid',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type ViewWhereInput = {
  AND?: InputMaybe<Array<ViewWhereInput>>
  NOT?: InputMaybe<Array<ViewWhereInput>>
  OR?: InputMaybe<Array<ViewWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  pid?: InputMaybe<IntFilter>
  product?: InputMaybe<ProductRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type ViewWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type WhereUniqueInputNumber = {
  id?: InputMaybe<Scalars['Int']>
}

export type WhereUniqueInputUid = {
  uid?: InputMaybe<Scalars['String']>
}

export type CreateUserProductMutationVariables = Exact<{
  createUserProductInput: CreateUserProductInput
}>

export type CreateUserProductMutation = {
  __typename?: 'Mutation'
  createUserProduct: {
    __typename?: 'UserProduct'
    id: number
    createdAt: any
    uid: string
    pid: number
    status: UserProductStatus
    updatedAt: any
  }
}

export type CreateProductMutationVariables = Exact<{
  createProductInput: CreateProductInput
}>

export type CreateProductMutation = {
  __typename?: 'Mutation'
  createProduct: {
    __typename?: 'Product'
    id: number
    name: string
    category: string
    price: number
    oldPrice?: number | null
  }
}

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput
}>

export type CreateUserMutation = {
  __typename?: 'Mutation'
  createUser: {
    __typename?: 'User'
    about: string
    address: string
    createdAt: string
    displayName: string
    uid: string
  }
}

export type ProductFragmentFragment = {
  __typename?: 'Product'
  id: number
  category: string
  images: Array<string>
  createdAt: any
  updatedAt: any
  name: string
  url?: string | null
  price: number
  subCategory: string
  outOfStock?: boolean | null
  reviews?: number | null
  rating?: number | null
  discount?: number | null
  oldPrice?: number | null
  tags: Array<string>
  description?: string | null
  sellerId: string
  measurements?: string | null
  userProduct?: {
    __typename?: 'UserProduct'
    pid: number
    id: number
    uid: string
    status: UserProductStatus
  } | null
}

export type ProductsQueryVariables = Exact<{
  where?: InputMaybe<ProductWhereInput>
  orderBy?: InputMaybe<
    Array<ProductOrderByWithRelationInput> | ProductOrderByWithRelationInput
  >
  cursor?: InputMaybe<WhereUniqueInputNumber>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<Array<ProductScalarFieldEnum> | ProductScalarFieldEnum>
}>

export type ProductsQuery = {
  __typename?: 'Query'
  products: Array<{
    __typename?: 'Product'
    id: number
    category: string
    images: Array<string>
    createdAt: any
    updatedAt: any
    name: string
    url?: string | null
    price: number
    subCategory: string
    outOfStock?: boolean | null
    reviews?: number | null
    rating?: number | null
    discount?: number | null
    oldPrice?: number | null
    tags: Array<string>
    description?: string | null
    sellerId: string
    measurements?: string | null
    userProduct?: {
      __typename?: 'UserProduct'
      pid: number
      id: number
      uid: string
      status: UserProductStatus
    } | null
  }>
  productAggregate: { __typename?: 'ProductCountOutput'; count: number }
}

export type ProductQueryVariables = Exact<{
  where?: InputMaybe<ProductWhereUniqueInput>
}>

export type ProductQuery = {
  __typename?: 'Query'
  product: {
    __typename?: 'Product'
    id: number
    category: string
    images: Array<string>
    createdAt: any
    updatedAt: any
    name: string
    url?: string | null
    price: number
    subCategory: string
    outOfStock?: boolean | null
    reviews?: number | null
    rating?: number | null
    discount?: number | null
    oldPrice?: number | null
    tags: Array<string>
    description?: string | null
    sellerId: string
    measurements?: string | null
    userProduct?: {
      __typename?: 'UserProduct'
      pid: number
      id: number
      uid: string
      status: UserProductStatus
    } | null
  }
}

export type MyProductsQueryVariables = Exact<{
  where?: InputMaybe<UserProductWhereInput>
  orderBy?: InputMaybe<
    | Array<UserProductOrderByWithRelationInput>
    | UserProductOrderByWithRelationInput
  >
  cursor?: InputMaybe<WhereUniqueInputNumber>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<
    Array<UserProductScalarFieldEnum> | UserProductScalarFieldEnum
  >
}>

export type MyProductsQuery = {
  __typename?: 'Query'
  myProducts: Array<{
    __typename?: 'UserProduct'
    uid: string
    status: UserProductStatus
    createdAt: any
    updatedAt: any
    id: number
    product: {
      __typename?: 'Product'
      id: number
      category: string
      images: Array<string>
      createdAt: any
      updatedAt: any
      name: string
      url?: string | null
      price: number
      subCategory: string
      outOfStock?: boolean | null
      reviews?: number | null
      rating?: number | null
      discount?: number | null
      oldPrice?: number | null
      tags: Array<string>
      description?: string | null
      sellerId: string
      measurements?: string | null
      userProduct?: {
        __typename?: 'UserProduct'
        pid: number
        id: number
        uid: string
        status: UserProductStatus
      } | null
    }
  }>
}

export type ViewsQueryVariables = Exact<{
  where?: InputMaybe<ViewWhereInput>
  orderBy?: InputMaybe<
    Array<ViewOrderByWithRelationInput> | ViewOrderByWithRelationInput
  >
  cursor?: InputMaybe<WhereUniqueInputNumber>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<Array<ViewScalarFieldEnum> | ViewScalarFieldEnum>
}>

export type ViewsQuery = {
  __typename?: 'Query'
  myViews: Array<{
    __typename?: 'View'
    createdAt: any
    id: number
    pid: number
    uid: string
    updatedAt: any
    product: {
      __typename?: 'Product'
      images: Array<string>
      name: string
      price: number
      oldPrice?: number | null
    }
  }>
}

export type CreateSellerMutationVariables = Exact<{
  createSellerInput: CreateSellerInput
}>

export type CreateSellerMutation = {
  __typename?: 'Mutation'
  createSeller: { __typename?: 'Seller'; uid: string }
}

export type SellerQueryVariables = Exact<{
  where?: InputMaybe<SellerWhereUniqueInput>
}>

export type SellerQuery = {
  __typename?: 'Query'
  seller: { __typename?: 'Seller'; uid: string }
}

export type CreateSupportMutationVariables = Exact<{
  createSupportInput: CreateSupportInput
}>

export type CreateSupportMutation = {
  __typename?: 'Mutation'
  createSupport: { __typename?: 'Support'; id: number }
}

export type MySupportsQueryVariables = Exact<{
  where?: InputMaybe<SupportWhereInput>
  orderBy?: InputMaybe<
    Array<SupportOrderByWithRelationInput> | SupportOrderByWithRelationInput
  >
  cursor?: InputMaybe<WhereUniqueInputNumber>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<Array<SupportScalarFieldEnum> | SupportScalarFieldEnum>
}>

export type MySupportsQuery = {
  __typename?: 'Query'
  mySupports: Array<{
    __typename?: 'Support'
    id: number
    message: string
    title: string
    uid: string
    updatedAt: any
    createdAt: any
  }>
  supportAggregate: { __typename?: 'ProductCountOutput'; count: number }
}

export type CreateViewMutationVariables = Exact<{
  createViewInput: CreateViewInput
}>

export type CreateViewMutation = {
  __typename?: 'Mutation'
  createView: { __typename?: 'View'; id: number }
}

export type MyOrdersQueryVariables = Exact<{
  where?: InputMaybe<OrderWhereInput>
  orderBy?: InputMaybe<
    Array<OrderOrderByWithRelationInput> | OrderOrderByWithRelationInput
  >
  cursor?: InputMaybe<WhereUniqueInputNumber>
  take?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  distinct?: InputMaybe<Array<OrderScalarFieldEnum> | OrderScalarFieldEnum>
}>

export type MyOrdersQuery = {
  __typename?: 'Query'
  myOrders: Array<{
    __typename?: 'Order'
    id: number
    updatedAt: any
    createdAt: any
    product: {
      __typename?: 'Product'
      id: number
      category: string
      images: Array<string>
      createdAt: any
      updatedAt: any
      name: string
      url?: string | null
      price: number
      subCategory: string
      outOfStock?: boolean | null
      reviews?: number | null
      rating?: number | null
      discount?: number | null
      oldPrice?: number | null
      tags: Array<string>
      description?: string | null
      sellerId: string
      measurements?: string | null
      userProduct?: {
        __typename?: 'UserProduct'
        pid: number
        id: number
        uid: string
        status: UserProductStatus
      } | null
    }
  }>
  orderAggregate: { __typename?: 'ProductCountOutput'; count: number }
}

export type CreateOrderMutationVariables = Exact<{
  createOrderInput: CreateOrderInput
}>

export type CreateOrderMutation = {
  __typename?: 'Mutation'
  createOrder: { __typename?: 'Order'; id: number }
}

export type RemoveUserProductMutationVariables = Exact<{
  where?: InputMaybe<UserProductWhereUniqueInput>
}>

export type RemoveUserProductMutation = {
  __typename?: 'Mutation'
  removeUserProduct: { __typename?: 'UserProduct'; id: number }
}

export type RemoveCartMutationVariables = Exact<{
  createUserProductInput: CreateUserProductInput
}>

export type RemoveCartMutation = {
  __typename?: 'Mutation'
  createUserProduct: { __typename?: 'UserProduct'; id: number }
}

export type LoginMutationVariables = Exact<{
  credentials: LoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'LoginOutput'
    idToken: string
    kind: string
    localId: string
    refreshToken: string
    expiresIn: string
    email: string
    displayName: string
  }
}

export const ProductFragmentFragmentDoc = /*#__PURE__*/ gql`
  fragment ProductFragment on Product {
    id
    category
    images
    createdAt
    updatedAt
    name
    url
    price
    subCategory
    outOfStock
    reviews
    rating
    discount
    oldPrice
    tags
    description
    sellerId
    measurements
    userProduct {
      pid
      id
      uid
      status
    }
  }
`
export const CreateUserProductDocument = /*#__PURE__*/ gql`
  mutation createUserProduct($createUserProductInput: CreateUserProductInput!) {
    createUserProduct(createUserProductInput: $createUserProductInput) {
      id
      createdAt
      uid
      pid
      status
      updatedAt
    }
  }
`
export type CreateUserProductMutationFn = Apollo.MutationFunction<
  CreateUserProductMutation,
  CreateUserProductMutationVariables
>

/**
 * __useCreateUserProductMutation__
 *
 * To run a mutation, you first call `useCreateUserProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserProductMutation, { data, loading, error }] = useCreateUserProductMutation({
 *   variables: {
 *      createUserProductInput: // value for 'createUserProductInput'
 *   },
 * });
 */
export function useCreateUserProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserProductMutation,
    CreateUserProductMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateUserProductMutation,
    CreateUserProductMutationVariables
  >(CreateUserProductDocument, options)
}
export type CreateUserProductMutationHookResult = ReturnType<
  typeof useCreateUserProductMutation
>
export type CreateUserProductMutationResult =
  Apollo.MutationResult<CreateUserProductMutation>
export type CreateUserProductMutationOptions = Apollo.BaseMutationOptions<
  CreateUserProductMutation,
  CreateUserProductMutationVariables
>
export const CreateProductDocument = /*#__PURE__*/ gql`
  mutation CreateProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      id
      name
      category
      price
      oldPrice
    }
  }
`
export type CreateProductMutationFn = Apollo.MutationFunction<
  CreateProductMutation,
  CreateProductMutationVariables
>

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      createProductInput: // value for 'createProductInput'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductMutation,
    CreateProductMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateProductMutation,
    CreateProductMutationVariables
  >(CreateProductDocument, options)
}
export type CreateProductMutationHookResult = ReturnType<
  typeof useCreateProductMutation
>
export type CreateProductMutationResult =
  Apollo.MutationResult<CreateProductMutation>
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>
export const CreateUserDocument = /*#__PURE__*/ gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      about
      address
      createdAt
      displayName
      uid
    }
  }
`
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  )
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>
export const ProductsDocument = /*#__PURE__*/ gql`
  query Products(
    $where: ProductWhereInput
    $orderBy: [ProductOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [ProductScalarFieldEnum!]
  ) {
    products(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...ProductFragment
    }
    productAggregate(ProductWhereInput: $where) {
      count
    }
  }
  ${ProductFragmentFragmentDoc}
`

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    options,
  )
}
export function useProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductsQuery,
    ProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    options,
  )
}
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>
export type ProductsLazyQueryHookResult = ReturnType<
  typeof useProductsLazyQuery
>
export type ProductsQueryResult = Apollo.QueryResult<
  ProductsQuery,
  ProductsQueryVariables
>
export const ProductDocument = /*#__PURE__*/ gql`
  query Product($where: ProductWhereUniqueInput) {
    product(where: $where) {
      ...ProductFragment
    }
  }
  ${ProductFragmentFragmentDoc}
`

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options,
  )
}
export function useProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductQuery,
    ProductQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options,
  )
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>
export type ProductQueryResult = Apollo.QueryResult<
  ProductQuery,
  ProductQueryVariables
>
export const MyProductsDocument = /*#__PURE__*/ gql`
  query MyProducts(
    $where: UserProductWhereInput
    $orderBy: [UserProductOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [UserProductScalarFieldEnum!]
  ) {
    myProducts(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      uid
      status
      createdAt
      updatedAt
      id
      product {
        ...ProductFragment
      }
    }
  }
  ${ProductFragmentFragmentDoc}
`

/**
 * __useMyProductsQuery__
 *
 * To run a query within a React component, call `useMyProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyProductsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useMyProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MyProductsQuery,
    MyProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MyProductsQuery, MyProductsQueryVariables>(
    MyProductsDocument,
    options,
  )
}
export function useMyProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyProductsQuery,
    MyProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MyProductsQuery, MyProductsQueryVariables>(
    MyProductsDocument,
    options,
  )
}
export type MyProductsQueryHookResult = ReturnType<typeof useMyProductsQuery>
export type MyProductsLazyQueryHookResult = ReturnType<
  typeof useMyProductsLazyQuery
>
export type MyProductsQueryResult = Apollo.QueryResult<
  MyProductsQuery,
  MyProductsQueryVariables
>
export const ViewsDocument = /*#__PURE__*/ gql`
  query Views(
    $where: ViewWhereInput
    $orderBy: [ViewOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [ViewScalarFieldEnum!]
  ) {
    myViews(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      createdAt
      id
      pid
      uid
      product {
        images
        name
        price
        oldPrice
      }
      updatedAt
    }
  }
`

/**
 * __useViewsQuery__
 *
 * To run a query within a React component, call `useViewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useViewsQuery(
  baseOptions?: Apollo.QueryHookOptions<ViewsQuery, ViewsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ViewsQuery, ViewsQueryVariables>(
    ViewsDocument,
    options,
  )
}
export function useViewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ViewsQuery, ViewsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ViewsQuery, ViewsQueryVariables>(
    ViewsDocument,
    options,
  )
}
export type ViewsQueryHookResult = ReturnType<typeof useViewsQuery>
export type ViewsLazyQueryHookResult = ReturnType<typeof useViewsLazyQuery>
export type ViewsQueryResult = Apollo.QueryResult<
  ViewsQuery,
  ViewsQueryVariables
>
export const CreateSellerDocument = /*#__PURE__*/ gql`
  mutation CreateSeller($createSellerInput: CreateSellerInput!) {
    createSeller(createSellerInput: $createSellerInput) {
      uid
    }
  }
`
export type CreateSellerMutationFn = Apollo.MutationFunction<
  CreateSellerMutation,
  CreateSellerMutationVariables
>

/**
 * __useCreateSellerMutation__
 *
 * To run a mutation, you first call `useCreateSellerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSellerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSellerMutation, { data, loading, error }] = useCreateSellerMutation({
 *   variables: {
 *      createSellerInput: // value for 'createSellerInput'
 *   },
 * });
 */
export function useCreateSellerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSellerMutation,
    CreateSellerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateSellerMutation,
    CreateSellerMutationVariables
  >(CreateSellerDocument, options)
}
export type CreateSellerMutationHookResult = ReturnType<
  typeof useCreateSellerMutation
>
export type CreateSellerMutationResult =
  Apollo.MutationResult<CreateSellerMutation>
export type CreateSellerMutationOptions = Apollo.BaseMutationOptions<
  CreateSellerMutation,
  CreateSellerMutationVariables
>
export const SellerDocument = /*#__PURE__*/ gql`
  query Seller($where: SellerWhereUniqueInput) {
    seller(where: $where) {
      uid
    }
  }
`

/**
 * __useSellerQuery__
 *
 * To run a query within a React component, call `useSellerQuery` and pass it any options that fit your needs.
 * When your component renders, `useSellerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSellerQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSellerQuery(
  baseOptions?: Apollo.QueryHookOptions<SellerQuery, SellerQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SellerQuery, SellerQueryVariables>(
    SellerDocument,
    options,
  )
}
export function useSellerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SellerQuery, SellerQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SellerQuery, SellerQueryVariables>(
    SellerDocument,
    options,
  )
}
export type SellerQueryHookResult = ReturnType<typeof useSellerQuery>
export type SellerLazyQueryHookResult = ReturnType<typeof useSellerLazyQuery>
export type SellerQueryResult = Apollo.QueryResult<
  SellerQuery,
  SellerQueryVariables
>
export const CreateSupportDocument = /*#__PURE__*/ gql`
  mutation CreateSupport($createSupportInput: CreateSupportInput!) {
    createSupport(createSupportInput: $createSupportInput) {
      id
    }
  }
`
export type CreateSupportMutationFn = Apollo.MutationFunction<
  CreateSupportMutation,
  CreateSupportMutationVariables
>

/**
 * __useCreateSupportMutation__
 *
 * To run a mutation, you first call `useCreateSupportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSupportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSupportMutation, { data, loading, error }] = useCreateSupportMutation({
 *   variables: {
 *      createSupportInput: // value for 'createSupportInput'
 *   },
 * });
 */
export function useCreateSupportMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSupportMutation,
    CreateSupportMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateSupportMutation,
    CreateSupportMutationVariables
  >(CreateSupportDocument, options)
}
export type CreateSupportMutationHookResult = ReturnType<
  typeof useCreateSupportMutation
>
export type CreateSupportMutationResult =
  Apollo.MutationResult<CreateSupportMutation>
export type CreateSupportMutationOptions = Apollo.BaseMutationOptions<
  CreateSupportMutation,
  CreateSupportMutationVariables
>
export const MySupportsDocument = /*#__PURE__*/ gql`
  query MySupports(
    $where: SupportWhereInput
    $orderBy: [SupportOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [SupportScalarFieldEnum!]
  ) {
    mySupports(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      message
      title
      uid
      updatedAt
      createdAt
    }
    supportAggregate {
      count
    }
  }
`

/**
 * __useMySupportsQuery__
 *
 * To run a query within a React component, call `useMySupportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMySupportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMySupportsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useMySupportsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MySupportsQuery,
    MySupportsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MySupportsQuery, MySupportsQueryVariables>(
    MySupportsDocument,
    options,
  )
}
export function useMySupportsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MySupportsQuery,
    MySupportsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MySupportsQuery, MySupportsQueryVariables>(
    MySupportsDocument,
    options,
  )
}
export type MySupportsQueryHookResult = ReturnType<typeof useMySupportsQuery>
export type MySupportsLazyQueryHookResult = ReturnType<
  typeof useMySupportsLazyQuery
>
export type MySupportsQueryResult = Apollo.QueryResult<
  MySupportsQuery,
  MySupportsQueryVariables
>
export const CreateViewDocument = /*#__PURE__*/ gql`
  mutation CreateView($createViewInput: CreateViewInput!) {
    createView(createViewInput: $createViewInput) {
      id
    }
  }
`
export type CreateViewMutationFn = Apollo.MutationFunction<
  CreateViewMutation,
  CreateViewMutationVariables
>

/**
 * __useCreateViewMutation__
 *
 * To run a mutation, you first call `useCreateViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createViewMutation, { data, loading, error }] = useCreateViewMutation({
 *   variables: {
 *      createViewInput: // value for 'createViewInput'
 *   },
 * });
 */
export function useCreateViewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateViewMutation,
    CreateViewMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateViewMutation, CreateViewMutationVariables>(
    CreateViewDocument,
    options,
  )
}
export type CreateViewMutationHookResult = ReturnType<
  typeof useCreateViewMutation
>
export type CreateViewMutationResult = Apollo.MutationResult<CreateViewMutation>
export type CreateViewMutationOptions = Apollo.BaseMutationOptions<
  CreateViewMutation,
  CreateViewMutationVariables
>
export const MyOrdersDocument = /*#__PURE__*/ gql`
  query MyOrders(
    $where: OrderWhereInput
    $orderBy: [OrderOrderByWithRelationInput!]
    $cursor: WhereUniqueInputNumber
    $take: Int
    $skip: Int
    $distinct: [OrderScalarFieldEnum!]
  ) {
    myOrders(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      updatedAt
      createdAt
      product {
        ...ProductFragment
      }
    }
    orderAggregate {
      count
    }
  }
  ${ProductFragmentFragmentDoc}
`

/**
 * __useMyOrdersQuery__
 *
 * To run a query within a React component, call `useMyOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyOrdersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useMyOrdersQuery(
  baseOptions?: Apollo.QueryHookOptions<MyOrdersQuery, MyOrdersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MyOrdersQuery, MyOrdersQueryVariables>(
    MyOrdersDocument,
    options,
  )
}
export function useMyOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyOrdersQuery,
    MyOrdersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MyOrdersQuery, MyOrdersQueryVariables>(
    MyOrdersDocument,
    options,
  )
}
export type MyOrdersQueryHookResult = ReturnType<typeof useMyOrdersQuery>
export type MyOrdersLazyQueryHookResult = ReturnType<
  typeof useMyOrdersLazyQuery
>
export type MyOrdersQueryResult = Apollo.QueryResult<
  MyOrdersQuery,
  MyOrdersQueryVariables
>
export const CreateOrderDocument = /*#__PURE__*/ gql`
  mutation CreateOrder($createOrderInput: CreateOrderInput!) {
    createOrder(createOrderInput: $createOrderInput) {
      id
    }
  }
`
export type CreateOrderMutationFn = Apollo.MutationFunction<
  CreateOrderMutation,
  CreateOrderMutationVariables
>

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      createOrderInput: // value for 'createOrderInput'
 *   },
 * });
 */
export function useCreateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOrderMutation,
    CreateOrderMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(
    CreateOrderDocument,
    options,
  )
}
export type CreateOrderMutationHookResult = ReturnType<
  typeof useCreateOrderMutation
>
export type CreateOrderMutationResult =
  Apollo.MutationResult<CreateOrderMutation>
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateOrderMutation,
  CreateOrderMutationVariables
>
export const RemoveUserProductDocument = /*#__PURE__*/ gql`
  mutation RemoveUserProduct($where: UserProductWhereUniqueInput) {
    removeUserProduct(where: $where) {
      id
    }
  }
`
export type RemoveUserProductMutationFn = Apollo.MutationFunction<
  RemoveUserProductMutation,
  RemoveUserProductMutationVariables
>

/**
 * __useRemoveUserProductMutation__
 *
 * To run a mutation, you first call `useRemoveUserProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserProductMutation, { data, loading, error }] = useRemoveUserProductMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemoveUserProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveUserProductMutation,
    RemoveUserProductMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RemoveUserProductMutation,
    RemoveUserProductMutationVariables
  >(RemoveUserProductDocument, options)
}
export type RemoveUserProductMutationHookResult = ReturnType<
  typeof useRemoveUserProductMutation
>
export type RemoveUserProductMutationResult =
  Apollo.MutationResult<RemoveUserProductMutation>
export type RemoveUserProductMutationOptions = Apollo.BaseMutationOptions<
  RemoveUserProductMutation,
  RemoveUserProductMutationVariables
>
export const RemoveCartDocument = /*#__PURE__*/ gql`
  mutation RemoveCart($createUserProductInput: CreateUserProductInput!) {
    createUserProduct(createUserProductInput: $createUserProductInput) {
      id
    }
  }
`
export type RemoveCartMutationFn = Apollo.MutationFunction<
  RemoveCartMutation,
  RemoveCartMutationVariables
>

/**
 * __useRemoveCartMutation__
 *
 * To run a mutation, you first call `useRemoveCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCartMutation, { data, loading, error }] = useRemoveCartMutation({
 *   variables: {
 *      createUserProductInput: // value for 'createUserProductInput'
 *   },
 * });
 */
export function useRemoveCartMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveCartMutation,
    RemoveCartMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RemoveCartMutation, RemoveCartMutationVariables>(
    RemoveCartDocument,
    options,
  )
}
export type RemoveCartMutationHookResult = ReturnType<
  typeof useRemoveCartMutation
>
export type RemoveCartMutationResult = Apollo.MutationResult<RemoveCartMutation>
export type RemoveCartMutationOptions = Apollo.BaseMutationOptions<
  RemoveCartMutation,
  RemoveCartMutationVariables
>
export const LoginDocument = /*#__PURE__*/ gql`
  mutation Login($credentials: LoginInput!) {
    login(credentials: $credentials) {
      idToken
      kind
      localId
      refreshToken
      expiresIn
      email
      displayName
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
