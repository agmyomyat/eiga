export const styles = theme => ({
   root: {
      flexGrow: 1,
      marginBottom: theme.spacing(3),
   },
   appbar: {
      backgroundColor: theme.palette.primary.main,
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
