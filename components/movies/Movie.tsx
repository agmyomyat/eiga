import { useEffect, useState } from 'react';
//
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/MovieCard';
import Card from '@material-ui/core/Card';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import { NextRouter, useRouter } from 'next/router';
import { Movies } from '../../graphgen/graphql';

const useStyles = makeStyles(styles as any);

const Movie = ({ uuid, name, photo_url, date, quality }:Movies) => {
   const classes = useStyles();
   const { push }:NextRouter = useRouter();
   // will delete later
   const [show, setShow] = useState<boolean>(false);
   useEffect(() => {
      const timeout = setTimeout(() => {
         setShow(false);
      }, 3000);
      return () => clearTimeout(timeout);
   });
   //
   return (
      <Box onClick={() => push(`/movies/${uuid}`)}>
         {show ? (
            <Skeleton variant="rect" className={classes.skeletonImage} width="100%"></Skeleton>
         ) : (
            <Card className={classes.card}>
               <Image
                  src={photo_url}
                  className={classes.media}
                  layout="responsive"
                  width={600}
                  height={900}
                  alt={name}
               />
               <i className={classes.quality}>{quality}</i>
            </Card>
         )}

         <Typography className={classes.title} variant="subtitle2" component="h4" noWrap>
            {show ? <Skeleton /> : name}
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
                  {new Date(date).getFullYear()}
                  <i className={classes.type}>Movie</i>
               </>
            )}
         </Box>
      </Box>
   );
};

export default Movie;
