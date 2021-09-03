import React,{ Dispatch, MutableRefObject, SetStateAction } from 'react';
import { Movies } from '@graphgen';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/IframeStyles';
import {
   CircularProgress,
   Box,
   Grid,
   Breadcrumbs,
   Typography,
   Button,
   Container,
} from '@material-ui/core';
import { NextRouter, useRouter } from 'next/router';

const useStyles = makeStyles(styles);
interface IframeProp {
   currentServer: string;
   loading: boolean;
   setLoading: Dispatch<SetStateAction<boolean>>;
   id: string | string[];
   server: Partial<Movies>;
   changeServer: (server: string) => void;
   premiumUser: boolean;
}

const Iframe: React.FC<IframeProp> = ({
   currentServer,
   loading,
   setLoading,
   id,
   server,
   changeServer,
   premiumUser,
}) => {
   const router:NextRouter = useRouter()
   const refer = React.useRef(null)
   const classes = useStyles();
   const refFreeServer1: string = server?.freeServer1;
   const refFreeServer2: string = server?.freeServer2;
   const refVipServer1: string = server?.vipServer1;
   const refVipServer2: string = server?.vipServer2;


   return (
      <Container className={classes.root}>
         <Breadcrumbs className={classes.breadcrumbs}>
            <Typography color="textSecondary" className={classes.breadItem}>
               Home
            </Typography>
            <Typography color="textSecondary" className={classes.breadItem}>
               Movies
            </Typography>
            <Typography color="textPrimary" className={classes.breadItem}>
               {id}
            </Typography>
         </Breadcrumbs>
         <Box className={classes.container}>
            <div className={classes.loadingIcon}>
               {loading && <CircularProgress color="inherit" />}
            </div>
            <iframe
               ref={refer}
               className={classes.iframe}
               onLoad={() => {
                  refer.current.src!==currentServer?
                  router.push('/404'): 
                  setLoading(false)}}
               id="aungmyomyat"
               src={currentServer}
               scrolling="no"
               allowFullScreen
               key={currentServer}
            ></iframe>
         </Box>
         <Box className={classes.buttonGroup}>
            <Button
               variant={`${
                  currentServer === refFreeServer1 || currentServer === refVipServer1
                     ? 'contained'
                     : 'outlined'
               }`}
               size="small"
               color="primary"
               onClick={() => changeServer(premiumUser ? server.vipServer1 : server.freeServer1)}
               className={classes.button}
            >
               Server1
            </Button>
            <Button
               variant={`${
                  currentServer === refFreeServer2 || currentServer === refVipServer2
                     ? 'contained'
                     : 'outlined'
               }`}
               size="small"
               color="primary"
               onClick={() => changeServer(premiumUser ? server.vipServer2 : server.freeServer2)}
            >
               Server2
            </Button>
         </Box>
      </Container>
   );
};

export default Iframe;
