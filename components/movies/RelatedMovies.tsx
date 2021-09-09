import { Box, Typography } from '@material-ui/core';
import { GetRelatedMoviesQuery } from '@graphgen';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/RelatedMoviesStyles';
import RelatedMovie from '@components/movies/RelatedMovie';

const useStyles = makeStyles(styles);

interface IRelatedMovies {
   data: GetRelatedMoviesQuery;
   loading: boolean;
}

const RelatedMovies: React.FC<IRelatedMovies> = ({ data, loading }) => {
   const movies = data?.movies;
   const classes = useStyles();

   console.log('related movies', movies);

   if (loading) {
      return <h1>loading</h1>;
   }

   return (
      <>
         <Typography variant="subtitle1" component="h3" className={classes.title}>
            Related Movies
         </Typography>
         <Box>
            {movies.map(movie => (
               <RelatedMovie key={movie.id} {...movie} />
            ))}
         </Box>
      </>
   );
};

export default RelatedMovies;
