import {
  CreateSellerDocument,
  CreateUserDocument,
  CreateUserInput,
} from '../generated/graphql'
import { allProducts } from './allProducts'
import { getAuthHeader, gqlClient, setUserRoles } from './utils'

export const creds = [
  {
    uid: 'Yup4gIZxqRWKvKGvUIHKuZOBn8y2',
    email: 'admin@email.com',
    name: 'The admin',
    password: '123456',
    returnSecureToken: true,
  },

  {
    uid: 'kdzlcSXqefg1ae3uwTQjJbSQId02',
    email: 'seller1@email.com',
    name: 'seller 1',
    password: '123456',
    returnSecureToken: true,
  },
  {
    uid: 'DOUEmNEwtiU9vUKwjVsit8rQ8hY2',
    email: 'seller2@email.com',
    name: 'seller 2',
    password: '123456',
    returnSecureToken: true,
  },
  {
    uid: 'NxsxQcbvNSXvngqMy8gytulZV3t2',
    email: 'buyer1@email.com',
    name: 'buyer 1',
    password: '123456',
    returnSecureToken: true,
  },
  {
    uid: 'H4WUZ1j3VNVKYlSLeZ4j4sCXhIx1',
    email: 'buyer2@email.com',
    name: 'buyer 2',
    password: '123456',
    returnSecureToken: true,
  },
] as const

export const admins = creds.filter((cred) => cred.email.includes('admin'))
export const sellers = creds.filter((cred) => cred.email.includes('seller'))
export const buyers = creds.filter((cred) => cred.email.includes('voter'))

export const getCreateUsers: () => CreateUserInput[] = () => {
  return creds.map(({ email, name, uid }) => ({
    email,
    displayName: name,
    uid,
    about: '',
    address: '',
  }))
}

export const createUserDocuments = async () => {
  await setUserRoles()
  for (const { email, name, uid } of creds) {
    const { authorization } = await getAuthHeader(uid)

    const newUser = await gqlClient.request(
      CreateUserDocument,
      {
        createUserInput: {
          displayName: name,
          uid,
          about: '',
          address: '',
        },
      },
      { authorization },
    )
  }
}

export const createSellerDocuments = async () => {
  await setUserRoles()
  for (const { uid } of sellers) {
    const { authorization } = await getAuthHeader(uid)

    const newSeller = await gqlClient.request(
      CreateSellerDocument,
      {
        createSellerInput: {
          uid,
        },
      },
      { authorization },
    )
  }
}
