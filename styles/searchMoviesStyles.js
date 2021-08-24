import { alpha } from '@material-ui/core/styles';

export const styles = theme => ({
   searchContainer: {
      maxWidth: 400,
      margin: '0 auto',
   },
   search: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing(2, 0),
      width: '100%',
   },
   searchIcon: {
      padding: theme.spacing(0.95),
      height: '100%',
      height: '100%',
      pointerEvents: 'none',
      borderRadius: '0 0.6rem 0.6rem 0px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: '0.5',
      backgroundColor: alpha(theme.palette.common.white, 0.15),
   },
   inputRoot: {
      color: 'inherit',
      width: '100%',
   },
   inputInput: {
      padding: theme.spacing(1, 2),
      // vertical padding + font size from searchIcon
      transition: theme.transitions.easing.easein,
      borderRadius: '0.6rem 0px 0px 0.6rem',
      // backgroundClip: 'padding-box',
      width: '100%',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: alpha(theme.palette.common.white, 0.001),
      backgroundColor: alpha(theme.palette.common.white, 0.2),
      '&:hover': {
         backgroundColor: alpha(theme.palette.common.white, 0.3),
      },
      '&:focus': {
         backgroundColor: theme.palette.common.black,
         borderColor: theme.palette.secondary.main,
      },
   },
});
