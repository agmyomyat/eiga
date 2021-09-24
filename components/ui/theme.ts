import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { grey, cyan } from '@mui/material/colors';
import { darkScrollbar } from '@mui/material';

// Create a theme instance.
let theme = createTheme({
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

theme = responsiveFontSizes(theme);

export default theme;
