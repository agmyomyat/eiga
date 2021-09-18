import { Movies } from '@graphgen';
import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter, NextRouter } from 'next/router';
import { StyledGrid, classes } from '@styles/RelatedMovieStyles';

const RelatedMovie: React.FC<Partial<Movies>> = ({ name, date, photo_url, uuid }) => {
   const { push }: NextRouter = useRouter();

   return (
      <StyledGrid
         container
         spacing={2}
         className={classes.root}
         onClick={() => push({ pathname: '/movies/[id]', query: { id: uuid } })}
      >
         <Grid item xs={3}>
            <Box className={classes.card}>
               <Image src={photo_url} layout="responsive" width={600} height={900} alt={name} />
            </Box>
         </Grid>
         <Grid item xs={9}>
            <Typography variant="subtitle2" component="h4" noWrap>
               {name}
            </Typography>
            <Typography variant="subtitle2" component="p" color="textSecondary">
               {new Date(date).getFullYear()}
            </Typography>
         </Grid>
      </StyledGrid>
   );
};

export default RelatedMovie;
