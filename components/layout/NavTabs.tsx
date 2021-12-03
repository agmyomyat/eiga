import { Tabs, Tab, Box, useMediaQuery } from '@mui/material'
import { navLinks } from '@helpers/navLinks'
import { NextLinkComposed } from '@components/ui/Link'
import { useRouter, NextRouter } from 'next/router'
import { ThemeProvider, useTheme } from '@mui/material/styles'
import theme from '@components/ui/theme'
import { useAuth } from '@contexts/AuthContext'

const NavTabsComponent: React.FC = () => {
   const { pathname }: NextRouter = useRouter()
   const { userData, getUserLoading } = useAuth()
   const theme = useTheme()
   const matches = useMediaQuery(theme.breakpoints.up('sm'))
   const newNavLinks = navLinks.map((nav) => {
      if (nav.path === '/favourites') {
         return userData?.premium || getUserLoading
            ? nav
            : { title: 'Pricing', path: '/pricing' }
      }
      return nav
   })

   const value =
      newNavLinks.map((nav) => nav.path).includes(pathname) && matches
         ? pathname
         : false

   return (
      <Box
         sx={{
            mx: 1,
            width: 1,
         }}
      >
         <Tabs
            value={value}
            aria-label="navigation-tabs"
            sx={{
               display: {
                  xs: 'none',
                  sm: 'flex',
               },
            }}
         >
            {newNavLinks.map((nav) => (
               <Tab
                  key={nav.title}
                  label={nav.title}
                  value={nav.path}
                  to={{ pathname: nav.path }}
                  component={NextLinkComposed}
                  sx={{
                     px: 0,
                     py: 3,
                  }}
               />
            ))}
         </Tabs>
      </Box>
   )
}

export default function NavTabs() {
   return (
      <ThemeProvider theme={theme}>
         <NavTabsComponent />
      </ThemeProvider>
   )
}
