import { Box, Typography } from '@mui/material';
import { Movies } from '@graphgen';
import { TMovies, TGenres } from './Iframe';
import { StyledBox, classes } from '@styles/MovieInfoStyles';

const MovieInfo: React.FC<TMovies<Movies, TGenres>> = ({ name, date, body, genres }) => {
   const newGenres = genres.map(genre => genre.name[0].toUpperCase() + genre.name.slice(1));
   const movieBody = body.replace(/<\/?[^>]+(>|$)/g, '');

   return (
      <StyledBox className={classes.root}>
         <Typography variant="h6" component="h2" className={classes.title}>
            {name}
         </Typography>
         <Box className={classes.infoWrapper}>
            <Typography variant="subtitle2" component="span" color="textSecondary">
               {new Date(date).getFullYear()}
            </Typography>
            <Typography
               variant="subtitle2"
               component="span"
               color="textSecondary"
               className={classes.infoSpacer}
            >
               |
            </Typography>
            <Typography variant="subtitle2" component="span" color="textSecondary">
               1hr 30min
            </Typography>
            <Typography
               variant="subtitle2"
               component="span"
               color="textSecondary"
               className={classes.infoSpacer}
            >
               |
            </Typography>
            <Typography variant="subtitle2" component="span" color="textSecondary">
               {newGenres.join(' ')}
            </Typography>
         </Box>
         <Box className={classes.body}>
            <Typography variant="body1">{movieBody}</Typography>
         </Box>
         <Box className={classes.details}>
            <Typography
               variant="subtitle2"
               component="span"
               color="textSecondary"
               className={classes.detailKey}
            >
               Imdb:
            </Typography>
            <Typography variant="subtitle2" component="span">
               7.1
            </Typography>
         </Box>
      </StyledBox>
   );
};

export default MovieInfo;
