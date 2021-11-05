import { Movies } from '@graphgen'
import Slide from './Slide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

interface ITrendingMovies {
   movies: Partial<Movies[]>
}

const TrendingSlide: React.FC<ITrendingMovies> = ({ movies }) => {
   return (
      <>
         {movies.map((movie: Partial<Movies>) => (
            <Slide key={movie.uuid} movie={movie} />
         ))}
      </>
   )
}

export default TrendingSlide
