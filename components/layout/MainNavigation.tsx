import React, { useState, useEffect } from 'react'
import { useRouter, NextRouter } from 'next/router'
import SearchBoxComponent from '@components/movies/SearchBoxComponent'
import {
   AppBar,
   Toolbar,
   IconButton,
   Typography,
   Box,
   useScrollTrigger,
   Slide,
   Stack,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

import Link from '../ui/Link'
import { styled } from '@mui/material/styles'
import { navLinks } from '@helpers/navLinks'
import FullScreenSearch from '@components/layout/FullScreenSearch'
import ProfileComponent from '@components/layout/ProfileComponent'
import SearchBoxDropdown from './SearchBoxDropdown'
import { useSearchMovieLazyQuery } from '@graphgen'
import { Movies } from '@graphgen'

interface IhideOnScroll {
   children: React.ReactElement
}

function HideOnScroll({ children }: IhideOnScroll) {
   const trigger = useScrollTrigger()

   return (
      <Slide appear={false} direction="down" in={!trigger}>
         {children}
      </Slide>
   )
}

const SEARCH_ROUTE = '/search'

const PREFIX = 'MainNavigation'

const classes = {
   root: `${PREFIX}-root`,
   active: `${PREFIX}-active`,
}

const StyledBox = styled(Box)(({ theme }) => ({
   [`&.${classes.root}`]: {
      flexGrow: 1,
      marginBottom: theme.spacing(3),
   },
   [`& .${classes.active}`]: {
      color: theme.palette.primary.main,
      '&::after': {
         width: '100%',
         transition: theme.transitions.create('width', {
            duration: theme.transitions.duration.shortest,
         }),
      },
   },
}))

const MainNavigation: React.FC = () => {
   const [keywords, setKeywords] = useState<string>('')
   const [searchMovie, { data: searchResults }] = useSearchMovieLazyQuery()
   const [isSearching, setIsSearching] = useState<boolean>(false)
   const keywordIsValid = Boolean(keywords.trim().length > 0)
   const { pathname }: NextRouter = useRouter()
   const isSearchRoute = pathname === SEARCH_ROUTE
   const [openSearch, setOpenSearch] = useState<boolean>(false)

   useEffect(() => {
      const timeout = setTimeout(() => {
         if (keywordIsValid) {
            console.log('searching')
            searchMovie({
               variables: { search: keywords },
            })
         }
      }, 500)
      return () => clearTimeout(timeout)
   }, [searchMovie, keywordIsValid, keywords])

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
   }

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeywords(e.currentTarget.value)
   }

   const handleFocus = () => {
      setIsSearching(true)
   }

   const handleBlur = () => {
      setKeywords('')
      setIsSearching(false)
   }

   const handleSearchOpen = () => {
      setOpenSearch(true)
   }

   const handleSearchClose = () => {
      setOpenSearch(false)
   }

   return (
      <StyledBox className={classes.root}>
         <HideOnScroll>
            <AppBar
               sx={{
                  color: 'text.primary',
                  bgcolor: (theme) => theme.palette.common.black,
               }}
               elevation={3}
            >
               <Toolbar
                  component="nav"
                  sx={{ alignItems: 'center', justifyContent: 'space-between' }}
               >
                  {/* Title */}
                  <Box display="flex" alignItems="center" mr={5}>
                     <Typography
                        variant="h5"
                        component="h2"
                        noWrap
                        sx={{
                           flexGrow: 1,
                           flexShrink: 0,
                           mr: 2,
                        }}
                     >
                        EIGA
                     </Typography>
                     <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                           display: {
                              xs: 'none',
                              sm: 'flex',
                           },
                           mx: 2,
                        }}
                     >
                        {navLinks.map(({ title, path }, i) => (
                           <Link
                              key={`${title}${i}`}
                              href={path}
                              variant="h6"
                              sx={{
                                 color: (theme) => theme.palette.text.primary,
                                 px: 1,
                                 py: 2,
                                 fontWeight: 'bold',
                                 position: 'relative',
                                 '&:hover': {
                                    color: (theme) =>
                                       theme.palette.primary.main,
                                 },
                                 '&::after': {
                                    position: 'absolute',
                                    content: '""',
                                    bgcolor: (theme) =>
                                       theme.palette.primary.main,
                                    bottom: 0,
                                    left: 0,
                                    width: 0,
                                    height: 2,
                                 },
                              }}
                              underline="none"
                              activeClassName={classes.active}
                           >
                              {title}
                           </Link>
                        ))}
                     </Stack>
                  </Box>
                  {/* Profile avatar */}
                  <Box
                     display="flex"
                     alignItems="center"
                     justifyContent="flex-end"
                     width={1}
                  >
                     {!isSearchRoute && (
                        <>
                           {/* Desktop Search */}
                           <Box
                              width="100%"
                              maxWidth="400px"
                              mr={3}
                              position="relative"
                              sx={{ display: { xs: 'none', md: 'block' } }}
                           >
                              <SearchBoxComponent
                                 value={keywords}
                                 onChange={handleChange}
                                 onSubmit={handleSubmit}
                                 onFocus={handleFocus}
                                 onBlur={handleBlur}
                              />

                              <SearchBoxDropdown
                                 show={
                                    keywordIsValid &&
                                    isSearching &&
                                    searchResults?.search.length > 0
                                 }
                                 movies={searchResults?.search as Movies[]}
                              />
                           </Box>

                           {/* Mobile Search */}
                           <IconButton
                              aria-label="search box"
                              aria-controls="searchbox-appbar"
                              aria-haspopup="true"
                              color="inherit"
                              onClick={handleSearchOpen}
                              sx={{
                                 display: { xs: 'inline-flex', md: 'none' },
                              }}
                           >
                              <SearchIcon fontSize="large" />
                           </IconButton>
                           <FullScreenSearch
                              movies={searchResults?.search as Movies[]}
                              value={keywords}
                              onChange={handleChange}
                              openSearch={openSearch}
                              handleSearchClose={handleSearchClose}
                              show={keywordIsValid}
                           />
                        </>
                     )}
                     <ProfileComponent />
                  </Box>
               </Toolbar>
            </AppBar>
         </HideOnScroll>
      </StyledBox>
   )
}

export default MainNavigation
