export const styles = theme => ({
   grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px,1fr))',
      gridRowGap: 20,
      gridColumnGap: 15,

      [theme.breakpoints.up('sm')]: {
         gridTemplateColumns: 'repeat(auto-fit, minmax(150px,1fr))',
      },
      [theme.breakpoints.up('md')]: {
         gridTemplateColumns: 'repeat(auto-fit, minmax(170px,1fr))',
      },
      [theme.breakpoints.up('lg')]: {
         gridTemplateColumns: 'repeat(auto-fit, minmax(230px,1fr))',
      },
   },
});
