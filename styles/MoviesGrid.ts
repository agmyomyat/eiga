import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
   createStyles({
      root: {
         padding: theme.spacing(2, 0),
      },
      heading: {
         paddingBottom: theme.spacing(3),
      },
      // For Trending Title
      title: {
         fontWeight: theme.typography.fontWeightLight,
         display: 'inline-block',
         position: 'relative',
         '&::before': {
            position: 'absolute',
            content: '""',
            height: '1px',
            width: '70%',
            top: '120%',
            left: 0,
            background: '#343a40',
         },
      },

      // buttonGroup: {
      //     display: 'inline-block',
      //     marginLeft: theme.spacing(3),
      // },
      grid: {
         display: 'grid',
         gridTemplateColumns: 'repeat(auto-fill, minmax(120px,1fr))',
         rowGap: 20,
         columnGap: 15,

         [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px,1fr))',
         },
         [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(170px,1fr))',
         },
         [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(230px,1fr))',
         },
      },
   });
