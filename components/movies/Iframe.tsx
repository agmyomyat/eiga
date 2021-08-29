import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/IframeStyles';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import {GetMovieQuery} from '@graphgen'

const useStyles = makeStyles(styles as any);
interface IframeProp{
   data: GetMovieQuery;
}

const Iframe: React.FC<IframeProp> = ({ data }) => {
   const [loading, setLoading] = useState<boolean>(true);
   const classes = useStyles();

   return (
      <Box className={classes.container}>
         <div className={classes.loadingIcon}>
            {loading && <CircularProgress color="inherit" />}
         </div>
         <iframe
            className={classes.iframe}
            onLoad={() => setLoading(false)}
            src={data.getMovie.server2}
            scrolling="no"
            allowFullScreen
         ></iframe>
      </Box>
   );
};

export default Iframe;
