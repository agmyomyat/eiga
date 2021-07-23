// import Carousel from '../components/carousel/Carousel';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMoviesAsync } from '../reducers/moviesSlice';
import Movies from '../components/movies/Movies';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/HomeStyles';

function Home({ classes }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesAsync());
    }, [dispatch]);

    return <Movies />;
}

export default withStyles(styles)(Home);
