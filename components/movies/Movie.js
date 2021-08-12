import { useEffect, useState } from 'react';
//
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/MovieCard';
import Card from '@material-ui/core/Card';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router';

const useStyles = makeStyles(styles);

const Movie = ({ id, title, image, releaseDate }) => {
   const classes = useStyles();
   const { push } = useRouter();

   // will delete later
   const [show, setShow] = useState(false);
   useEffect(() => {
      const timeout = setTimeout(() => {
         setShow(false);
      }, 3000);
      return () => clearTimeout(timeout);
   });
   //
   return (
      <Box onClick={() => push(`/movies/${id}`)}>
         {show ? (
            <Skeleton variant="rect" className={classes.skeletonImage} width="100%"></Skeleton>
         ) : (
            <Card className={classes.card}>
               <Image
                  src={image}
                  className={classes.media}
                  layout="responsive"
                  width={600}
                  height={900}
                  alt={title}
               />
               <i className={classes.quality}>HD</i>
            </Card>
         )}

         <Typography className={classes.title} variant="subtitle2" component="h4" noWrap>
            {show ? <Skeleton /> : title}
         </Typography>

         <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            className={classes.content}
         >
            {show ? (
               <Skeleton width="50%" />
            ) : (
               <>
                  {releaseDate}
                  <i className={classes.type}>Movie</i>
               </>
            )}
         </Box>
      </Box>
   );
};

export default Movie;
