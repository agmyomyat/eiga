import { useState, useEffect, createContext, useContext } from 'react';
import { auth } from '../lib/firebase';

const AuthContext = createContext();

export function useAuth() {
   return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
   const [currentUser, setCurrentUser] = useState();
   const [loading, setLoading] = useState(true);

   function logOut() {
      return auth.signOut();
   }

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
         setCurrentUser(user);
         setLoading(false);
      });
      return () => unsubscribe;
   });

   const authContext = {
      currentUser,
      logOut,
      loading,
   };

   return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}
