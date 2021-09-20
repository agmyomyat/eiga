import { useState } from 'react';
import { Box, Typography, Divider, Container } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BlockIcon from '@mui/icons-material/Block';
import { plans } from '@helpers/plans';

export default function Pricing() {
   const [month, setMonth] = useState<number>(1);
   const currentPlan = plans.find(plan => plan.id === month);

   const selectPlans = (
      <Box display="flex" justifyContent="center" sx={{ pt: 5 }}>
         {plans.map(plan => (
            <Box
               key={plan.id}
               onClick={() => setMonth(plan.id)}
               sx={{
                  py: 2,
                  px: 4,
                  textAlign: 'center',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#303030',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  '&:hover': {
                     borderColor: 'primary.main',
                  },
                  color: month === plan.id ? 'black' : 'white',
                  border: month === plan.id ? 'none' : '',
                  bgcolor: month === plan.id ? 'primary.main' : 'transparent',
               }}
            >
               {plan.month}
            </Box>
         ))}
      </Box>
   );

   return (
      <Container sx={{ mb: '100px' }}>
         {/* <Typography variant="h3" component="h1" align="center">
            EIGA Pricing
         </Typography> */}
         {selectPlans}
         <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
            <Box width="400px" maxWidth="80%" m={3} boxShadow={10} borderRadius={1}>
               <Box bgcolor="primary.main" color="black" p={2}>
                  <Typography
                     variant="h6"
                     component="h2"
                     align="center"
                     sx={{
                        fontWeight: 'bold',
                     }}
                  >
                     BASIC
                  </Typography>
               </Box>
               <Box py={5} px={2}>
                  <Typography
                     variant="h5"
                     component="h3"
                     align="center"
                     sx={{ fontWeight: 'bold' }}
                  >
                     FREE
                  </Typography>
               </Box>
               <Divider variant="middle" />
               <Box p={5}>
                  <Box display="flex" py={1}>
                     <CheckCircleOutlineIcon sx={{ mr: 2, color: 'success.main' }} />
                     <Typography variant="body1">SD(480p)</Typography>
                  </Box>
                  <Box display="flex" py={1}>
                     <BlockIcon sx={{ mr: 2, color: 'error.main' }} />
                     <Typography variant="body1">Ads Free</Typography>
                  </Box>
                  <Box display="flex" py={1}>
                     <BlockIcon sx={{ mr: 2, color: 'error.main' }} />
                     <Typography variant="body1">Download Contents</Typography>
                  </Box>
                  <Box display="flex" py={1}>
                     <BlockIcon sx={{ mr: 2, color: 'error.main' }} />
                     <Typography variant="body1">Access Premium Contents</Typography>
                  </Box>
                  <Box display="flex" py={1}>
                     <BlockIcon sx={{ mr: 2, color: 'error.main' }} />
                     <Typography variant="body1">Watch History Feature</Typography>
                  </Box>
                  <Box display="flex" py={1}>
                     <BlockIcon sx={{ mr: 2, color: 'error.main' }} />
                     <Typography variant="body1">Favorites Feature</Typography>
                  </Box>
               </Box>
            </Box>

            {/* Free-Card ends here */}

            <Box width="400px" maxWidth="80%" m={3} boxShadow={10} borderRadius={1}>
               <Box bgcolor="primary.main" color="black" p={2}>
                  <Typography
                     variant="h6"
                     component="h2"
                     align="center"
                     sx={{
                        fontWeight: 'bold',
                     }}
                  >
                     PREMIUM
                  </Typography>
               </Box>
               <Box py={5} px={2}>
                  <Typography
                     variant="h5"
                     component="h3"
                     align="center"
                     sx={{ fontWeight: 'bold' }}
                  >
                     {currentPlan.price}MMK
                     <Typography
                        variant="subtitle2"
                        component="span"
                        color="textSecondary"
                        sx={{ ml: 1 }}
                     >
                        /month
                     </Typography>
                  </Typography>
                  {currentPlan.save > 0 && (
                     <Typography variant="subtitle2" component="p" color="primary" align="center">
                        (Save {currentPlan.save} Month)
                     </Typography>
                  )}
               </Box>
               <Divider variant="middle" />
               <Box p={5}>
                  <Box display="flex" py={1}>
                     <CheckCircleOutlineIcon sx={{ mr: 2, color: 'success.main' }} />
                     <Typography
                        variant="body1"
                        sx={{
                           color: 'primary.main',
                           position: 'relative',
                           '&::after': {
                              position: 'absolute',
                              content: '"*"',
                              top: 0,
                              right: -10,
                              marginLeft: 1,
                           },
                        }}
                     >
                        HD
                     </Typography>
                  </Box>
                  <Box display="flex" py={1}>
                     <CheckCircleOutlineIcon sx={{ mr: 2, color: 'success.main' }} />
                     <Typography
                        variant="body1"
                        sx={{
                           color: 'primary.main',
                           position: 'relative',
                           '&::after': {
                              position: 'absolute',
                              content: '"*"',
                              top: 0,
                              right: -10,
                              marginLeft: 1,
                           },
                        }}
                     >
                        Ads Free
                     </Typography>
                  </Box>
                  <Box display="flex" py={1}>
                     <CheckCircleOutlineIcon sx={{ mr: 2, color: 'success.main' }} />
                     <Typography
                        variant="body1"
                        sx={{
                           color: 'primary.main',
                           position: 'relative',
                           '&::after': {
                              position: 'absolute',
                              content: '"*"',
                              top: 0,
                              right: -10,
                              marginLeft: 1,
                           },
                        }}
                     >
                        Download Contents
                     </Typography>
                  </Box>
                  <Box display="flex" py={1}>
                     <CheckCircleOutlineIcon sx={{ mr: 2, color: 'success.main' }} />
                     <Typography variant="body1">Access Premium Contents</Typography>
                  </Box>
                  <Box display="flex" py={1}>
                     <CheckCircleOutlineIcon sx={{ mr: 2, color: 'success.main' }} />
                     <Typography variant="body1">Watch History Feature</Typography>
                  </Box>
                  <Box display="flex" py={1}>
                     <CheckCircleOutlineIcon sx={{ mr: 2, color: 'success.main' }} />
                     <Typography variant="body1">Favorites Feature</Typography>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Container>
   );
}
