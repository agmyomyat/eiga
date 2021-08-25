import { useMemo } from 'react';
import { ApolloClient, createHttpLink, InMemoryCache, from, ApolloLink } from '@apollo/client';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import { onError } from '@apollo/client/link/error';
import jwt_decode from 'jwt-decode';
import { getAccessToken, setAccessToken } from '../helpers/accessToken';

let apolloClient;
async function logOut(){
   const {auth} = (await import('../lib/firebase'))
   return auth 
}
const httpLink = createHttpLink({
   uri: 'http://localhost:1337/graphql',
   credentials: 'include',
});
const errorLink = onError(({ graphQLErrors, networkError }) => {
   if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
         console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      );
   if (networkError) console.log(`[Network error]: ${networkError}`);
});

const tokenRefreshLink= new TokenRefreshLink({
   accessTokenField: 'access',
   isTokenValidOrUndefined: ()=> {
      const token = getAccessToken();

      if (!token) {
         logOut().then((auth)=>auth.signOut())
         return true;
      }
      try {
         const { exp }:any = jwt_decode(<string|null>token );
         console.log("expire",exp)

         if (Date.now() >= exp * 1000) {
            return false;
         } else {
            return true;
         }
      } catch {
         return false;
      }
   },
   fetchAccessToken: () => {
      console.log('fetchToken');
      return fetch('http://localhost:1337/refreshtoken', {
         method: 'POST',
         credentials: 'include',
      });
   },
   handleFetch: accessToken => {
      console.log('accesstoken', accessToken);
      setAccessToken(accessToken);
   },
   handleError: err => {
      logOut().then((auth)=>auth.signOut())
      console.warn('Your refresh token is invalid. Try to relogin');
      console.error(err);
   },
});
/*
IgnoreTokenRefresh ignore tokenRefreshLink middleware
if signUp or getUser operations so If any of that two 
graphql name change,
they should be changed here too.
*/
const IgnoreTokenRefresh = ApolloLink.split(
   ({operationName}) => operationName !== 'signUp' 
   && operationName !== 'getUser',
   tokenRefreshLink as any,
);

const authLink = new ApolloLink((operation, forward) => {
   const token = getAccessToken();
   console.log('operation', operation);
   operation.setContext(({ headers }) => ({
      headers: {
         ...headers,
         auth: token ? `Bearer ${token}` : '', // however you get your token
      },
   }));
   return forward(operation)
});

function createApolloClient() {
   return new ApolloClient({
      // ssrMode: typeof window === 'undefined',
      link: from([IgnoreTokenRefresh,authLink,errorLink,httpLink]),
      cache: new InMemoryCache(),
   });
}

export function initializeApollo(initialState = null) {
   const _apolloClient = apolloClient ?? createApolloClient();

   // If your page has Next.js data fetching methods that use Apollo Client, the initial state
   // gets hydrated here
   if (initialState) {
      // Get existing cache, loaded during client side data fetching
      const existingCache = _apolloClient.extract();
      // Restore the cache using the data passed from getStaticProps/getServerSideProps
      // combined with the existing cached data
      _apolloClient.cache.restore({ ...existingCache, ...initialState });
   }
   // For SSG and SSR always create a new Apollo Client
   if (typeof window === 'undefined') return _apolloClient;
   // Create the Apollo Client once in the client
   if (!apolloClient) apolloClient = _apolloClient;
   return _apolloClient;
}

export function useApollo<T>(initialState:T) {
   const store = useMemo(() => initializeApollo(initialState), [initialState]);
   return store;
}