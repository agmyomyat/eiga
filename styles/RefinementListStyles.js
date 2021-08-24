export const styles = theme => ({
   grid: {
      [theme.breakpoints.between('xs', 'sm')]: {
         flexWrap: 'nowrap',
         overflowX: 'scroll',
         '&::-webkit-scrollbar': {
            display: 'none',
         },
      },
   },
});
