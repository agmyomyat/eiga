import { useState, useEffect, createContext, useContext, Context, useRef, Dispatch, SetStateAction } from 'react';
import { setAccessToken } from '@helpers/accessToken';
import { auth } from '@lib';
import { default as firebaseUser } from 'firebase';
import { useReactiveVar } from '@apollo/client';
import { gqlInvalidToken, ReactiveValue } from '@apollo/apolloReactiveVar';
import { onAuthStateInit, unsubscribeAuth } from './onStateAuth';
import { usePremiumUserLazyQuery } from '@graphgen';
import { NextRouter, useRouter } from 'next/router';
import useCheckPremium from './share-hooks/useCheckPremium';

interface IauthContext {
   currentUser: firebaseUser.User | null;
   logOut: () => Promise<[void, Response]>;
   authLoading: boolean;
   reactiveToken: ReactiveValue;
   premiumUser: boolean;
   checkPremiumLoading: boolean;
}
const AuthContext: Context<IauthContext> = createContext(null);

export function useAuth() {
   return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
   const [currentUser, setCurrentUser] = useState(null);
   const {checkPremiumLoading,gqlCurrentUser} = useCheckPremium(currentUser)
   const premiumUser:boolean = gqlCurrentUser?.premiumCheck?.premiumUser || false 
   const [authLoading, setAuthLoading] = useState(true);
   const reactiveToken = useReactiveVar(gqlInvalidToken);


   const logOut = async () => {
      setAccessToken('');
      const a = await auth.signOut();

      const b = await fetch('http://localhost:1337/logout', {
         method: 'POST',
         credentials: 'include',
      });
      return Promise.all([a, b]);
   };

   useEffect(() => {
      let _mounted = true;
      if (reactiveToken.shouldLogOut && _mounted) {
         logOut();
      }
      setAuthLoading(true);

      onAuthStateInit(auth, setCurrentUser, setAuthLoading);
      console.log('auth checking');

      return () => {
         console.warn('unmounting in context');
         _mounted = false;
         unsubscribeAuth;
      };
   }, [reactiveToken.shouldLogOut]);

   const authContext = {
      premiumUser, 
      checkPremiumLoading,
      currentUser,
      logOut,
      authLoading,
      reactiveToken,
   };

   return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}
