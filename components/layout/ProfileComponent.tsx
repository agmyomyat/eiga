import { useState } from 'react'
import { NextRouter, useRouter } from 'next/router'
import { useAuth } from '@contexts/AuthContext'
import {
   Box,
   IconButton,
   Typography,
   Menu,
   MenuItem,
   Divider,
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const ProfileComponent: React.FC = () => {
   const [anchorEl, setAnchorEl] = useState<HTMLElement>(null)
   const openMenu = Boolean(anchorEl)

   const { userData, logOut } = useAuth()
   const { push }: NextRouter = useRouter()
   const handleMenu = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ): void => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   const handleViewProfile = () => {
      setAnchorEl(null)
      push('/profile')
   }

   const handleSignOut = async () => {
      await logOut()
   }

   return (
      <Box>
         <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            // size="large"
         >
            <AccountCircle fontSize="large" />
         </IconButton>

         {/* profile menu */}
         <Menu
            sx={{
               '& .MuiPaper-root': {
                  backgroundImage: 'none',
               },
            }}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
            open={openMenu}
            onClose={handleClose}
         >
            <Box
               display="flex"
               flexDirection="column"
               component="li"
               py={1.5}
               px={2}
            >
               {userData?.userName ? (
                  <Box>
                     <Typography
                        variant="subtitle2"
                        component="label"
                        color="textSecondary"
                     >
                        Signed In as
                     </Typography>
                     <Typography variant="body2" component="p">
                        {userData.userName}
                     </Typography>
                  </Box>
               ) : (
                  <Typography
                     variant="subtitle2"
                     component="label"
                     color="textSecondary"
                  >
                     You are not Signed In
                  </Typography>
               )}
            </Box>
            <Divider />
            {userData?.userName ? (
               <Box>
                  <MenuItem
                     sx={{
                        color: 'text.secondary',
                        py: 0.5,
                        px: 3,
                        my: 0.5,
                        fontSize: 'body2.fontSize',
                     }}
                     onClick={handleViewProfile}
                  >
                     <PersonOutlineIcon fontSize="small" /> View Profile
                  </MenuItem>
                  <MenuItem
                     sx={{
                        color: 'text.secondary',
                        py: 0.5,
                        px: 3,
                        my: 0.5,
                        fontSize: 'body2.fontSize',
                     }}
                  >
                     <FavoriteBorderIcon fontSize="small" /> Favourites
                  </MenuItem>
                  <MenuItem
                     sx={{
                        color: 'text.secondary',
                        py: 0.5,
                        px: 3,
                        my: 0.5,
                        fontSize: 'body2.fontSize',
                     }}
                     onClick={handleSignOut}
                  >
                     <ExitToAppIcon fontSize="small" /> Logout
                  </MenuItem>
               </Box>
            ) : (
               <MenuItem
                  sx={{
                     color: 'text.secondary',
                     py: 0.5,
                     px: 3,
                     my: 0.5,
                     fontSize: 'body2.fontSize',
                  }}
                  onClick={handleViewProfile}
               >
                  <ArrowRightAltIcon /> Log In
               </MenuItem>
            )}
         </Menu>
      </Box>
   )
}

export default ProfileComponent
