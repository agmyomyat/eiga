import { styled } from '@mui/material/styles';

const PREFIX = 'Iframe';

export const classes = {
   container: `${PREFIX}-container`,
   loadingIcon: `${PREFIX}-loadingIcon`,
   iframe: `${PREFIX}-iframe`,
   breadcrumbs: `${PREFIX}-breadcrumbs`,
   breadItem: `${PREFIX}-breadItem`,
   divider: `${PREFIX}-divider`,
   buttonGroup: `${PREFIX}-buttonGroup`,
   button: `${PREFIX}-button`,
};

export const Root = styled('div')(({ theme }) => ({
   [`& .${classes.container}`]: {
      position: 'relative',
      width: '100%',
      paddingBottom: '56.25%',
      // paddingTop: 25,
      // [theme.breakpoints.up('xl')]: {
      //    maxWidth: 1080,
      //    paddingBottom: 607.5,
      // },
   },

   [`& .${classes.loadingIcon}`]: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1000,
   },

   [`& .${classes.iframe}`]: {
      position: 'absolute',
      top: 0,
      left: 0,
      border: 0,
      width: '100%',
      height: '100%',
   },

   //bread crumbs
   [`& .${classes.breadcrumbs}`]: {
      margin: theme.spacing(1, 0),
      padding: theme.spacing(2, 0),
      [theme.breakpoints.only('xs')]: {
         padding: theme.spacing(0.5, 0),
      },
   },

   [`& .${classes.breadItem}`]: {
      [theme.breakpoints.only('xs')]: {
         fontSize: theme.typography.caption.fontSize,
      },
   },

   [`& .${classes.divider}`]: {
      marginTop: theme.spacing(2),
   },

   [`& .${classes.buttonGroup}`]: {
      display: 'inline-block',
      padding: theme.spacing(1, 0),
   },

   [`& .${classes.button}`]: {
      margin: theme.spacing(2),
      '&:first-child': {
         marginLeft: theme.spacing(0),
      },
   },
}));
