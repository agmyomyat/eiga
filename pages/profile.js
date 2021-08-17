import React,{useEffect,useState} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, uiConfig } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../styles/ProfileStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useApollo} from '../apollo';
import {gql} from '@apollo/client';
const useStyles = makeStyles(styles);

const getUser = gql`
query getUser($uuid: String!) {
  userData(where: { uuid: $uuid }) {
    uuid
    verify
    expire
  }
}
`;
let ui 
export default function Profile() {
   const client = useApollo()
   const [vis, setVis] = useState(true)
   const [data, setData] = useState(null)
   const { currentUser, loading,logOut, setLoading,setCurrentUser} = useAuth();
   useEffect(()=>{
      async function user(){ 
      if(currentUser){
      const {data,loading} = await client.query({
         query:getUser,
         variables:{uuid:currentUser.email}
      })
      if(loading){
         return setLoading(true)
      }
      setData(data)
            
         }
      }
      user()

   },[currentUser,client,setLoading])
   const userData = data&&data.userData[0]
   
   const classes = useStyles();
   useEffect(()=>{
      require('firebaseui/dist/firebaseui.css');
		const firebaseui = require('firebaseui');
      // Get or Create a firebaseUI instance.
      ui = firebaseui.auth.AuthUI.getInstance()
           || new firebaseui.auth.AuthUI(auth);
      if (uiConfig.signInFlow === 'popup') {
        ui.reset();
      }
      if (!currentUser) {
          	ui.reset();
        		}
              
		   ui.start('#firebaseui-auth-container',uiConfig)
        return()=>{
         console.log("unmount")
         ui.reset()
        }
        
		},[setCurrentUser,setLoading,currentUser])
      useEffect(()=>{
         if(currentUser){
            return setVis(false)

         }
         setVis(true)
      },[currentUser,loading])

   const handleSignOut = async () => {
      await logOut();
   };
   return (
       <>
         <div >
         <h1>Welcome to Eiga</h1>
         <div  style={{visibility: vis ? 'visible' : 'hidden' }} id="firebaseui-auth-container"></div>
         </div>
        {currentUser&& 
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
               <div className={classes.item}>{data?userData.uuid:"Loading..."}</div>
            </Grid>

            <Grid item sm={3} xs={12}>
               <label className={classes.label}>Verified</label>
            </Grid>
            <Grid item sm={9} xs={12}>
               <div className={classes.item}>{data?(userData.verify?"Yes":"No"):"Loading..."}</div>
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
}
      </>
   );
   }

   
