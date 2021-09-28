import { useState, useEffect } from 'react'
import { useRouter, NextRouter } from 'next/router'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'

const MobileNavigation: React.FC = () => {
   const { push, pathname }: NextRouter = useRouter()
   const [value, setValue] = useState(pathname)

   useEffect(() => {
      const dynamicRoutes = ['/movies/[id]', '/series/[id]']
      if (dynamicRoutes.includes(pathname)) {
         setValue('/')
      }
   }, [pathname])

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
            value="/search"
            icon={<ExploreOutlinedIcon />}
         />
         <BottomNavigationAction
            label="Histroy"
            value="/hisotry"
            icon={<HistoryOutlinedIcon />}
         />
         <BottomNavigationAction
            label="Favorites"
            value="/favorites"
            icon={<FavoriteBorderOutlinedIcon />}
         />
      </BottomNavigation>
   )
}

export default MobileNavigation
