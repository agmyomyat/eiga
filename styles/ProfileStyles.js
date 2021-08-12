export const styles = theme => ({
   root: {
      marginTop: theme.spacing(5),
      maxWidth: '700px',
   },
   title: {
      textAlign: 'center',
   },
   card: {
      marginTop: theme.spacing(5),
   },
   label: {
      color: theme.palette.text.secondary,
   },
   item: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
   },
   buttonGroup: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: theme.spacing(3),
   },
});
