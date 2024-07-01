import axios from 'axios'
import { FirebaseService } from '../../../src/common/firebase/firebase.service'
import { Role } from 'src/common/types'

import { GraphQLClient } from 'graphql-request'
import { admins, buyers, creds } from './users'

export const gqlClient = new GraphQLClient('http://localhost:3000/graphql')

const firebaseService = new FirebaseService()

export const resetUserRoles = async () => {
  for (const user of buyers) {
    await setFirebaseRole({
      firebaseService,
      roles: [],
      uid: user.uid,
    })
  }
  for (const user of admins) {
    await setFirebaseRole({
      firebaseService,
      roles: [],
      uid: user.uid,
    })
  }
}

export const setUserRoles = async () => {
  for (const user of buyers) {
    await setFirebaseRole({
      firebaseService,
      roles: ['seller'],
      uid: user.uid,
    })
  }
  for (const user of admins) {
    await setFirebaseRole({
      firebaseService,
      roles: ['seller', 'admin'],
      uid: user.uid,
    })
  }
}

const usersToken = {}

export const getAuthHeader = async (
  uid: string,
): Promise<{ uid: string; authorization: string }> => {
  const user = creds.find((cred) => cred.uid === uid)

  if (usersToken[uid]) {
    return usersToken[uid]
  }

  const firebaseUser = await axios.post(
    `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.firebaseAPIKey}`,
    user,
  )

  const token = firebaseUser.data.idToken
  const userId = firebaseUser.data.localId

  const obj = { uid: userId, authorization: `Bearer ${token}` }
  usersToken[uid] = obj

  return obj
}

export const setFirebaseRole = async ({
  firebaseService,
  uid,
  roles,
}: {
  firebaseService: FirebaseService
  uid: string
  roles: Role[]
}) => {
  await firebaseService.getAuth().setCustomUserClaims(uid, {
    roles,
  })

  console.log(`Successfully set ${roles}`)
}

export const random = <T>(arr: T[]) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

export const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index
}

export const randomNumber = (min = 10, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const hoursToMs = (hours: number) => hours * 60 * 60 * 1000
