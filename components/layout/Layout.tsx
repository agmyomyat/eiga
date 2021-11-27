import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import MobileNavigation from './BottomNavigation'
import MainNavigation from './MainNavigation'

const PREFIX = 'Layout'

const classes = {
   offset: `${PREFIX}-offset`,
}

const Root = styled('div')(({ theme }) => ({
   [`& .${classes.offset}`]: theme.mixins.toolbar,
}))

interface PropsChildren {
   children: React.ReactNode
}

const Layout: React.FC<PropsChildren> = ({ children }) => {
   return (
      <Root>
         <MainNavigation />

         <Box className={classes.offset}></Box>
         {/* offset will delete later */}
         <Box mb="100px">{children}</Box>
         <MobileNavigation />
      </Root>
   )
}

export default Layout
