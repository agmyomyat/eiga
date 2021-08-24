import { createTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
   palette: {
      type: 'dark',
      secondary: {
         main: pink[400],
      },
      background: {
         default: '#121212',
         paper: '#303030',
      },
   },
});

export default theme;
