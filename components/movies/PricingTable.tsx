import { Dispatch, SetStateAction } from 'react'
import { Box, Typography, Divider, Button, alpha } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { Plan } from '@helpers/plans'

interface IpricingTable {
   onPurchase: () => void
   plans: Plan[]
   month: number
   setMonth: Dispatch<SetStateAction<number>>
   selectedPlan: Plan
}

const PricingTable: React.FC<IpricingTable> = ({
   onPurchase,
   plans,
   month,
   setMonth,
   selectedPlan,
}) => {
   const selectPlans = (
      <Box
         display="flex"
         justifyContent="space-around"
         onClick={() => setMonth((prev) => (prev === 1 ? 2 : 1))}
         sx={{
            py: 1.5,
            my: 5,
            position: 'relative',
            width: 250,
            mx: 'auto',
            bgcolor: (theme) => alpha(theme.palette.common.white, 0.05),
            borderRadius: 2,
            cursor: 'pointer',
         }}
      >
         <Box
            sx={{
               content: `''`,
               position: 'absolute',
               bottom: '8%',
               height: '84%',
               borderRadius: 2,
               left: month === 1 ? '2%' : '50%',
               width: '48%',
               bgcolor: (theme) => theme.palette.primary.main,
               transition: (theme) =>
                  theme.transitions.create('left', {
                     duration: theme.transitions.duration.standard,
                  }),
               zIndex: 5,
            }}
         ></Box>
         {plans.map((plan) => (
            <Typography
               variant="h6"
               key={plan.id}
               sx={{
                  zIndex: 10,
                  color: (theme) =>
                     month === plan.id
                        ? theme.palette.common.black
                        : theme.palette.common.white,
                  transition: (theme) =>
                     theme.transitions.create('color', {
                        duration: theme.transitions.duration.shortest,
                     }),
                  // textAlign: 'center',
                  // borderWidth: 1,
                  // borderStyle: 'solid',
                  // borderColor: '#303030',
                  // fontWeight: 'bold',
                  // cursor: 'pointer',
                  // '&:hover': {
                  //    borderColor: 'primary.main',
                  // },
                  // color: month === plan.id ? 'black' : 'white',
                  // border: month === plan.id ? 'none' : '',
                  // bgcolor: month === plan.id ? 'primary.main' : 'transparent',
               }}
            >
               {plan.month}
            </Typography>
         ))}
      </Box>
   )

   return (
      <Box>
         {/* <Typography variant="h3" component="h1" align="center">
            EIGA Pricing
         </Typography> */}
         {selectPlans}
         <Box display="flex" justifyContent="center" flexWrap="wrap" mt={2}>
            {/* Free-Card ends here */}

            <Box
               width="400px"
               maxWidth="80%"
               m={3}
               boxShadow={10}
               borderRadius={1}
            >
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
                     {selectedPlan.price}MMK
                     {selectedPlan.month === '1 Month' && (
                        <Typography
                           variant="subtitle2"
                           component="span"
                           color="textSecondary"
                           sx={{ ml: 1 }}
                        >
                           /month
                        </Typography>
                     )}
                  </Typography>
                  {selectedPlan.save > 0 && (
                     <Typography
                        variant="subtitle2"
                        component="p"
                        color="primary"
                        align="center"
                     >
                        (Save {selectedPlan.save} Month)
                     </Typography>
                  )}
               </Box>
               <Divider variant="middle" />
               <Box p={5}>
                  <Box display="flex" py={1}>
                     <CheckCircleOutlineIcon
                        sx={{ mr: 2, color: 'success.main' }}
                     />
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
                     <CheckCircleOutlineIcon
                        sx={{ mr: 2, color: 'success.main' }}
                     />
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
                     <CheckCircleOutlineIcon
                        sx={{ mr: 2, color: 'success.main' }}
                     />
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
                     <CheckCircleOutlineIcon
                        sx={{ mr: 2, color: 'success.main' }}
                     />
                     <Typography variant="body1">
                        Access Premium Contents
                     </Typography>
                  </Box>
                  <Box display="flex" py={1}>
                     <CheckCircleOutlineIcon
                        sx={{ mr: 2, color: 'success.main' }}
                     />
                     <Typography variant="body1">
                        Watch History Feature
                     </Typography>
                  </Box>
                  <Box display="flex" py={1}>
                     <CheckCircleOutlineIcon
                        sx={{ mr: 2, color: 'success.main' }}
                     />
                     <Typography variant="body1">Favorites Feature</Typography>
                  </Box>
                  <Button
                     sx={{
                        width: 1,
                        mt: 5,
                        mb: 2,
                        py: 2,
                     }}
                     variant="contained"
                     onClick={onPurchase}
                  >
                     Buy Now
                  </Button>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

export default PricingTable
