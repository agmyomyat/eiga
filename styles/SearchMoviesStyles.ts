import { alpha, styled } from '@mui/material/styles';
import {Box} from '@mui/material'

const PREFIX = 'CustomSearchBox';

export const classes = {
   searchContainer: `${PREFIX}-searchContainer`,
   search: `${PREFIX}-search`,
   searchIcon: `${PREFIX}-searchIcon`,
   inputRoot: `${PREFIX}-inputRoot`,
   inputInput: `${PREFIX}-inputInput`,
};

export const StyledBox = styled(Box)(({ theme }) => ({
   [`&.${classes.searchContainer}`]: {
      maxWidth: 400,
      margin: '0 auto',
      padding: theme.spacing(2, 0),
   },

   [`& .${classes.search}`]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
   },

   [`& .${classes.searchIcon}`]: {
      padding: theme.spacing(0.95),
      height: '100%',
      pointerEvents: 'none',
      borderRadius: '0 0.6rem 0.6rem 0px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: '0.5',
      backgroundColor: alpha(theme.palette.common.white, 0.15),
   },

   [`& .${classes.inputRoot}`]: {
      color: 'inherit',
      width: '100%',
   },

   [`& .${classes.inputInput}`]: {
      padding: theme.spacing(1, 2),
      // vertical padding + font size from searchIcon
      transition: theme.transitions.easing.easeIn,
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
         borderColor: theme.palette.primary.main,
      },
   },
}));