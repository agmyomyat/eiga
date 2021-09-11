import { Box, Typography } from '@material-ui/core';
import { Movies } from '@graphgen';
import { TMovies,TGenres} from './Iframe';
const MovieInfo: React.FC<TMovies<Movies,TGenres>> = ({ name, date, body, genres }) => {
   return (
      <Box>
         <Typography>hello</Typography>
      </Box>
   );
};

export default MovieInfo;
