import {
   useEffect,
   createContext,
   useContext,
   Context,
   useCallback,
} from 'react'
import {
   getAccessToken,
   setAccessToken,
   setRefreshToken,
} from '@helpers/accessToken'
import { QueryLazyOptions } from '@apollo/client'
import { Exact, useGetUserLazyQuery } from '@graphgen'
import { NextRouter, useRouter } from 'next/router'
import { useCheckUser } from './global-states/useCheckUser'
import { useShouldLogOut } from './global-states/useShouldLogOut'
import { auth } from '@lib'
import { useApolloClient } from '@apollo/client'

type User = {
   __typename?: 'returnUserData'
   userName?: string
   premium?: boolean
   expire?: string
   verify?: boolean
   userId?: string
}
interface IauthContext {
   userData: User
   logOut: () => Promise<void>
   premiumUser: boolean
   getUserLoading: boolean
   getUser: (
      // eslint-disable-next-line no-unused-vars
      options?: QueryLazyOptions<
         Exact<{
            token?: string
         }>
      >
   ) => void
}
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const AuthContext: Context<IauthContext> = createContext(null)

export function useAuth() {
   return useContext(AuthContext)
}

const setCheckUser = useCheckUser.getState().setCheckUser
export default function AuthProvider({ children }) {
   const apolloClient = useApolloClient()
   const shouldLogOut = useShouldLogOut((state) => state.logOut)
   const checkUser = useCheckUser((state) => state.checkUser)
   const [
      getUser,
      {
         data: gqlCurrentUser,
         loading: getUserLoading,
         refetch: getUserRefetch,
      },
   ] = useGetUserLazyQuery({
      fetchPolicy: 'network-only',
      ssr: false,
   })
   const premiumUser: boolean = gqlCurrentUser?.getUserData?.premium || false
   const userData = gqlCurrentUser?.getUserData
   const router: NextRouter = useRouter()
   const logOut = useCallback(async () => {
      setAccessToken('')
      setRefreshToken('')
      await auth.signOut()
      await apolloClient.resetStore()
   }, [apolloClient])
   useEffect(() => {
      if (shouldLogOut) {
         void logOut()
         return
      }
      if (checkUser) {
         void getUser()
         return setCheckUser(false)
      }
      const _accessToken = getAccessToken()
      if (!_accessToken) return
      if (!router.asPath) return
      console.log('looping')
      void getUser()
   }, [checkUser, getUser, logOut, router.asPath, shouldLogOut])

   const authContext = {
      userData,
      premiumUser,
      getUserLoading,
      logOut,
      getUser,
   }

   return (
      <AuthContext.Provider value={authContext}>
         {children}
      </AuthContext.Provider>
   )
}
