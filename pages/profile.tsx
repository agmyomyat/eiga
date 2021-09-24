import React, { useEffect } from 'react';
import { useGetUserLazyQuery } from '@graphgen';
import { useAuth } from '@contexts/AuthContext';
import { createUser } from '@apollo/mutationfn/createUser';
import { Container, Button, Grid, Box, Typography, Paper } from '@mui/material';
import { getRedirectResult, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '@lib';
import { useCheckUser } from '@contexts/global-states/useCheckUser';
import { useAuthLoading } from '@contexts/global-states/useAuthLoading';
import DetectOtherLogin from '@components/modals/detectOtherLogin';

const setAuthLoading = useAuthLoading.getState().setLoading;

function redirect() {
   const provider = new GoogleAuthProvider();
   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
   signInWithRedirect(auth, provider);
}
function redirectAuth() {
   setAuthLoading(true);
   getRedirectResult(auth)
      .then(result => {
         setAuthLoading(false);
         // This gives you a Google Access Token. You can use it to access Google APIs.
         const credential = GoogleAuthProvider.credentialFromResult(result);
         const token = credential.accessToken;
         console.log('asdlfdaskfkdsf', result);
         createUser(result).then(() => useCheckUser.getState().setCheckUser(true));

         // The signed-in user info.
         const user = result.user;
      })
      .catch(error => {
         setAuthLoading(false);
         console.log(error);
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

export default function Profile() {
   const authLoading = useAuthLoading(state => state.loading);
   const { getUserLoading, userData, logOut } = useAuth();
   useEffect(() => {
      redirectAuth();
   }, []);

   // useEffect(() => {
   //    if (currentUser !== null && Object.keys(currentUser).length) {
   //       console.log('current', currentUser);
   //       return getUser({ variables: { uuid: currentUser.email } });
   //    }
   // }, [currentUser, getUser]);

   // //* userData from server
   // const userData = data?.userData[0];

   const handleSignOut = async () => {
      logOut();
   };

   if (getUserLoading || authLoading) {
      return <h1>Loading...</h1>;
   }

   return (
      <Box>
         <h1>{userData?.premium ? 'You Are Premium User' : 'You are free User'}</h1>
         {userData ? (
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
                        {userData.userName}
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
                        {userData.verify ? 'Yes' : 'No'}
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
            <button onClick={() => redirect()}>redirect login</button>
         )}
         <DetectOtherLogin />
      </Box>
   );
}
