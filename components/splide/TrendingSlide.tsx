import { Box, useTheme } from '@mui/material'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Movies } from '@graphgen'
import Movie from '@components/movies/Movie'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

interface ITrendingMovies {
   movies: Partial<Movies[]>
}

const TrendingSlide: React.FC<ITrendingMovies> = ({ movies }) => {
   const theme = useTheme()

   return (
      <Box>
         <Splide
            options={{
               rewind: true,
               gap: '1rem',
               fixedWidth: theme.spacing(15),
               arrows: 'slider',
               pagination: false,
            }}
         >
            {movies.map((movie: Partial<Movies>) => (
               <SplideSlide key={movie.id}>
                  <Movie {...movie} />
               </SplideSlide>
            ))}
         </Splide>
      </Box>
   )
}

export default TrendingSlide
