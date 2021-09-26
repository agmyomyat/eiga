import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

const PREFIX = 'RelatedMovie'

export const classes = {
   root: `${PREFIX}-root`,
   card: `${PREFIX}-card`,
}

export const StyledGrid = styled(Grid)(({ theme }) => ({
   [`&.${classes.root}`]: {
      cursor: 'pointer',
   },

   [`& .${classes.card}`]: {
      width: '100%',
   },
}))
