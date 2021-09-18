import { Box, Typography } from '@mui/material';
import { GetRelatedMoviesQuery } from '@graphgen';
import { Movies as typeMovies } from '@graphgen';
import Movies from '@components/movies/Movies';
import { StyledBox, classes } from '@styles/RelatedMoviesStyles';

interface IRelatedMovies {
   data: GetRelatedMoviesQuery;
   loading: boolean;
}

const RelatedMovies: React.FC<IRelatedMovies> = ({ data, loading }) => {
   const movies = data?.movies;

   console.log('related movies', movies);

   if (loading) {
      return <h1>loading</h1>;
   }

   return (
      <StyledBox>
         <Typography variant="subtitle1" component="h3" className={classes.title}>
            Related Movies
         </Typography>
         <Box>
            <Movies movies={data.movies as typeMovies[]} />
         </Box>
      </StyledBox>
   );
};

export default RelatedMovies;
