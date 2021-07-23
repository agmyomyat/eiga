import { useSelector } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/MoviesGrid';
import Movie from './Movie';

const Movies = ({ classes }) => {
    const movies = useSelector(state => state.movies);

    return (
        <div className={classes.root}>
            {movies.map(movie => (
                <Movie key={movie.id} {...movie} />
            ))}
        </div>
    );
};

export default withStyles(styles)(Movies);
