import { Dispatch, SetStateAction } from 'react';
import { GetMovieQuery } from '@graphgen';
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

const useStyles = makeStyles(styles);
interface IframeProp {
   server: string;
   loading: boolean;
   setLoading: Dispatch<SetStateAction<boolean>>;
   id: string | string[];
   data: any;
   changeServer: (server: string) => void;
}

const Iframe: React.FC<IframeProp> = ({ server, loading, setLoading, id, data, changeServer }) => {
   const classes = useStyles();

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
               className={classes.iframe}
               onLoad={() => setLoading(false)}
               src={server}
               scrolling="no"
               allowFullScreen
               key={server}
            ></iframe>
         </Box>
         <Box className={classes.buttonGroup}>
            <Button
               variant={`${server === data.getMovie?.freeServer1 ? 'contained' : 'outlined'}`}
               size="small"
               color="primary"
               onClick={() => changeServer(data.getMovie?.freeServer1)}
               className={classes.button}
            >
               Server1
            </Button>
            <Button
               variant={`${server === data.getMovie?.freeServer2 ? 'contained' : 'outlined'}`}
               size="small"
               color="primary"
               onClick={() => changeServer(data.getMovie?.freeServer2)}
            >
               Server2
            </Button>
         </Box>
      </Container>
   );
};

export default Iframe;
