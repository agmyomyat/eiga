import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      root: {
         margin: theme.spacing(2, 0),
      },
      formControl: {
         margin: theme.spacing(1),
         marginBottom: theme.spacing(2),
         // minWidth: 120,
      },
      episodesContainer: {
         maxHeight: 400,
         overflow: 'auto',
      },
      episode: {
         width: '100%',
         maxWidth: 400,
         margin: theme.spacing(1, 0),
         [theme.breakpoints.up('sm')]: {
            width: '70%',
         },
      },
   });
