import { useState } from 'react'
import { useRouter, NextRouter } from 'next/router'
import { BottomNavigation, BottomNavigationAction, Hidden } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'

const MobileNavigation: React.FC = () => {
   const { push, pathname }: NextRouter = useRouter()
   const dynamicRoutes = ['/movies/[id]', '/series/[id]']
   const [value, setValue] = useState(
      dynamicRoutes.includes(pathname) ? '/' : pathname
   )

   console.log('route check', dynamicRoutes.includes(pathname))

   return (
      <BottomNavigation
         value={value}
         onChange={(_event, newValue) => {
            setValue(newValue)
            push({ pathname: newValue })
         }}
         showLabels
         sx={{
            display: {
               xs: 'flex',
               sm: 'none',
            },
            position: 'fixed',
            bottom: 0,
            left: 0,
            backgroundColor: 'secondary.main',
            width: '100%',
            height: 'auto',
            pt: 0.5,
            pb: 3,
         }}
      >
         <BottomNavigationAction
            label="Home"
            value="/"
            icon={<HomeOutlinedIcon />}
         />
         <BottomNavigationAction
            label="Browse"
            value="/browse"
            icon={<ExploreOutlinedIcon />}
         />
         <BottomNavigationAction
            label="Favorites"
            value="/pricing"
            icon={<FavoriteBorderOutlinedIcon />}
         />
         <BottomNavigationAction
            label="Profile"
            value="/profile"
            icon={<AccountCircleOutlinedIcon />}
         />
      </BottomNavigation>
   )
}

export default MobileNavigation
