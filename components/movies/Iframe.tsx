import { Dispatch, SetStateAction } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/IframeStyles';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(styles);
interface IframeProp {
   server: string;
   loading: boolean;

   setLoading: Dispatch<SetStateAction<boolean>>;
}

const Iframe: React.FC<IframeProp> = ({ server, loading, setLoading }) => {
   const classes = useStyles();

   console.log('server', server);

   return (
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
         ></iframe>
      </Box>
   );
};

export default Iframe;
