import { Movies } from '@graphgen';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/RelatedMovieStyles';
import { Grid, Box, Typography } from '@material-ui/core';
import Image from 'next/image';
import { useRouter, NextRouter } from 'next/router';

const useStyles = makeStyles(styles);

const RelatedMovie: React.FC<Partial<Movies>> = ({ name, date, photo_url, uuid }) => {
   const classes = useStyles();
   const { push }: NextRouter = useRouter();

   return (
      <Grid
         container
         spacing={2}
         className={classes.root}
         onClick={() => push({ pathname: '/movies/[id]', query: { id: uuid } })}
      >
         <Grid item xs={4}>
            <Box className={classes.card}>
               <Image src={photo_url} layout="responsive" width={1600} height={900} alt={name} />
            </Box>
         </Grid>
         <Grid item xs={8}>
            <Typography variant="subtitle2" component="h4" noWrap>
               {name}
            </Typography>
            <Typography variant="subtitle2" component="p" color="textSecondary">
               {new Date(date).getFullYear()}
            </Typography>
         </Grid>
      </Grid>
   );
};

export default RelatedMovie;
