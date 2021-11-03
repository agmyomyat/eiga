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
      <Box mt={3}>
         <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
               mb: 3,
            }}
         >
            You May Like
         </Typography>
         <Box>
            <Movies movies={movies as typeMovies[]} />
         </Box>
      </Box>
   )
}

export default RelatedMovies
