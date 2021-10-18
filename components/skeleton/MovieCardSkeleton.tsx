import { Box, Skeleton, Typography } from '@mui/material'

const MovieCardSkeleton: React.FC = () => {
   return (
      <Box>
         <Skeleton
            variant="rectangular"
            sx={{
               pb: '150%',
            }}
            width="100%"
         ></Skeleton>
         <Typography sx={{ py: 1 }} variant="subtitle2">
            <Skeleton />
         </Typography>
         <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            color="text.disabled"
         >
            <Skeleton width="50%" />
         </Box>
      </Box>
   )
}

export default MovieCardSkeleton
