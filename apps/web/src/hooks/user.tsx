import { auth } from '@ikea/config/firebase'
import { useAppDispatch } from '@ikea/store'
import { resetUser, setUser } from '@ikea/store/user'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

export const useUserListener = () => {
  const dispatch = useAppDispatch()

  useRefreshToken()

  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          dispatch(resetUser())
          return
        }

        const tokenResult = await auth.currentUser?.getIdTokenResult()
        const roles = tokenResult?.claims.roles || []
        const { displayName, email, uid } = user

        dispatch(
          setUser({
            uid,
            email: email || '',
            displayName: displayName || '',
            roles,
            token: tokenResult?.token,
          }),
        )
      }),
    [dispatch],
  )
}

export const useRefreshToken = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const refreshToken = setInterval(async () => {
      if (auth.currentUser) {
        try {
          const token = await auth.currentUser.getIdToken(true)
          dispatch(
            setUser({
              token,
            }),
          )
        } catch (error) {
          console.log(error)
        }
      }
    }, 59 * 60 * 1000)

    return () => clearInterval(refreshToken)
  }, [dispatch])
}
