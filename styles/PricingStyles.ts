import { Theme, createStyles } from '@material-ui/core/styles';

import { Container } from '@mui/material'
import { styled } from '@mui/material/styles';

const PREFIX = 'pricing';

export const classes = {
   root: `${PREFIX}-root`,
   selectPlanWrapper: `${PREFIX}-selectPlanWrapper`,
   selectPlan: `${PREFIX}-selectPlan`,
   activePlan: `${PREFIX}-activePlan`,
   plans: `${PREFIX}-plans`,
   planHeader: `${PREFIX}-planHeader`,
   card: `${PREFIX}-card`,
   cardHeader: `${PREFIX}-cardHeader`,
   pricing: `${PREFIX}-pricing`,
   price: `${PREFIX}-price`,
   perMonth: `${PREFIX}-perMonth`,
   cardBody: `${PREFIX}-cardBody`,
   cardItem: `${PREFIX}-cardItem`,
   premiumItem: `${PREFIX}-premiumItem`,
   successIcon: `${PREFIX}-successIcon`,
   blockIcon: `${PREFIX}-blockIcon`,
};

export const StyledContainer = styled(Container)(({ theme }) => ({
   [`&.${classes.root}`]: {
      marginBottom: 100,
   },

   [`& .${classes.selectPlanWrapper}`]: {
      paddingTop: theme.spacing(5),
   },

   [`& .${classes.selectPlan}`]: {
      padding: theme.spacing(2, 4),
      textAlign: 'center',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#303030',
      fontWeight: theme.typography.fontWeightBold,
      cursor: 'pointer',
      '&:hover': {
         borderColor: theme.palette.primary.main,
      },
   },

   [`& .${classes.activePlan}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.black,
      border: 'none',
   },

   [`& .${classes.plans}`]: {
      marginTop: theme.spacing(2),
   },

   [`& .${classes.planHeader}`]: {
      fontWeight: theme.typography.fontWeightBold,
   },

   [`& .${classes.card}`]: {
      width: 400,
      maxWidth: '80%',
      margin: theme.spacing(3),
      boxShadow: theme.shadows[10],
      borderRadius: theme.shape.borderRadius,
      // backgroundColor: theme.palette.background.paper,
   },

   [`& .${classes.cardHeader}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.black,
      padding: theme.spacing(2),
   },

   [`& .${classes.pricing}`]: {
      padding: theme.spacing(5, 2),
   },

   [`& .${classes.price}`]: {
      fontWeight: theme.typography.fontWeightBold,
   },

   [`& .${classes.perMonth}`]: {
      marginLeft: theme.spacing(1),
   },

   [`& .${classes.cardBody}`]: {
      padding: theme.spacing(5),
   },

   [`& .${classes.cardItem}`]: {
      padding: theme.spacing(1, 0),
   },

   [`& .${classes.premiumItem}`]: {
      color: theme.palette.primary.main,
      position: 'relative',
      '&::after': {
         position: 'absolute',
         content: '"*"',
         top: 0,
         right: -10,
         marginLeft: theme.spacing(1),
      },
   },

   [`& .${classes.successIcon}`]: {
      marginRight: theme.spacing(2),
      color: theme.palette.success.main,
   },

   [`& .${classes.blockIcon}`]: {
      marginRight: theme.spacing(2),
      color: theme.palette.error.main,
   },
}));