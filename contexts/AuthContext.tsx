import { useState, useEffect, createContext, useContext, Context } from 'react';
import { setAccessToken } from '../helpers/accessToken';
import { auth } from '../lib/firebase';
import {default as firebaseUser}from 'firebase'
interface IauthContext{
      currentUser:firebaseUser.User|null
      logOut:Promise<void>,
      authLoading:boolean
   }
const AuthContext:Context<IauthContext> = createContext(null)

export function useAuth() {
   return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
   const [currentUser, setCurrentUser] = useState(null);
   const [authLoading, setAuthLoading] = useState(true);

   async function logOutPromise() {
      setAccessToken("")
      console.log("logout works")
      const a=  await auth.signOut()

      const b =await fetch('http://localhost:1337/logout', {
            method: 'POST',
            credentials: 'include',
         })
         return Promise.all([a,b])
             }
   function logOut(){
      return logOutPromise().then((res)=>{console.log(res)})
      .catch((err)=>alert(`error logging out try refreshing the page ${err.message}`))
   }
   
   useEffect(() => {
      setAuthLoading(true);
      const unsubscribe = auth.onAuthStateChanged(user => {
         setCurrentUser(user);
         setAuthLoading(false);
      });
      return () => {
         unsubscribe;
      };
   }, []);

   const authContext= {
      currentUser,
      logOut,
      authLoading,
   };
   /*
   ignore this error for now I dont know how to solve it nothing seriousXDD
   */
   return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}
