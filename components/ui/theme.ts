import { createTheme } from '@mui/material/styles';
import { grey, cyan } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
   palette: {
      mode: 'dark',
      text: {
         secondary: '#A3A3A3',
      },
      primary: {
         main: '#02a7a7',
      },
      secondary: {
         main: '#121212',
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
