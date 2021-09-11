import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      root: {
         [theme.breakpoints.only('xs')]: {
            padding: theme.spacing(0, 2),
         },
         marginBottom: 100,
      },
   });
