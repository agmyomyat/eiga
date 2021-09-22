import { Box, Typography, Button, Divider, Alert, AlertTitle } from '@mui/material';
import { Plan } from '@helpers/plans';
import Link from 'next/link';
import { Link as MuiLink } from '@mui/material';

interface Ivoucher {
   isLoggedIn: boolean;
   handleNext: () => void;
   handleBack: () => void;
   currentPlan: Plan;
}

const Voucher: React.FC<Ivoucher> = ({ isLoggedIn, handleNext, handleBack, currentPlan }) => {
   console.log('currentPlan', currentPlan);

   return (
      <Box width={1} my={5} py={5}>
         {isLoggedIn ? (
            <Box
               maxWidth="400px"
               mx="auto"
               sx={{
                  mt: {
                     xs: 1,
                     sm: 5,
                  },
               }}
               p={5}
               pt={2}
               boxShadow={10}
            >
               <Box py={3}>
                  <Typography variant="h5" component="h2" align="center">
                     Subscription Details
                  </Typography>
               </Box>
               <Divider />
               <Box>
                  <Box py={2}>
                     <Typography
                        variant="subtitle2"
                        component="h3"
                        color="textSecondary"
                        sx={{ py: 1 }}
                     >
                        Selected Plan
                     </Typography>
                     <Typography variant="subtitle1" component="h4">
                        Premium - {currentPlan.month}
                     </Typography>
                  </Box>
                  <Box py={2}>
                     <Typography
                        variant="subtitle2"
                        component="h3"
                        color="textSecondary"
                        sx={{ py: 1 }}
                     >
                        Total Price
                     </Typography>
                     <Typography variant="subtitle1" component="h4">
                        {currentPlan.price}MMK
                     </Typography>
                  </Box>
                  <Divider />
                  <Box
                     sx={{
                        pt: 4,
                        width: 1,
                        display: 'flex',
                        justifyContent: 'flex-end',
                     }}
                  >
                     <Button variant="outlined" size="small" sx={{ mr: 2 }} onClick={handleBack}>
                        Cancel
                     </Button>
                     <Button variant="contained" size="small" onClick={handleNext}>
                        Confirm
                     </Button>
                  </Box>
               </Box>
            </Box>
         ) : (
            <Box
               maxWidth="600px"
               mx="auto"
               sx={{
                  mt: {
                     xs: 2,
                     sm: 5,
                  },
                  py: {
                     xs: 2,
                     sm: 5,
                  },
               }}
            >
               <Alert severity="error">
                  <AlertTitle>You&apos;re Not Logged In</AlertTitle>
                  Please login first to subscribe.
               </Alert>
               <Box display="flex" justifyContent="space-between" mt={2} color="text.secondary">
                  <MuiLink component="button" variant="body2" color="inherit" onClick={handleBack}>
                     Back
                  </MuiLink>
                  <Typography variant="body2">
                     <Link href="/profile" passHref>
                        <MuiLink color="inherit" underline="hover">
                           Create Account?
                        </MuiLink>
                     </Link>
                  </Typography>
               </Box>
            </Box>
         )}
      </Box>
   );
};

export default Voucher;
