import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      root: {
         margin: theme.spacing(2, 0),
      },
      formControl: {
         margin: theme.spacing(2, 0),
         // minWidth: 120,
      },
      episodesContainer: {
         maxHeight: 400,
         overflow: 'auto',
         margin: theme.spacing(2, 0),
      },
      episode: {
         width: '100%',
         margin: theme.spacing(1, 0),
         [theme.breakpoints.up('sm')]: {
            width: '70%',
            maxWidth: 250,
            marginRight: theme.spacing(2),
         },
      },
   });
