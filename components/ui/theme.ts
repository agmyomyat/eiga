import { createTheme } from '@material-ui/core/styles';
import { grey, cyan } from '@material-ui/core/colors';

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
         main: '#02a7a7',
      },
      grey: {
         [700]: grey.A400,
      },
      background: {
         default: '#181818',
         // paper: grey.A400,
         paper: '#212529',
      },
   },
});

export default theme;
