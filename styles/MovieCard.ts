import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const PREFIX = 'Movie'

export const classes = {
   skeletonImage: `${PREFIX}-skeletonImage`,
   media: `${PREFIX}-media`,
}

export const StyledBox = styled(Box)(() => ({
   [`& .${classes.skeletonImage}`]: {
      paddingBottom: '150%',
   },

   [`& .${classes.media}`]: {
      position: 'relative',
      opacity: '1',
      transition: '0.3s',
      '&:hover': {
         opacity: '0.5',
      },
   },
}))
