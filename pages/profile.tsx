import React, { useEffect } from 'react';
import { useGetUserLazyQuery } from '@graphgen';
import { useAuth } from '@contexts/AuthContext';
import { createUser } from '@apollo/mutationfn/createUser';
import { Container, Button, Grid, Box, Typography, Paper } from '@mui/material';
import { getRedirectResult, getAuth, signInWithPopup,GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

function google() {
   const provider = new GoogleAuthProvider();
   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
   const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("user",user)
    console.log("token",token)
    console.log("result",result)

    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

   
}
const auth = getAuth();
function redirect() {
   const provider = new GoogleAuthProvider();
   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
   signInWithRedirect(auth, provider);
    

}
   getRedirectResult(auth)
   .then((result) => {
     // This gives you a Google Access Token. You can use it to access Google APIs.
     const credential = GoogleAuthProvider.credentialFromResult(result);
     const token = credential.accessToken;
     console.log("asdlfdaskfkdsf",result)
     createUser(result)
 
     // The signed-in user info.
     const user = result.user;
   }).catch((error) => {
     // Handle Errors here.
     const errorCode = error.code;
     const errorMessage = error.message;
     // The email of the user's account used.
     const email = error.email;
     // The AuthCredential type that was used.
     const credential = GoogleAuthProvider.credentialFromError(error);
     // ...
   });

export default function Profile() {
   const { currentUser, authLoading, logOut } = useAuth();

   const [getUser, { data, loading }] = useGetUserLazyQuery({
      fetchPolicy: 'network-only',
   });

   useEffect(() => {
      if (currentUser !== null && Object.keys(currentUser).length) {
         console.log('current', currentUser);
         return getUser({ variables: { uuid: currentUser.email } });
      }
   }, [currentUser, getUser]);

   //* userData from server
   const userData = data?.userData[0];

   const handleSignOut = async () => {
      logOut()
         .then(res => {
            console.log(res);
         })
         .catch(err => alert(`err logging out${err}`));
   };

   if (authLoading || loading) {
      return <h1>Loading...</h1>;
   }

   return (
      <Box>
         <h1>Welcome to Eiga</h1>
         {currentUser ? (
            <Container sx={{ mt: 5, mb: '100px', maxWidth: '700px' }}>
               <Typography align="center" variant="h5" component="h3" color="textSecondary">
                  Your Profile
               </Typography>
               <Grid container spacing={2} justifyContent="center" alignItems="center" mt={5}>
                  <Grid item sm={3} xs={12}>
                     <Typography component="label" color="textSecondary">
                        Email
                     </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12}>
                     <Paper
                        sx={{
                           p: 2,
                           backgroundImage: 'none',
                        }}
                     >
                        {data ? userData.uuid : 'Loading...'}
                     </Paper>
                  </Grid>

                  <Grid item sm={3} xs={12}>
                     <Typography component="label" color="textSecondary">
                        Verified
                     </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12}>
                     <Paper
                        sx={{
                           p: 2,
                           backgroundImage: 'none',
                        }}
                     >
                        {data ? (userData.verify ? 'Yes' : 'No') : 'Loading...'}
                     </Paper>
                  </Grid>

                  <Grid item sm={3} xs={12}>
                     <Typography component="label" color="textSecondary">
                        Remaining Time
                     </Typography>
                  </Grid>
                  <Grid item sm={9} xs={12}>
                     <Paper
                        sx={{
                           p: 2,
                           backgroundImage: 'none',
                        }}
                     >
                        26 days
                     </Paper>
                  </Grid>
               </Grid>
               <Box display="flex" justifyContent="flex-end" mt={3}>
                  <Button variant="contained" color="primary" onClick={handleSignOut}>
                     Log Out
                  </Button>
               </Box>
            </Container>
         ) : (
            // <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            <button onClick={()=>redirect()}>redirect login</button>
         )}
      </Box>
   );
}
