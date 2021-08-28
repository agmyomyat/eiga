export const styles = theme => ({
   root: {
      maxWidth: 400,
      margin: '0 auto',
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: theme.palette.secondary.main,
      backgroundColor: '1d1e26',
      borderRadius: 20,
      paddingBottom: theme.spacing(5),
   },
   title: {
      color: theme.palette.text.secondary,
      padding: theme.spacing(3, 0),
   },
   pricing: {
      padding: theme.spacing(2, 0),
      paddingBottom: theme.spacing(5),
   },
   priceTitle: {
      fontSize: theme.typography['h3'].fontSize,
   },
});
