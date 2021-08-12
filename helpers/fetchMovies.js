const baseURL = 'https://api.themoviedb.org/3/movie/';
const APIKEY = '?api_key=04c35731a5ee918f014970082a0088b1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

export const getMovies = async () => {
    const res = await fetch(baseURL + 'popular' + APIKEY);
    const data = await res.json();

    const movies = data.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        releaseDate: movie.release_date.slice(0, 4),
        quality: 'HD',
        image: IMGPATH + (movie.poster_path || movie.backdrop_path),
    }));
    return movies;
};

export const getMovie = async args => {
    const res = await fetch(baseURL + args + APIKEY);
    const data = await res.json();
    const movie = {
        id: data.id,
        title: data.original_title,
        releaseDate: data.release_date,
        quality: 'HD',
        overview: data.overview,
        image:
            IMGPATH +
            (data.belongs_to_collection.poster_path || data.belongs_to_collection.backdrop_path),
    };
    return movie;
};
