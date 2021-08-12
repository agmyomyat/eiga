import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/MoviesGrid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Movie from './Movie';

const useStyles = makeStyles(styles);

const Movies = ({ movies }) => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <div className={classes.heading}>
            <Typography className={classes.title} variant="h5" component="h3" color="textSecondary">
               Trending
            </Typography>
            {/* <div className={classes.buttonGroup}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        size="small"
                        active
                    >
                        Movies
                    </Button>
                </div> */}
         </div>
         <div className={classes.grid}>
            {movies.map(movie => (
               <Movie key={movie.id} {...movie} />
            ))}
         </div>
      </div>
   );
};

export default Movies;
