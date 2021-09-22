import React, { useEffect } from 'react';
import { useGetUserLazyQuery } from '@graphgen';
import { useAuth } from '@contexts/AuthContext';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, uiConfig } from '@lib';
import { Container, Button, Grid, Box, Typography, Paper } from '@mui/material';

export default function Profile() {
   const { currentUser, authLoading, logOut } = useAuth();

   const [getUser, { data, loading }] = useGetUserLazyQuery({
      fetchPolicy: 'cache-and-network',
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
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
         )}
      </Box>
   );
}
