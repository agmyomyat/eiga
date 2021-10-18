import { Box, Skeleton, Typography, Divider } from '@mui/material'

const MovieInfoSkeleton: React.FC = () => {
   return (
      <>
         <Box my={2}>
            <Typography variant="h6">
               <Skeleton width="25%" />
            </Typography>
            <Box mt={2}>
               <Skeleton height={30} width="100%" />
            </Box>
            <Box mt={1}>
               <Skeleton height={30} width="100%" />
            </Box>
            <Box mt={2}>
               <Skeleton variant="rectangular" height={100} />
            </Box>
         </Box>
         <Divider />
      </>
   )
}

export default MovieInfoSkeleton
