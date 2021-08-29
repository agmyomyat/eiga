import { createTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
   palette: {
      type: 'dark',
      text: {
         secondary: '#A3A3A3',
      },
      primary: {
         main: '#121212',
      },
      secondary: {
         main: '#1bccb1',
      },
      background: {
         default: '#181818',
         paper: '#303030',
      },
   },
});

export default theme;
