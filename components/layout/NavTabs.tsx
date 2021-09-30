import { Tabs, Tab, Box } from '@mui/material'
import { navLinks } from '@helpers/navLinks'
import { NextLinkComposed } from '@components/ui/Link'
import { useRouter, NextRouter } from 'next/router'

const NavTabs: React.FC = () => {
   const { pathname }: NextRouter = useRouter()

   return (
      <Box
         sx={{
            display: {
               xs: 'none',
               sm: 'flex',
            },
            mx: 2,
            width: 1,
         }}
      >
         <Tabs value={pathname} aria-label="navigation-tabs">
            {navLinks.map((nav) => (
               <Tab
                  key={nav.title}
                  label={nav.title}
                  value={nav.path}
                  to={{ pathname: nav.path }}
                  component={NextLinkComposed}
                  sx={{
                     px: 1,
                     py: 3,
                  }}
               />
            ))}
         </Tabs>
      </Box>
   )
}

export default NavTabs
