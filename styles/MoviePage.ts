import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      root: {
         padding: theme.spacing(0, 3),
         [theme.breakpoints.only('xs')]: {
            padding: theme.spacing(0, 1),
         },
      },
      button: {
         margin: theme.spacing(1),
      },
      breadcrumbs: {
         margin: theme.spacing(1, 0),
         padding: theme.spacing(2, 0),
         [theme.breakpoints.only('xs')]: {
            padding: theme.spacing(0.5, 0),
         },
      },
      breadItem: {
         [theme.breakpoints.only('xs')]: {
            fontSize: theme.typography.caption.fontSize,
         },
      },
   });
