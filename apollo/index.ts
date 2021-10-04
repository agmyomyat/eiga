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
import { getAccessToken, setAccessToken } from '@helpers/accessToken'
import { setContext } from '@apollo/client/link/context'
import { offsetLimitPagination } from '@apollo/client/utilities'
const shouldLogOut = useShouldLogOut.getState().setLogOut
let apolloClient: ApolloClient<NormalizedCacheObject>
// async function fireAuth() {
//    const { auth } = await import('../lib/firebase');
//    return auth;
// }
const httpLink = createHttpLink({
   uri: 'http://localhost:1337/graphql',
   credentials: 'include',
})
const errorLink = onError(({ graphQLErrors, networkError }) => {
   if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
         console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
         )
      )
   if (networkError) console.log(`[Network error]: ${networkError}`)
})

async function handleFetch() {
   let _token: string
   await fetch('http://localhost:1337/refreshtoken', {
      method: 'POST',
      credentials: 'include',
   })
      .then((res) => res.json())
      .then((data) => (_token = data.access))
   if (!_token) {
      throw 'access token not found'
   } else {
      return _token
   }
}
const asyncRefreshTokenLink = setContext(async () => {
   const accessToken = { token: '' }
   let shouldFetchOrNot: boolean
   const token = getAccessToken()

   /**
    * TODO: even tho Access Token is not available Should check cookies
    * To write that Logic
    */
   if (!token) {
      // let _auth = await fireAuth();
      return { accessToken }
   }
   try {
      const { exp }: any = jwt_decode(<string | null>token)
      // console.log('expire', exp)
      if (Date.now() >= exp * 1000) {
         shouldFetchOrNot = true
      } else {
         shouldFetchOrNot = false
      }
   } catch {
      shouldFetchOrNot = true
   }

   if (shouldFetchOrNot) {
      try {
         const res = await handleFetch()
         // setAccessToken(res||''); // see line authLink comment
         // console.log('fetched token success', res)
         accessToken.token = res || ''
      } catch (e) {
         // gqlInvalidToken({ shouldLogOut: true })
         shouldLogOut(true)
         setAccessToken('')
         console.log('apollo catch', e)
      }
      // console.log('final line')
      return { accessToken }
   }
})

/*
IgnoreTokenRefresh ignore tokenRefreshLink middleware
if signUp or getUser operations so If any of that two 
graphql name change,
they should be changed here too.
*/
// const IgnoreTokenRefresh = ApolloLink.split(
//    ({ operationName }) => operationName !== 'getUser',
//    asyncRefreshTokenLink
// )

const authLink = new ApolloLink((operation, forward) => {
   const oldToken = getAccessToken()
   /**
    * this line might not need here, context link await already set token but will not remove cause
    * context link only run on premiumUserCheck query UPDATE: removed context link set Token function
    */
   const contextToken = operation.getContext().accessToken?.token || '' //
   const newAccessToken = contextToken ? contextToken : oldToken
   // console.log('access', newAccessToken)
   setAccessToken(newAccessToken)
   console.log('operation', operation)
   operation.setContext(({ headers }) => ({
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

function createApolloClient() {
   return new ApolloClient({
      // ssrMode: typeof window === 'undefined',
      link: from([asyncRefreshTokenLink, authLink, errorLink, httpLink]),
      cache: new InMemoryCache({
         typePolicies: {
            Query: {
               fields: {
                  watchHistories: {
                     read(existing, { args: { start, limit } }) {
                        // A read function should always return undefined if existing is
                        // undefined. Returning undefined signals that the field is
                        // missing from the cache, which instructs Apollo Client to
                        // fetch its value from your GraphQL server.
                        return existing && existing.slice(start, start + limit)
                     },

                     // The keyArgs list and merge function are the same as above.
                     keyArgs: ['type', 'userId'],
                     merge(existing, incoming, { args: { start = 0 } }) {
                        const merged = existing ? existing.slice(0) : []
                        for (let i = 0; i < incoming.length; ++i) {
                           merged[start + i] = incoming[i]
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

export function initializeApollo(initialState = null) {
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
