import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/IframeStyles';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(styles as any);
interface IframeProp {
   server: string;
}

const Iframe: React.FC<IframeProp> = ({ server }) => {
   const [loading, setLoading] = useState<boolean>(true);
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
