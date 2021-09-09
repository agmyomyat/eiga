import { ReactivecurrentUser } from 'apollo/apolloReactiveVar';
import { Dispatch } from 'react-transition-group/node_modules/@types/react';
import { default as firebaseUser } from 'firebase';
import { ReactiveVar } from '@apollo/client';
export let unsubscribeAuth: firebaseUser.Unsubscribe;

export const onAuthStateInit = (
   auth,
   ReactiveCurrentUser: ReactiveVar<ReactivecurrentUser>,
   setCurrentUser?: Dispatch<any>,
   setAuthLoading?: Dispatch<any>
) => {
   return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged((user: firebaseUser.User) => {
         if (setCurrentUser && setAuthLoading) {
            setCurrentUser(user);
            setAuthLoading(false);
         }
         ReactiveCurrentUser({ user: user ? true : false });
         unsubscribeAuth = unsubscribe;
         if (user) {
            resolve(user);
         } else {
            resolve(false);
         }
      }, reject);
   });
};
