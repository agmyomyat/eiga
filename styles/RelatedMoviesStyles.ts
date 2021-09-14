import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      // grid: {
      //    display: 'grid',
      //    gridTemplateColumns: 'repeat(auto-fill, minmax(120px,1fr))',
      //    rowGap: 15,
      //    columnGap: 8,
      //    [theme.breakpoints.up('sm')]: {
      //       gridTemplateColumns: 'repeat(auto-fill, minmax(80px,1fr))',
      //    },
      //    [theme.breakpoints.up('md')]: {
      //       gridTemplateColumns: 'repeat(auto-fill, minmax(100px,1fr))',
      //    },
      //    [theme.breakpoints.up('lg')]: {
      //       gridTemplateColumns: 'repeat(auto-fill, minmax(170px,1fr))',
      //    },
      // },
      title: {
         margin: theme.spacing(1, 0),
         padding: theme.spacing(2, 0),
      },
   });
