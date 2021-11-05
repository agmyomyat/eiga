import { SplideSlide } from '@splidejs/react-splide'
import { Movies as typeMovies } from '@graphgen'
import Movie from '@components/movies/Movie'

interface ISlide {
   movie: Partial<typeMovies>
}

const Slide: React.FC<ISlide> = ({ movie }) => {
   return (
      <SplideSlide>
         <Movie {...movie} />
      </SplideSlide>
   )
}

export default Slide
