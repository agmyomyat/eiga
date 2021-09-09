import { useState, useEffect, createContext, useContext, Context } from 'react';
import { setAccessToken } from '@helpers/accessToken';
import { auth } from '@lib';
import { default as firebaseUser } from 'firebase';
import {useReactiveVar} from '@apollo/client'
import {gqlInvalidToken, ReactiveCurrentUser,ReactiveValue} from '../apollo/apolloReactiveVar'
interface IauthContext {
   currentUser: firebaseUser.User | null;
   logOut: () => Promise<[void, Response]>;
   authLoading: boolean;
   reactiveToken: ReactiveValue;
}
const AuthContext: Context<IauthContext> = createContext(null);

export function useAuth() {
   return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
   const [currentUser, setCurrentUser] = useState(null);
   const [authLoading, setAuthLoading] = useState(true);
   const reactiveToken= useReactiveVar(gqlInvalidToken)
   

   const logOut = async () => {
      setAccessToken('');
      console.log('logout works');
      const a = await auth.signOut();

      const b = await fetch('http://localhost:1337/logout', {
         method: 'POST',
         credentials: 'include',
      });
      return Promise.all([a, b]);
   };

   useEffect(() => {
      setAuthLoading(true);
      const unsubscribe = auth.onAuthStateChanged(user => {
         setCurrentUser(user);
         setAuthLoading(false);
         ReactiveCurrentUser({user:user?true:false})
      });
      console.log("auth checking")
      return () => {
         unsubscribe;
      };
   }, []);

   const authContext = {
      currentUser,
      logOut,
      authLoading,
      reactiveToken 
   };
   
   return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}
