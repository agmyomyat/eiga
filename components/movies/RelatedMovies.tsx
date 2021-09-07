import { Box, Typography } from '@material-ui/core';
import { Movies as typeMovies } from '@graphgen';
import Movies from '@components/movies/Movies';

interface RelatedMovies {
   movies: Partial<typeMovies[]>;
}

const RelatedMovies: React.FC<RelatedMovies> = ({ movies }) => {
   return (
      <>
         <Typography variant="h4" component="h3">
            Related Movies
         </Typography>
         <Movies movies={movies} />
      </>
   );
};

export default RelatedMovies;
