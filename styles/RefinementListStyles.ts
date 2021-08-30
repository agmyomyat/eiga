import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      root: {
         backgroundColor: theme.palette.background.paper,
      },
      grid: {
         [theme.breakpoints.between('xs', 'sm')]: {
            flexWrap: 'nowrap',
            overflowX: 'scroll',
            '-ms-overflow-style': 'none',
            scrollbarWwidth: 'none',
            '&::-webkit-scrollbar': {
               display: 'none',
            },
         },
      },
   });
