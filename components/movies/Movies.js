import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/MoviesGrid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Movie from './Movie';

const useStyles = makeStyles(styles);

const Movies = () => {
    const classes = useStyles();
    const movies = useSelector(state => state.movies);

    return (
        <Box py={2}>
            <Box display="flex" py={3}>
                <Typography
                    className={classes.title}
                    variant="h5"
                    component="h3"
                    color="textSecondary"
                >
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
            </Box>
            <Box className={classes.grid} pt={2}>
                {movies.map(movie => (
                    <Movie key={movie.id} {...movie} />
                ))}
            </Box>
        </Box>
    );
};

export default Movies;
