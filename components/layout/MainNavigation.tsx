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
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import NavTabs from './NavTabs'
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

const MainNavigation: React.FC = () => {
   const [keywords, setKeywords] = useState<string>('')
   const [searchMovie, { data: searchResults, loading: queryLoading }] =
      useSearchMovieLazyQuery()
   const [isSearching, setIsSearching] = useState<boolean>(false)
   const keywordIsValid = Boolean(keywords.trim().length > 0)
   const { pathname }: NextRouter = useRouter()
   const isSearchRoute = pathname === SEARCH_ROUTE
   const [openSearch, setOpenSearch] = useState<boolean>(false)
   const [isTyping, setIsTyping] = useState<boolean>(false)

   useEffect(() => {
      if (keywordIsValid) {
         setIsTyping(true)
      }
      const timeout = setTimeout(() => {
         if (keywordIsValid) {
            searchMovie({
               variables: { search: keywords },
            })
            setIsTyping(false)
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
      <Box flexGrow={1} mb={3}>
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

                     {/* will delete now */}
                     <NavTabs />
                     {/* will delete now */}
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
                                 show={keywordIsValid && isSearching}
                                 loading={isTyping || queryLoading}
                                 movies={searchResults?.search as Movies[]}
                                 handleBlur={handleBlur}
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
                              loading={isTyping || queryLoading}
                              show={keywordIsValid}
                           />
                        </>
                     )}
                     <ProfileComponent />
                  </Box>
               </Toolbar>
            </AppBar>
         </HideOnScroll>
      </Box>
   )
}

export default MainNavigation
