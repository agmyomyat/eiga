// import Carousel from '../components/carousel/Carousel';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMoviesAsync } from '../reducers/moviesSlice';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../styles/HomeStyles';
import Container from '@material-ui/core/Container';
import Movies from '../components/movies/Movies';

const useStyles = makeStyles(styles);

function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesAsync());
    }, [dispatch]);

    return (
        <Container>
            <Movies />
        </Container>
    );
}

export default Home;
