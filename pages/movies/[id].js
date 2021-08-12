import { getMovies } from '../../helpers/fetchMovies';
import { getMovie } from '../../helpers/fetchMovies';

export async function getStaticProps({ params }) {
    const { id } = params;

    const movie = await getMovie(id);

    return {
        props: {
            movie,
        },
    };
}

export async function getStaticPaths() {
    const movies = await getMovies();
    const paths = movies.map(movie => ({
        params: {
            id: movie.id.toString(),
        },
    }));

    return {
        paths,
        fallback: true,
    };
}

function Page({ movie }) {
    return <h1>{movie.title}</h1>;
}

export default Page;
