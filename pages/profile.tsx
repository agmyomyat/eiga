import React, { useEffect, useState } from 'react';
import { useGetUserLazyQuery } from '../graphgen/graphql';
import { useAuth } from '../contexts/AuthContext';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, uiConfig } from '../lib/firebase';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../styles/ProfileStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(styles as any);

export default function Profile() {
   const { currentUser, authLoading, logOut} = useAuth();

   const [getUser, { data, loading }] = useGetUserLazyQuery({
      fetchPolicy: 'cache-and-network',
   });

   const classes = useStyles();

   useEffect(() => {
      if (currentUser !== null && Object.keys(currentUser).length) {
         console.log('current', currentUser);
         return getUser({ variables: { uuid: currentUser.email } });
      }
   }, [currentUser, getUser]);

   //* userData from server
   const userData = data?.userData[0];

   const handleSignOut = async () => {
      logOut().then((res)=>{
         console.log(res)
      })
      .catch((err)=>alert(`err logging out${err}`))
   };

   if (authLoading || loading) {
      return <h1>Loading...</h1>;
   }

   return (
      <>
         <h1>Welcome to Eiga</h1>
         {currentUser ? (
            <Container className={classes.root}>
               <Typography
                  className={classes.title}
                  variant="h5"
                  component="h3"
                  color="textSecondary"
               >
                  Your Profile
               </Typography>
               <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  className={classes.card}
               >
                  <Grid item sm={3} xs={12}>
                     <label className={classes.label}>Phone Number</label>
                  </Grid>
                  <Grid item sm={9} xs={12}>
                     <div className={classes.item}>{data ? userData.uuid : 'Loading...'}</div>
                  </Grid>

                  <Grid item sm={3} xs={12}>
                     <label className={classes.label}>Verified</label>
                  </Grid>
                  <Grid item sm={9} xs={12}>
                     <div className={classes.item}>
                        {data ? (userData.verify ? 'Yes' : 'No') : 'Loading...'}
                     </div>
                  </Grid>

                  <Grid item sm={3} xs={12}>
                     <label className={classes.label}>Remaining Time</label>
                  </Grid>
                  <Grid item sm={9} xs={12}>
                     <div className={classes.item}>26 days</div>
                  </Grid>
               </Grid>
               <div className={classes.buttonGroup}>
                  <Button variant="contained" color="secondary" onClick={handleSignOut}>
                     Log Out
                  </Button>
               </div>
            </Container>
         ) : (
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
         )}
      </>
   );
}
