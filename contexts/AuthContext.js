import { useState, useEffect, createContext, useContext } from 'react';
import { auth } from '../lib/firebase';

const AuthContext = createContext();

export function useAuth() {
   return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
   const [currentUser, setCurrentUser] = useState(false);
   const [authLoading, setAuthLoading] = useState(true);

   function logOut() {
      return (
         auth.signOut(),
         fetch('http://localhost:1337/logout', {
            method: 'POST',
            credentials: 'include',
         })
            .then(response => {
               return response.json();
            })
            .then(data => console.log(data))
      );
   }
   useEffect(() => {
      fetch('http://localhost:1337/refreshtoken', {
         method: 'POST',
         credentials: 'include',
      })
         .then(response => {
            return response.json();
         })
         .then(data => {
            if (!data.ok) {
               console.log('refresh token', data);
               return logOut();
            }
           localStorage.setItem('EigaAccess',data.access) 
         });
   }, []);

   useEffect(() => {
      setAuthLoading(true);
      const unsubscribe = auth.onAuthStateChanged(user => {
         setCurrentUser(user);
         setAuthLoading(false);
         console.log('auth check in useeffect');
      });
      return () => {
         console.log('unmount in auth checking');
         unsubscribe;
      };
   }, []);

   const authContext = {
      currentUser,
      logOut,
      authLoading,
   };

   return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}
