import { Theme, createStyles, alpha } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      // mobile

      root: {
         backgroundColor: theme.palette.background.paper,
      },
      mobileGrid: {
         flexWrap: 'nowrap',
         overflowX: 'scroll',
         '-ms-overflow-style': 'none',
         scrollbarWwidth: 'none',
         '&::-webkit-scrollbar': {
            display: 'none',
         },
      },

      // desktop
      button: {
         marginRight: theme.spacing(3),
      },
      filterMenu: {
         display: 'grid',
         gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))',
         columnGap: 20,
         padding: theme.spacing(2),
      },
      menuItem: {
         paddingRight: theme.spacing(3),
         '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.8),
            color: theme.palette.secondary.main,
            borderRadius: theme.shape.borderRadius,
         },
      },
   });
