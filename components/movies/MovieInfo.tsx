import { Box, Typography } from '@material-ui/core';
import { Movies } from '@graphgen';

const MovieInfo: React.FC<Partial<Movies>> = ({ name, date, body, genres }) => {
   return (
      <Box>
         <Typography>hello</Typography>
      </Box>
   );
};

export default MovieInfo;
