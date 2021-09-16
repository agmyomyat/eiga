import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      root: {
         marginBottom: 100,
      },
      selectPlanWrapper: {
         paddingTop: theme.spacing(5),
      },
      selectPlan: {
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
      activePlan: {
         backgroundColor: theme.palette.primary.main,
         color: theme.palette.common.black,
         border: 'none',
      },
      plans: {
         marginTop: theme.spacing(2),
      },
      planHeader: {
         fontWeight: theme.typography.fontWeightBold,
      },
      card: {
         width: 400,
         maxWidth: '80%',
         margin: theme.spacing(3),
         boxShadow: theme.shadows[10],
         borderRadius: theme.shape.borderRadius,
         // backgroundColor: theme.palette.background.paper,
      },
      cardHeader: {
         backgroundColor: theme.palette.primary.main,
         color: theme.palette.common.black,
         padding: theme.spacing(2),
      },
      pricing: {
         padding: theme.spacing(5, 2),
      },
      price: {
         fontWeight: theme.typography.fontWeightBold,
      },
      perMonth: {
         marginLeft: theme.spacing(1),
      },
      cardBody: {
         padding: theme.spacing(5),
      },
      cardItem: {
         padding: theme.spacing(1, 0),
      },
      premiumItem: {
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
      successIcon: {
         marginRight: theme.spacing(2),
         color: theme.palette.success.main,
      },
      blockIcon: {
         marginRight: theme.spacing(2),
         color: theme.palette.error.main,
      },
   });
