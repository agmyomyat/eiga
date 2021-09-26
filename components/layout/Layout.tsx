import { styled } from '@mui/material/styles'

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

         <div className={classes.offset}></div>
         {/* offset will delete later */}
         {children}
         <MobileNavigation />
      </Root>
   )
}

export default Layout
