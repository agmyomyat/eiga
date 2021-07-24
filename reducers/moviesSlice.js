import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const APIURL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

export const getMoviesAsync = createAsyncThunk('moives/getMoviesAsync', async () => {
    const res = await fetch(APIURL);
    const data = await res.json();
    return data.results;
});

const moviesSlice = createSlice({
    name: 'movies',
    initialState: [],
    extraReducers: {
        [getMoviesAsync.fulfilled]: (_state, action) => {
            return action.payload.map(movie => ({
                id: movie.id,
                title: movie.title,
                releaseDate: movie.release_date.slice(0, 4),
                quality: 'HD',
                image: IMGPATH + (movie.poster_path || movie.backdrop_path),
            }));
        },
    },
});

export default moviesSlice.reducer;
