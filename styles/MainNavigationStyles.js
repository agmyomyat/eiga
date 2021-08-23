export const styles = theme => ({
   root: {
      flexGrow: 1,
   },
   appbar: {
      backgroundColor: 'transparent',
      paddingTop: 10,
   },
   menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
         display: 'none',
      },
   },
   title: {
      flexGrow: 1,
      flexShrink: 0,
      marginRight: theme.spacing(2),
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
