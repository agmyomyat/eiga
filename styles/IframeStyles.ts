import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      container: {
         position: 'relative',
         width: '100%',
         paddingBottom: '56.25%',
         // paddingTop: 25,
         // [theme.breakpoints.up('xl')]: {
         //    maxWidth: 1080,
         //    paddingBottom: 607.5,
         // },
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
      //bread crumbs
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
      divider: {
         marginTop: theme.spacing(2),
      },
      buttonGroup: {
         display: 'inline-block',
         padding: theme.spacing(1, 0),
      },
      button: {
         margin: theme.spacing(2),
         '&:first-child': {
            marginLeft: theme.spacing(0),
         },
      },
   });

   console.log('hello');