import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      root: {
         margin: theme.spacing(2, 0),
      },
      title: {
         fontWeight: theme.typography.fontWeightBold,
      },
      infoWrapper: {
         margin: theme.spacing(2, 0),
      },
      infoSpacer: {
         margin: theme.spacing(0, 1),
      },
      body: {
         [theme.breakpoints.up('sm')]: {
            maxWidth: '90%',
         },
      },
      details: {
         marginTop: theme.spacing(2),
         maxWidth: '50%',
      },
      detailKey: {
         marginRight: theme.spacing(1),
      },
   });
