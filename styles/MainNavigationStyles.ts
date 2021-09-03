import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      root: {
         flexGrow: 1,
         marginBottom: theme.spacing(3),
      },
      appbar: {
         color: theme.palette.text.primary,
         backgroundColor: theme.palette.secondary.main,
         paddingTop: 10,
      },
      // for 4k devices, will fix later
      // toolbar: {
      //    width: '100%',
      //    maxWidth: 1660,
      //    margin: '0 auto',
      // },
      //
      title: {
         flexGrow: 1,
         flexShrink: 0,
         marginRight: theme.spacing(2),
      },
      profileWrapper: {
         padding: theme.spacing(1.5, 2),
      },
      menuItem: {
         color: theme.palette.text.secondary,
         padding: theme.spacing(0.5, 3),
         margin: theme.spacing(0.5, 0),
         fontSize: theme.typography.body2.fontSize,
      },

      drawer: {
         width: 300,
         maxWidth: '40%',
      },
      drawerPaper: {
         width: 300,
         maxWidth: '40%',
      },
      listItems: {
         alignItems: 'center',
         justifyContent: 'center',
      },
   });
