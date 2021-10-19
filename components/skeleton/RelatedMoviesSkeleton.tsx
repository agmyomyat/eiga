import { Box, Skeleton, Typography } from '@mui/material'
import MoviesSkeleton from './MoviesSkeleton'

const RelatedMoviesSkeleton: React.FC = () => {
   return (
      <Box>
         <Typography variant="subtitle1" sx={{ my: 1, py: 2 }}>
            <Skeleton width="30%" />
         </Typography>
         <Box>
            <MoviesSkeleton items={10} />
         </Box>
      </Box>
   )
}

export default RelatedMoviesSkeleton
