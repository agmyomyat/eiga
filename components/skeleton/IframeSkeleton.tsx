import { Box, Skeleton, Divider } from '@mui/material'

const NavigationSke: React.FC = () => {
   return (
      <>
         <Box
            sx={{
               my: {
                  xs: 1.5,
                  sm: 3,
               },
            }}
         >
            <Skeleton width="50%" />
         </Box>

         <Box width={1}>
            <Skeleton variant="rectangular" sx={{ pb: '56.25%' }} />
         </Box>
         <Box py={1} my={2}>
            <Skeleton height={30} width="30%" />
         </Box>
         <Divider />
      </>
   )
}

export default NavigationSke
