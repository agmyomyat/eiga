import Box from '@mui/material/Box'
import Movie, { TMovieProps } from './Movie'
import { grid } from '@helpers/moviesGrid'
interface IMovies {
   movies: TMovieProps[]
}

const Movies: React.FC<IMovies> = ({ movies }) => {
   return (
      <Box display="grid" rowGap={3} columnGap={2} sx={grid}>
         {movies?.map((movie: TMovieProps) => {
            if (!movie.published_at) return null
            return <Movie key={movie.id} {...movie} />
         })}
      </Box>
   )
}

export default Movies
