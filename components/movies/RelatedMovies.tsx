import { Box, Typography } from '@mui/material'
import { GetRelatedMoviesQuery } from '@graphgen'
import { Movies as typeMovies } from '@graphgen'
import Movies from '@components/movies/Movies'

interface IRelatedMovies {
   data: GetRelatedMoviesQuery
}

const RelatedMovies: React.FC<IRelatedMovies> = ({ data }) => {
   const movies = data?.movies

   return (
      <Box>
         <Typography variant="subtitle1" component="h3" sx={{ my: 1, py: 2 }}>
            Related Movies
         </Typography>
         <Box>
            <Movies movies={movies as typeMovies[]} />
         </Box>
      </Box>
   )
}

export default RelatedMovies
