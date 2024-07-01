/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
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

export type ProductsQueryVariables = Exact<{ [key: string]: never }>

export type ProductsQuery = {
  __typename?: 'Query'
  products: Array<{ __typename?: 'Product'; id: number }>
}

export type ProductQueryVariables = Exact<{
  where?: InputMaybe<ProductWhereUniqueInput>
}>

export type ProductQuery = {
  __typename?: 'Query'
  product: { __typename?: 'Product'; id: number }
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

export type CreateProductMutationVariables = Exact<{
  createProductInput: CreateProductInput
}>

export type CreateProductMutation = {
  __typename?: 'Mutation'
  createProduct: { __typename?: 'Product'; id: number }
}

export type CreateSellerMutationVariables = Exact<{
  createSellerInput: CreateSellerInput
}>

export type CreateSellerMutation = {
  __typename?: 'Mutation'
  createSeller: { __typename?: 'Seller'; uid: string }
}

export const ProductsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Products' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'products' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>
export const ProductDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Product' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ProductWhereUniqueInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductQuery, ProductQueryVariables>
export const CreateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createUserInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateUserInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createUserInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createUserInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'about' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>
export const CreateProductDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateProduct' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createProductInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateProductInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createProduct' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createProductInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createProductInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateProductMutation,
  CreateProductMutationVariables
>
export const CreateSellerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateSeller' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createSellerInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateSellerInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createSeller' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createSellerInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createSellerInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateSellerMutation,
  CreateSellerMutationVariables
>
