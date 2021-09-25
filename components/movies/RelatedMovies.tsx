import { Box, Typography } from '@mui/material'
import { GetRelatedMoviesQuery } from '@graphgen'
import { Movies as typeMovies } from '@graphgen'
import Movies from '@components/movies/Movies'

interface IRelatedMovies {
   data: GetRelatedMoviesQuery
   loading: boolean
}

const RelatedMovies: React.FC<IRelatedMovies> = ({ data, loading }) => {
   const movies = data?.movies

   console.log('related movies', movies)

   if (loading) {
      return <h1>loading</h1>
   }

   return (
      <Box>
         <Typography variant="subtitle1" component="h3" sx={{ my: 1, py: 2 }}>
            Related Movies
         </Typography>
         <Box>
            <Movies movies={data.movies as typeMovies[]} />
         </Box>
      </Box>
   )
}

export default RelatedMovies
