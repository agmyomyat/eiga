import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/MoviesGrid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Movie from './Movie';
import { Movies as typeMovies } from '@graphgen';

const useStyles = makeStyles(styles as any);

const Movies = ({ movies }) => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <div className={classes.grid}>
            {movies.map((movie: Partial<typeMovies>) => (
               <Movie key={movie.id} {...movie} />
            ))}
         </div>
      </div>
   );
};

export default Movies;
