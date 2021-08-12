// import Carousel from '../components/carousel/Carousel';

import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../styles/HomeStyles';
import Container from '@material-ui/core/Container';
import Movies from '../components/movies/Movies';
import { getMovies } from '../helpers/fetchMovies';

const useStyles = makeStyles(styles);

function Home({ movies }) {
    const classes = useStyles();
    // const movies = useSelector(selectedMovies());

    return (
        <Container>
            <Movies movies={movies} />
        </Container>
    );
}

export default Home;

export async function getStaticProps() {
    const movies = await getMovies();

    return {
        props: {
            movies,
        },
    };
}
