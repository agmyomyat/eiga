export const styles = theme => ({
   root: {
      padding: theme.spacing(0, 3),
      [theme.breakpoints.only('xs')]: {
         padding: theme.spacing(0, 1),
      },
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
