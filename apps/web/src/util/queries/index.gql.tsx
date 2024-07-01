import { gql } from 'graphql-request'

export const CreateUserProduct = gql`
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

export const CreateProduct = gql`
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

export const CreateUser = gql`
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

export const PRODUCT_FRAGMENT = gql`
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

export const Products = gql`
  ${PRODUCT_FRAGMENT}
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
`

export const Product = gql`
  ${PRODUCT_FRAGMENT}
  query Product($where: ProductWhereUniqueInput) {
    product(where: $where) {
      ...ProductFragment
    }
  }
`
export const UserProduct = gql`
  ${PRODUCT_FRAGMENT}
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
`

export const Views = gql`
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
export const CreateSeller = gql`
  mutation CreateSeller($createSellerInput: CreateSellerInput!) {
    createSeller(createSellerInput: $createSellerInput) {
      uid
    }
  }
`

export const Seller = gql`
  query Seller($where: SellerWhereUniqueInput) {
    seller(where: $where) {
      uid
    }
  }
`
export const CreateSupport = gql`
  mutation CreateSupport($createSupportInput: CreateSupportInput!) {
    createSupport(createSupportInput: $createSupportInput) {
      id
    }
  }
`

export const MySupports = gql`
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

export const CreateView = gql`
  mutation CreateView($createViewInput: CreateViewInput!) {
    createView(createViewInput: $createViewInput) {
      id
    }
  }
`

export const MyOrders = gql`
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
`

export const CreateOrder = gql`
  mutation CreateOrder($createOrderInput: CreateOrderInput!) {
    createOrder(createOrderInput: $createOrderInput) {
      id
    }
  }
`

export const RemoveUserProduct = gql`
  mutation RemoveUserProduct($where: UserProductWhereUniqueInput) {
    removeUserProduct(where: $where) {
      id
    }
  }
`

export const RemoveCart = gql`
  mutation RemoveCart($createUserProductInput: CreateUserProductInput!) {
    createUserProduct(createUserProductInput: $createUserProductInput) {
      id
    }
  }
`

export const Login = gql`
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
