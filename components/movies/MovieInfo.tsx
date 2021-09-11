import { Grid, Box, Typography } from '@material-ui/core';
import { Movies } from '@graphgen';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/MovieInfoStyles';

const useStyles = makeStyles(styles);

const MovieInfo: React.FC<Partial<Movies>> = ({ name, date, body, genres }) => {
   const classes = useStyles();

   const newGenres = genres.map(genre => genre.name[0].toUpperCase() + genre.name.slice(1));
   const movieBody = body.replace(/<\/?[^>]+(>|$)/g, '');

   return (
      <Box className={classes.root}>
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
      </Box>
   );
};

export default MovieInfo;
