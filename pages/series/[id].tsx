import { useState, useEffect } from 'react'
import { initializeApollo } from '@apollo/index'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
   GetSeriesDocument,
   GetSeriesQuery,
   GetSeriesQueryResult,
   Movies,
} from '@graphgen'
import { useRouter, NextRouter } from 'next/router'
import { Box, Divider, Container } from '@mui/material'
import MovieInfo from '@components/movies/MovieInfo'
import Iframe from '@components/movies/Iframe'
import Episodes from '@components/movies/Episodes'
import { useAuth } from '@contexts/AuthContext'
import { useApolloClient } from '@apollo/client'
import useUpdateHistory from '@contexts/share-hooks/useUpdateHistory'
import useResumeMovie from '@contexts/share-hooks/useResumeMovie'
import useFavouriteMovie from '@contexts/share-hooks/useFavouriteMovie'
import DynamicSkeleton from '@components/skeleton/DynamicSkeleton'
import IframeSkeleton from '@components/skeleton/IframeSkeleton'
import EpisodesSkeleton from '@components/skeleton/EpisodesSkeleton'
import MovieInfoSkeleton from '@components/skeleton/MovieInfoSkeleton'

const client = initializeApollo()

interface PageProps {
   data: GetSeriesQuery
}

export default function SeriesPage(props: PageProps) {
   // const theme = useTheme();
   // const isMobile = useMediaQuery(theme.breakpoints.only('xs'));
   // const containerRef = useRef(null);
   const client = useApolloClient()
   const { userData, getUserLoading } = useAuth()
   const router: NextRouter = useRouter()
   const [currentServer, setCurrentServer] = useState<string | null>(null)
   const [loading, setLoading] = useState<boolean>(true)
   const { id } = router.query
   const serverResult = props.data
   const seriesData = serverResult?.getMovie
   const [currentSeason, setCurrentSeason] = useState<number>(1)
   const [currentEpisode, setCurrentEpisode] = useState<number>(1)
   const seasons = seriesData?.tv_sery.season
   const servers = seasons?.[currentSeason - 1].episodes?.[currentEpisode - 1]

   function changeServer(server: string) {
      setCurrentServer(server)
      setLoading(server !== currentServer)
   }

   function iframeLoad(prop: boolean) {
      setLoading(prop)
   }
   const { updateHistoryData } = useUpdateHistory(
      {
         movieId: JSON.parse(seriesData?.id || null),
         movieUuid: seriesData?.uuid,
         season: currentSeason,
         episode: currentEpisode,
      },
      userData?.premium || null,
      currentServer
   )
   const { getHistoryData } = useResumeMovie({
      userId: userData?.userId,
      season: currentSeason,
      episode: currentEpisode,
   })

   const {
      favouriteMovieData,
      isDisabled,
      handleAddFavourite,
      handleDeleteFavourite,
   } = useFavouriteMovie(
      {
         movieId: seriesData?.id,
         userId: userData?.userId,
      },
      userData?.premium,
      router
   )

   useEffect(() => {
      if (getHistoryData && getHistoryData.watchHistories.length) {
         console.log('history', getHistoryData)
         setCurrentEpisode(getHistoryData.watchHistories[0].episode)
         setCurrentSeason(getHistoryData.watchHistories[0].season)
      }
   }, [getHistoryData])
   console.log('Update History data', updateHistoryData)

   useEffect(() => {
      // console.log('user', premiumUser);
      // console.log('fallback', router.isFallback);
      if (!router.isFallback && userData?.premium) {
         return setCurrentServer(servers.vipServer1)
      } else if (!router.isFallback && !userData?.premium) {
         return setCurrentServer(servers.freeServer1)
      } else {
         return
      }
   }, [
      router.isFallback,
      servers?.vipServer1,
      servers?.freeServer1,
      router.query.id,
      client,
      userData?.premium,
   ])

   const handleSelect = (season: number, id: number) => {
      setCurrentSeason(season)
      setCurrentEpisode(id)
   }

   console.log('seriesData', seriesData)

   return (
      <Container sx={{ mb: '100px' }}>
         {router?.isFallback || getUserLoading ? (
            <DynamicSkeleton>
               <IframeSkeleton />
               <EpisodesSkeleton />
               <MovieInfoSkeleton />
            </DynamicSkeleton>
         ) : (
            <Box>
               <Iframe
                  currentServer={currentServer}
                  loading={loading}
                  setLoading={iframeLoad}
                  id={id}
                  freeServer1={servers.freeServer1}
                  freeServer2={servers.freeServer2}
                  vipServer1={servers.vipServer1}
                  vipServer2={servers.vipServer2}
                  changeServer={changeServer}
                  premiumUser={userData?.premium}
                  isSeries={seriesData?.isSeries}
               />
               <Divider />
               <Episodes
                  seasons={seasons}
                  currentSeason={currentSeason}
                  currentEpisode={currentEpisode}
                  handleSelect={handleSelect}
               />
               <Divider />
               <MovieInfo
                  movie={seriesData as Partial<Movies>}
                  favouriteData={favouriteMovieData}
                  isDisabled={isDisabled}
                  handleAddFavourite={handleAddFavourite}
                  handleDeleteFavourite={handleDeleteFavourite}
                  currentEpisode={currentEpisode}
                  currentSeason={currentSeason}
               />
               <Divider />
            </Box>
         )}
      </Container>
   )
}

export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: [],
      fallback: true,
   }
}

export const getStaticProps: GetStaticProps = async (context) => {
   const { id } = context.params

   const { data }: Partial<GetSeriesQueryResult> = await client.query({
      query: GetSeriesDocument,
      variables: { uuid: id },
   })

   return {
      props: { data },
   }
}
