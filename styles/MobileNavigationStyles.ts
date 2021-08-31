import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      root: {
         position: 'fixed',
         bottom: 0,
         left: 0,
         backgroundColor: theme.palette.primary.main,
         width: '100%',
         height: 'auto',
         paddingTop: theme.spacing(0.5),
         paddingBottom: theme.spacing(3),
      },
      item: {
         '&$selected': {
            color: theme.palette.secondary.main,
         },
      },
      selected: {},
   });
