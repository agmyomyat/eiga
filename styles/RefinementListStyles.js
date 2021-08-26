export const styles = theme => ({
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
