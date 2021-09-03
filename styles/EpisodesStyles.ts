import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      formControl: {
         margin: theme.spacing(1),
         minWidth: 120,
      },
   });
