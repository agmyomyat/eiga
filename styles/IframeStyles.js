export const styles = theme => ({
   container: {
      position: 'relative',
      width: '100%',

  paddingBottom: '56.25%',
      // paddingTop: 25,
      [theme.breakpoints.up('xl')]: {
         maxWidth: 1920,
         paddingBottom: 1080,
         margin: '0 auto',
      },
   },
   loadingIcon: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1000,
   },
   iframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      border: 0,
      width: '100%',
      height: '100%',
   },
});
