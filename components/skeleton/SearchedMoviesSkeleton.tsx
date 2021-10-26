import { Grid, Box, Typography, Skeleton } from '@mui/material'

interface ISearchedMoviesSkeletonProps {
   items: number
}

const SearchedMoviesSkeleton: React.FC<ISearchedMoviesSkeletonProps> = ({
   items,
}) => {
   return (
      <>
         {[...Array(items)].map((_arr, i) => (
            <Grid
               key={i}
               container
               spacing={2}
               sx={{
                  width: 1,
                  alignItems: 'center',
                  py: 1,
                  cursor: 'pointer',
                  px: 2,
               }}
            >
               <Grid item xs={2}>
                  <Box>
                     <Skeleton
                        variant="rectangular"
                        sx={{ pb: '150%', borderRadius: 1 }}
                     />
                  </Box>
               </Grid>
               <Grid item xs={10}>
                  <Typography variant="subtitle1">
                     <Skeleton height={10} width="50%" />
                  </Typography>
                  <Box mt={1}>
                     <Skeleton height={10} width="80%" />
                  </Box>
               </Grid>
            </Grid>
         ))}
      </>
   )
}

export default SearchedMoviesSkeleton
