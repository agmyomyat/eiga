import { useState, useEffect } from 'react'
import { useRouter, NextRouter } from 'next/router'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { useAuth } from '@contexts/AuthContext'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'

const MobileNavigation: React.FC = () => {
   const { push, pathname }: NextRouter = useRouter()
   const [value, setValue] = useState(pathname)
   const { userData, getUserLoading } = useAuth()

   useEffect(() => {
      const dynamicRoutes = ['/movies/[id]', '/series/[id]']
      if (dynamicRoutes.includes(pathname)) {
         return setValue('/')
      }
      setValue(pathname)
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
            value="/recents"
            icon={<HistoryOutlinedIcon />}
         />
         {userData?.premium || getUserLoading ? (
            <BottomNavigationAction
               label="Favourites"
               value="/favourites"
               icon={<FavoriteBorderOutlinedIcon />}
            />
         ) : (
            <BottomNavigationAction
               label="Pricing"
               value="/pricing"
               icon={<LocalOfferOutlinedIcon />}
            />
         )}
      </BottomNavigation>
   )
}

export default MobileNavigation
