import React, { useState, useEffect } from 'react'
import { useRouter, NextRouter } from 'next/router'
import SearchBoxComponent from '@components/movies/SearchBoxComponent'
import {
   AppBar,
   Toolbar,
   IconButton,
   Box,
   useScrollTrigger,
   Slide,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import NavTabs from './NavTabs'
import FullScreenSearch from '@components/layout/FullScreenSearch'
import ProfileComponent from '@components/layout/ProfileComponent'
import SearchBoxDropdown from './SearchBoxDropdown'
import NavigationSkeleton from '@components/skeleton/NavigationSkeleton'
import { NextLinkComposed } from '@components/ui/Link'
import Image from 'next/image'
import logo from '../../../public/kassette.png'
import { meiliClient } from '@components/meiliSearch'
import { OptionalMovies } from '@graphgen'
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
   const [searchRes, setSearchRes] = useState<OptionalMovies[] | []>([])
   const [isSearching, setIsSearching] = useState<boolean>(false)
   const keywordIsValid = Boolean(keywords.trim().length > 0)
   const { pathname, push, isFallback }: NextRouter = useRouter()
   const isSearchRoute = pathname === SEARCH_ROUTE
   const [openSearch, setOpenSearch] = useState<boolean>(false)
   const [isTyping, setIsTyping] = useState<boolean>(false)

   // console.log('searchResults', searchResults)

   useEffect(() => {
      if (keywordIsValid) {
         setIsTyping(true)
      }
      const timeout = setTimeout(() => {
         if (keywordIsValid) {
            // searchMovie({
            //    variables: { search: keywords },
            // })
            void meiliClient
               .index('movies')
               .search(keywords, {
                  limit: 5,
               })
               .then((res) => {
                  console.log(res.hits)
                  setSearchRes(res.hits as [])
                  setIsTyping(false)
               })
         }
      }, 500)

      return () => clearTimeout(timeout)
   }, [keywordIsValid, keywords, setSearchRes])

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const results = searchRes
      if (results?.length) {
         void push({
            pathname: `/${results[0].isSeries ? 'series' : 'movies'}/[id]`,
            query: { id: results[0].uuid },
         })
         setKeywords('')
         setOpenSearch(false)
      }
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
      setKeywords('')
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
                  {isFallback ? (
                     <NavigationSkeleton />
                  ) : (
                     <>
                        <Box display="flex" alignItems="center">
                           {/* Logo  */}
                           <Box
                              height={1}
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              sx={{
                                 mr: {
                                    xs: 1,
                                    md: 5,
                                 },
                              }}
                           >
                              <Box
                                 component={NextLinkComposed}
                                 paddingTop={1.5}
                                 to={{ pathname: '/' }}
                              >
                                 <Image
                                    src={logo}
                                    layout="fixed"
                                    width={72.9}
                                    height={50}
                                    alt="logo"
                                    priority
                                    style={{ objectFit: 'cover' }}
                                 />
                              </Box>
                           </Box>

                           <NavTabs />
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
                                    sx={{
                                       display: { xs: 'none', md: 'block' },
                                    }}
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
                                       loading={isTyping}
                                       movies={searchRes}
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
                                       display: {
                                          xs: 'inline-flex',
                                          md: 'none',
                                       },
                                    }}
                                 >
                                    <SearchIcon fontSize="large" />
                                 </IconButton>
                                 <FullScreenSearch
                                    movies={searchRes}
                                    value={keywords}
                                    onChange={handleChange}
                                    onSubmit={handleSubmit}
                                    openSearch={openSearch}
                                    handleSearchClose={handleSearchClose}
                                    loading={isTyping}
                                    show={keywordIsValid}
                                 />
                              </>
                           )}
                           <ProfileComponent />
                        </Box>
                     </>
                  )}
               </Toolbar>
            </AppBar>
         </HideOnScroll>
      </Box>
   )
}

export default MainNavigation
