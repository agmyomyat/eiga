import { useState, useEffect, createContext, useContext, Context, useRef, Dispatch, SetStateAction, useCallback } from 'react';
import { setAccessToken } from '@helpers/accessToken';
import { QueryLazyOptions, useReactiveVar } from '@apollo/client';
import { gqlInvalidToken, ReactiveValue } from '@apollo/apolloReactiveVar';
import { Exact, useGetUserLazyQuery } from '@graphgen';
import { NextRouter, useRouter } from 'next/router';
import { useCheckUser } from './global-states/useCheckUser';
import shallow from 'zustand/shallow'
const setUserCheck = useCheckUser.getState().setCheckUser

type User= {
   __typename?: 'returnUserData';
   userName?: string;
   premium?: boolean;
   expire?: string;
   verify?: boolean;
}
interface IauthContext {
   userData: User;
   logOut: () => void; 
   reactiveToken: ReactiveValue;
   premiumUser: boolean;
   getUserLoading: boolean;
   getUser:(options?: QueryLazyOptions<Exact<{
      token?: string;
  }>>) => void
}
const AuthContext: Context<IauthContext> = createContext(null);

export function useAuth() {
   return useContext(AuthContext);
}

const setCheckUser= useCheckUser.getState().setCheckUser
export default function AuthProvider({ children }) {
   const checkUser = useCheckUser(state =>state.checkUser) 
   const [getUser, { data:gqlCurrentUser, loading: getUserLoading,refetch:getUserRefetch}] = useGetUserLazyQuery({
      fetchPolicy: 'network-only',
      ssr: false,
   });
   const router:NextRouter = useRouter()
   const premiumUser:boolean = gqlCurrentUser?.getUserData?.premium||false
   const userData = gqlCurrentUser?.getUserData;
   const reactiveToken = useReactiveVar(gqlInvalidToken);
   const prevPath = useRef(router.query.id)
    useEffect(() => {
      if((router.query.id&&router.query.id!==prevPath.current)||checkUser||!gqlCurrentUser)
      getUser({
         variables: { token: '' }, // token will be auto filled in Apollo middleware
      });
      setCheckUser(false)

      
   }, [checkUser, getUser, gqlCurrentUser, router.query.id]);

   const logOut = useCallback(async () => {
      setAccessToken('');
      await fetch('http://localhost:1337/logout', {
         method: 'POST',
         credentials: 'include',
      });
      setUserCheck(true)
   },[])

   useEffect(() => {
      if (reactiveToken.shouldLogOut) {
         logOut();
      }

      console.log('auth checking');

   }, [logOut, reactiveToken.shouldLogOut]);

   const authContext = {
      userData,
      premiumUser, 
      getUserLoading,
      logOut,
      reactiveToken,
      getUser
   };

   return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}
