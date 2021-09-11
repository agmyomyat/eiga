import React, { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { Movies } from '@graphgen';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/IframeStyles';
import { CircularProgress, Box, Breadcrumbs, Typography, Button } from '@material-ui/core';
import { NextRouter, useRouter } from 'next/router';

const useStyles = makeStyles(styles);

type Server = {
   __typename?: 'Movies';
   freeServer1?: string;
   freeServer2?: string;
   vipServer1?: string;
   vipServer2?: string;
   name: string;
   date?: any;
   body: string;
   genres?: {
      __typename?: 'Genres';
      name?: string;
   }[];
};
interface IframeProp {
   currentServer: string;
   loading: boolean;
   setLoading: Dispatch<SetStateAction<boolean>>;
   id: string | string[];
   server: Server;
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
   const router: NextRouter = useRouter();
   const refer = React.useRef(null);
   const copy = React.useRef(currentServer);
   const classes = useStyles();

   const refFreeServer1: string = server?.freeServer1;
   const refFreeServer2: string = server?.freeServer2;
   const refVipServer1: string = server?.vipServer1;
   const refVipServer2: string = server?.vipServer2;

   console.log('server1', refFreeServer1);
   console.log('server2', refFreeServer2);
   console.log('current Server', currentServer);

   React.useEffect(() => {
      console.log('current', currentServer);
      copy.current = refer.current.src;
   }, [currentServer]);

   console.log('iframe src', refer.current?.src);
   console.log('copy server', copy?.current);

   return (
      <>
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
                  refer.current.src !== copy.current ? console.log('gg') : setLoading(false);
               }}
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
      </>
   );
};

export default Iframe;
