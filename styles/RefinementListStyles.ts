import { alpha, styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import { Grid, Box } from '@mui/material';

const PREFIX = 'CustomRefinementList';

export const classes = {
   root: `${PREFIX}-root`,
   mobileGrid: `${PREFIX}-mobileGrid`,
   button: `${PREFIX}-button`,
   paper: `${PREFIX}-paper`,
   filterMenu: `${PREFIX}-filterMenu`,
   menuItem: `${PREFIX}-menuItem`,
};

export const StyledBox = styled(Box)(({ theme }) => ({
   // mobile

   [`&.${classes.root}`]: {
      backgroundColor: theme.palette.background.paper,
   },

   // desktop
   [`& .${classes.button}`]: {
      marginRight: theme.spacing(3),
   },

   [`& .${classes.paper}`]: {
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(2),
   },

   [`& .${classes.filterMenu}`]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))',
      columnGap: 20,
      padding: theme.spacing(2),
   },

   [`& .${classes.menuItem}`]: {
      paddingRight: theme.spacing(10),
      '&:hover': {
         backgroundColor: alpha(theme.palette.secondary.main, 0.8),
         color: theme.palette.primary.main,
         borderRadius: theme.shape.borderRadius,
      },
   },
}));

export const StyledMobileGrid = styled(Grid)(({ theme }) => ({
   [`&.${classes.mobileGrid}`]: {
      flexWrap: 'nowrap',
      overflowX: 'scroll',
      '-ms-overflow-style': 'none',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
         display: 'none',
      },
   },
}));
