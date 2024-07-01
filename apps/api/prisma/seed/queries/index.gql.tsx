import { gql } from 'graphql-request'

export const Products = gql`
  query Products {
    products {
      id
    }
  }
`
export const Product = gql`
  query Product($where: ProductWhereUniqueInput) {
    product(where: $where) {
      id
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

export const CreateProduct = gql`
  mutation CreateProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      id
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
