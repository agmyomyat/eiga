import Box from '@mui/material/Box'
import Movie from './Movie'
import { Movies as typeMovies } from '@graphgen'

interface IMovies {
   movies: Partial<typeMovies[]>
}

const Movies = ({ movies }: IMovies) => {
   return (
      <Box
         display="grid"
         rowGap={3}
         columnGap={2}
         py={2}
         sx={{
            gridTemplateColumns: {
               xs: 'repeat(auto-fill, minmax(120px,1fr))',
               sm: 'repeat(auto-fill, minmax(150px,1fr))',
               md: 'repeat(auto-fill, minmax(170px,1fr))',
               lg: 'repeat(auto-fill, minmax(200px,1fr))',
            },
         }}
      >
         {movies.map((movie: Partial<typeMovies>) => (
            <Movie key={movie.id} {...movie} />
         ))}
      </Box>
   )
}

export default Movies
