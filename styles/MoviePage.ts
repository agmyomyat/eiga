import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      root: {
         padding: theme.spacing(0, 3),
         [theme.breakpoints.only('xs')]: {
            padding: theme.spacing(0, 1),
         },
      },
   });
