import React, { Dispatch, SetStateAction } from 'react';
import { Genres } from '@graphgen';
import { CircularProgress, Box, Breadcrumbs, Typography, Button } from '@mui/material';
import { NextRouter, useRouter } from 'next/router';
import Link from 'next/link';
import { Link as MuiLink } from '@mui/material';
import { Root, classes } from '@styles/IframeStyles';

export type TMovies<P, U> = Partial<Omit<P, 'genres'> & U>;
export type PartialGenres = { [P in keyof Genres]?: Genres[P] }[];
export type TGenres = { genres: PartialGenres };

interface IframeProp {
   currentServer: string;
   loading: boolean;
   setLoading: Dispatch<SetStateAction<boolean>>;
   id: string | string[];
   freeServer1: string;
   freeServer2: string;
   vipServer1: string;
   vipServer2: string;
   changeServer: (server: string) => void;
   premiumUser: boolean;
}

const Iframe: React.FC<IframeProp> = ({
   currentServer,
   loading,
   setLoading,
   id,
   freeServer1,
   freeServer2,
   vipServer1,
   vipServer2,
   changeServer,
   premiumUser,
}) => {
   const router: NextRouter = useRouter();
   const refer = React.useRef(null);
   const copy = React.useRef(currentServer);

   console.log('server1', freeServer1);
   console.log('server2', freeServer2);
   console.log('current Server', currentServer);

   React.useEffect(() => {
      console.log('current', currentServer);
      copy.current = refer.current.src;
   }, [currentServer]);

   console.log('iframe src', refer.current?.src);
   console.log('copy server', copy?.current);

   return (
      <Root>
         <Breadcrumbs className={classes.breadcrumbs}>
            <Typography color="textSecondary" className={classes.breadItem}>
               <Link href="/" passHref>
                  <MuiLink color="inherit">Home</MuiLink>
               </Link>
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
               src={currentServer}
               scrolling="no"
               allowFullScreen
               key={currentServer}
            ></iframe>
         </Box>
         <Box className={classes.buttonGroup}>
            <Button
               variant={`${
                  currentServer === freeServer1 || currentServer === vipServer1
                     ? 'contained'
                     : 'outlined'
               }`}
               size="small"
               color="primary"
               onClick={() => changeServer(premiumUser ? vipServer1 : freeServer1)}
               className={classes.button}
            >
               Server1
            </Button>
            <Button
               variant={`${
                  currentServer === freeServer2 || currentServer === vipServer2
                     ? 'contained'
                     : 'outlined'
               }`}
               size="small"
               color="primary"
               onClick={() => changeServer(premiumUser ? vipServer2 : freeServer2)}
            >
               Server2
            </Button>
         </Box>
      </Root>
   );
};

export default Iframe;
