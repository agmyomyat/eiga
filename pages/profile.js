import {} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, uiConfig } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../styles/ProfileStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(styles);

export default function Profile() {
   const { currentUser, loading, logOut } = useAuth();
   const classes = useStyles();

   const handleSignOut = async () => {
      await logOut();
   };

   if (loading) {
      return <h1>Loading...</h1>;
   }

   if (!currentUser) {
      return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;
   }

   return (
      <Container className={classes.root}>
         <Typography className={classes.title} variant="h5" component="h3" color="textSecondary">
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
               <div className={classes.item}>{currentUser.phoneNumber}</div>
            </Grid>

            <Grid item sm={3} xs={12}>
               <label className={classes.label}>Verified</label>
            </Grid>
            <Grid item sm={9} xs={12}>
               <div className={classes.item}>Yes</div>
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
   );
}
