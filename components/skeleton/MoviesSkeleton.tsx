import { Box } from '@mui/material'
import MovieCardSkeleton from './MovieCardSkeleton'

interface IMoviesProps {
   items: number
}

const Movies: React.FC<IMoviesProps> = ({ items }) => {
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
         {[...Array(items)].map((_arr, i) => (
            <MovieCardSkeleton key={i} />
         ))}
      </Box>
   )
}

export default Movies
