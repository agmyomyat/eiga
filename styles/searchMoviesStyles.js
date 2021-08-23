import { alpha } from '@material-ui/core/styles';

export const styles = theme => ({
   //refine
   grid: {
      [theme.breakpoints.between('xs', 'sm')]: {
         flexWrap: 'nowrap',
         overflowX: 'scroll',
         '&::-webkit-scrollbar': {
            display: 'none',
         },
      },
   },

   // search
   search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
         backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      margin: theme.spacing(2, 0),
      maxWidth: 300,
   },
   searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   inputRoot: {
      color: 'inherit',
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: '18ch',
         '&:focus': {
            width: '24ch',
         },
      },
   },
});
