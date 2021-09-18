import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Movie from './Movie';
import { Movies as typeMovies } from '@graphgen';
import { StyledBox, classes} from '@styles/MoviesGrid'
interface IMovies {
   movies: Partial<typeMovies[]>;
}






const Movies = ({ movies }: IMovies) => {
   return (
      <StyledBox className={classes.grid}>
         {movies.map((movie: Partial<typeMovies>) => (
            <Movie key={movie.id} {...movie} />
         ))}
      </StyledBox>
   );
};

export default Movies;
