import { useShouldLogOut } from './../contexts/global-states/useShouldLogOut'
import { useMemo } from 'react'
import {
   ApolloClient,
   createHttpLink,
   InMemoryCache,
   from,
   ApolloLink,
   NormalizedCacheObject,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import jwt_decode from 'jwt-decode'
import {
   getAccessToken,
   getRefreshToken,
   setAccessToken,
   setRefreshToken,
} from '@helpers/accessToken'
import { setContext } from '@apollo/client/link/context'
import { useErrorMessage } from '@contexts/global-states/useErrorMessage'
const shouldLogOut = useShouldLogOut.getState().setLogOut
let apolloClient: ApolloClient<NormalizedCacheObject>
// async function fireAuth() {
//    const { auth } = await import('../lib/firebase');
//    return auth;
// }
const setErrorMessage = useErrorMessage.getState().setErrorMessage
const httpLink = createHttpLink({
   uri: `${process.env.API_URL}/graphql`,
   // credentials: 'include',
})
const errorLink = onError(({ graphQLErrors, networkError }) => {
   if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
         console.log(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
         )
      )
   }
   if (networkError) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`[Network error]: ${networkError}`)
      setErrorMessage(
         // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
         `[Network error]: ${networkError} Try Refreshing the Page`
      )
   }
})

export async function handleFetch() {
   let _token: string
   let _status: string
   console.log(_token)
   await fetch(`${process.env.API_URL}/refreshtoken`, {
      method: 'POST',
      // prettier-ignore
      headers: { 'rt': getRefreshToken() },
   })
      .then((res) => res.json())
      .then(
         (data: { access: string; status: string; refreshToken: string }) => {
            _token = data.access
            _status = data.status
            setRefreshToken(data.refreshToken || '')
         }
      )
      .catch((e) => {
         if (e instanceof Error) {
            setErrorMessage(e.message)
         } else {
            setErrorMessage(e as string)
         }
      })
   if (!_token && _status === 'tokenVersion not match') {
      throw Error(_status)
   }
   if (!_token) {
      throw Error('you need to relogin')
   }
   return { accessToken: _token }
}
const asyncRefreshTokenLink = setContext(async () => {
   const _tokens = { accessToken: '' }
   let shouldFetchOrNot: boolean
   const token = getAccessToken()
   console.log('token', token)

   /**
    * TODO: even tho Access Token is not available Should check cookies
    * To write that Logic
    */
   if (!token) {
      // let _auth = await fireAuth();
      return _tokens
   }
   try {
      const { exp }: { exp: number } = jwt_decode(token)
      if (Date.now() >= exp * 1000) {
         shouldFetchOrNot = true
      } else {
         shouldFetchOrNot = false
      }
   } catch (e) {
      shouldFetchOrNot = true
   }

   if (shouldFetchOrNot) {
      try {
         const res = await handleFetch()
         // setErrorMessage(res)
         // setAccessToken(res||''); // see line authLink comment
         // console.log('fetched token success', res)
         _tokens.accessToken = res.accessToken || ''
      } catch (e) {
         // gqlInvalidToken({ shouldLogOut: true })
         setAccessToken('')
         setRefreshToken('')
         // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
         if (e.message === 'tokenVersion not match') {
            return shouldLogOut(true) //this is for another user detection
         }
         setErrorMessage('You need to login again')

         console.log('apollo catch', e)
      }
      // console.log('final line')
      return { ..._tokens }
   }
})

const authLink = new ApolloLink((operation, forward) => {
   const oldToken: string = getAccessToken()
   /**
    * this line might not need here, context link await already set token but will not remove cause
    * context link only run on premiumUserCheck query UPDATE: removed context link set Token function
    */
   const contextToken: string =
      (operation.getContext().accessToken as string) || '' //
   const newAccessToken: string = contextToken ? contextToken : oldToken
   // console.log('access', newAccessToken)
   setAccessToken(newAccessToken)
   console.log('operation', operation)
   operation.setContext(({ headers }) => ({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      headers: {
         ...headers,
         auth: newAccessToken ? `Bearer ${newAccessToken}` : '', // however you get your token
      },
   }))
   return forward(operation).map((data) => {
      // Called after server responds
      console.log('in apollo link', data)
      return data
   })
})
type TApolloRead = {
   args: {
      start?: number
      limit?: number
      where?: { [k: string]: unknown }
   }
}
function createApolloClient() {
   return new ApolloClient({
      // ssrMode: typeof window === 'undefined',
      link: from([asyncRefreshTokenLink, authLink, errorLink, httpLink]),
      cache: new InMemoryCache({
         typePolicies: {
            Query: {
               fields: {
                  watchHistories: {
                     keyArgs: false,
                     read(
                        existing: Array<unknown>,
                        {
                           args: {
                              start,
                              limit,
                              where: { movieName },
                           },
                        }: TApolloRead
                     ) {
                        if (movieName) return existing && existing
                        // console.log('existing is ', existing)
                        // A read function should always return undefined if existing is
                        // undefined. Returning undefined signals that the field is
                        // missing from the cache, which instructs Apollo Client to
                        // fetch its value from your GraphQL server.
                        if (existing && existing.length) {
                           return existing.slice(start, start + limit)
                        }
                        return undefined
                     },
                     merge(
                        existing: Array<unknown>,
                        incoming: Array<unknown>,
                        {
                           args: {
                              start = 0,
                              where: { movieName },
                           },
                        }
                     ) {
                        if (movieName) return incoming
                        const merged = existing ? existing.slice(0) : []
                        for (let i = 0; i < incoming.length; ++i) {
                           const _start_plus_i: number = (start as number) + i
                           merged[_start_plus_i] = incoming[i]
                        }
                        // console.log('meges', merged)

                        return merged
                     },
                  },
                  favouriteMovies: {
                     keyArgs: false,
                     read(
                        existing: Array<unknown>,
                        {
                           args: {
                              start,
                              limit,
                              where: { movie, user_info },
                           },
                        }: TApolloRead
                     ) {
                        if (movie && user_info) return existing && existing
                        console.log('existing is ', existing)
                        // A read function should always return undefined if existing is
                        // undefined. Returning undefined signals that the field is
                        // missing from the cache, which instructs Apollo Client to
                        // fetch its value from your GraphQL server.
                        if (existing && existing.length) {
                           return existing.slice(start, start + limit)
                        }
                        return undefined
                     },
                     merge(
                        existing: Array<unknown>,
                        incoming: Array<unknown>,
                        {
                           args: {
                              start = 0,
                              where: { movie, user_info },
                           },
                        }
                     ) {
                        if (movie && user_info) {
                           return incoming
                        }
                        const merged = existing ? existing.slice(0) : []
                        for (let i = 0; i < incoming.length; ++i) {
                           const _start_plus_i: number = (start as number) + i
                           merged[_start_plus_i] = incoming[i]
                        }
                        console.log('meges', merged)

                        return merged
                     },
                  },
               },
            },
         },
      }),
   })
}

export function initializeApollo<T>(initialState: T = null) {
   const _apolloClient: ApolloClient<NormalizedCacheObject> =
      apolloClient ?? createApolloClient()

   // If your page has Next.js data fetching methods that use Apollo Client, the initial state
   // gets hydrated here
   if (initialState) {
      // Get existing cache, loaded during client side data fetching
      const existingCache = _apolloClient.extract()
      // Restore the cache using the data passed from getStaticProps/getServerSideProps
      // combined with the existing cached data
      _apolloClient.cache.restore({ ...existingCache, ...initialState })
   }
   // For SSG and SSR always create a new Apollo Client
   if (typeof window === 'undefined') return _apolloClient
   // Create the Apollo Client once in the client
   if (!apolloClient) apolloClient = _apolloClient
   return _apolloClient
}

export function useApollo<T>(initialState: T) {
   const store = useMemo(() => initializeApollo(initialState), [initialState])
   return store
}
