import { usePremiumUserLazyQuery } from "@graphgen";
import { NextRouter, useRouter } from 'next/router';
import { useRef, useEffect } from "react";

export default function useCheckPremium(currentUser) {
	const router:NextRouter = useRouter()
   const unmountingPremium = useRef(false);
   const prevPath = useRef(router.query.id)
   const [checkPremium, { data:gqlCurrentUser, loading: checkPremiumLoading }] = usePremiumUserLazyQuery({
      fetchPolicy: 'network-only',
      ssr: false,
   });
    useEffect(() => {
//        console.log("currentuser",currentUser)
      if(router.query.id&&router.query.id!==prevPath.current) unmountingPremium.current=false 
      
      if (currentUser === null || !Object.keys(currentUser).length) { // to check again when log out
         unmountingPremium.current=false
      }
      
      if (!unmountingPremium.current) {
         unmountingPremium.current = true
         return checkPremium({
            variables: { token: '' }, // token will be auto filled in Apollo middleware
         });

      }
      
   }, [checkPremium, currentUser, router.query.id]);
	return {
	   gqlCurrentUser,checkPremiumLoading
   }
}