import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

// Create a theme instance.
let theme = createTheme({
   palette: {
      mode: 'dark',
      text: {
         secondary: '#A3A3A3',
      },
      primary: {
         main: '#639CD9',
      },
      secondary: {
         main: '#121212',
      },
      info: {
         main: grey[800],
      },
      grey: {
         [700]: grey.A400,
      },
      background: {
         default: '#18191A',
         // paper: grey.A400,
         paper: '#212529',
      },
   },
})

theme = responsiveFontSizes(theme)

export default theme
