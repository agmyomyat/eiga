import { useState, useEffect } from 'react'
import { initializeApollo } from '@apollo/index'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
   GetSeriesDocument,
   GetSeriesQuery,
   GetSeriesQueryResult,
   useGetRelatedMoviesQuery,
   Movies,
} from '@graphgen'
import { useRouter, NextRouter } from 'next/router'
import { Box, Divider, Container } from '@mui/material'
import MovieInfo from '@components/movies/MovieInfo'
import Iframe from '@components/movies/Iframe'
import Episodes from '@components/movies/Episodes'
import { useAuth } from '@contexts/AuthContext'
import useUpdateHistory from '@contexts/share-hooks/useUpdateHistory'
import useResumeMovie from '@contexts/share-hooks/useResumeMovie'
import useFavouriteMovie from '@contexts/share-hooks/useFavouriteMovie'
import DynamicSkeleton from '@components/skeleton/DynamicSkeleton'
import IframeSkeleton from '@components/skeleton/IframeSkeleton'
import EpisodesSkeleton from '@components/skeleton/EpisodesSkeleton'
import MovieInfoSkeleton from '@components/skeleton/MovieInfoSkeleton'
import useUpdateViews from '@contexts/share-hooks/useUpdateViews'
import RelatedMovies from '@components/movies/RelatedMovies'
import RelatedMoviesSkeleton from '@components/skeleton/RelatedMoviesSkeleton'

const client = initializeApollo()

interface PageProps {
   data: GetSeriesQuery
}

export default function SeriesPage(props: PageProps) {
   // const theme = useTheme();
   // const isMobile = useMediaQuery(theme.breakpoints.only('xs'));
   // const containerRef = useRef(null);
   const { data: relatedMoviesData, loading: relatedMoviesLoading } =
      useGetRelatedMoviesQuery()
   const { userData, getUserLoading } = useAuth()
   const router: NextRouter = useRouter()
   const [currentServer, setCurrentServer] = useState<string | null>('')
   const [loading, setLoading] = useState<boolean>(true)
   const { id } = router.query
   const serverResult = props.data
   const seriesData = serverResult?.getMovie
   const [currentSeason, setCurrentSeason] = useState<number>(1)
   const [currentEpisode, setCurrentEpisode] = useState<number>(1)
   const seasons = seriesData?.tv_sery.season
   const servers = seasons?.[currentSeason - 1].episodes?.[currentEpisode - 1]

   useUpdateViews({ uuid: seriesData?.uuid, premiumUser: userData?.premium })

   function changeServer(server: string) {
      setCurrentServer(server)
      setLoading(server !== currentServer)
   }

   function iframeLoad(prop: boolean) {
      setLoading(prop)
   }
   const { getHistoryData, getHistoryLoading } = useResumeMovie({
      userId: userData?.userId,
   })

   const historySeason = getHistoryData?.watchHistories[0]?.season
   const historyEpisode = getHistoryData?.watchHistories[0]?.episode
   const isSameHistoryWithCurrent =
      historySeason === currentSeason && historyEpisode === currentEpisode
   useUpdateHistory(
      {
         // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
         movieId: JSON.parse(seriesData?.id || null),
         movieUuid: seriesData?.uuid,
         season: seasons?.[currentSeason - 1].seasonID,
         episode:
            seasons?.[currentSeason - 1].episodes?.[currentEpisode - 1]
               .episodeID,
      },
      userData?.premium || null
   )

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
         seasons.map((seriesData, index) => {
            if (seriesData.seasonID === getHistoryData.watchHistories[0].season)
               setCurrentSeason(index + 1)
            seriesData.episodes.map((epi, idx) => {
               if (epi.episodeID === getHistoryData.watchHistories[0].episode)
                  setCurrentEpisode(idx + 1)
            })
         })
      }
   }, [getHistoryData, seasons])

   useEffect(() => {
      // console.log('user', premiumUser);
      // console.log('fallback', router.isFallback);
      if (!router.isFallback && userData?.premium) {
         return setCurrentServer(servers.vipServer2)
      }
   }, [router.isFallback, userData?.premium, servers?.vipServer2])

   const handleSelect = (season: number, id: number) => {
      setCurrentSeason(season)
      setCurrentEpisode(id)
      if (currentSeason === season && currentEpisode === id) return
      setCurrentServer(
         userData?.premium ? servers.vipServer1 : servers.freeServer1
      )
   }

   return (
      <Container>
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
                  current_time={getHistoryData?.watchHistories[0]?.current_time}
                  getHistoryLoading={getHistoryLoading}
                  loading={loading}
                  setLoading={iframeLoad}
                  id={id}
                  movieName={seriesData?.uuid}
                  vipServer2={servers.vipServer2}
                  changeServer={changeServer}
                  premiumUser={userData?.premium}
                  isSeries={seriesData?.isSeries}
                  premiumOnly={seriesData?.premiumOnly}
                  isSameHistoryAndCurrent={isSameHistoryWithCurrent}
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
                  premium={userData?.premium}
               />
               <Divider />
               {relatedMoviesLoading ? (
                  <RelatedMoviesSkeleton />
               ) : (
                  <RelatedMovies data={relatedMoviesData} />
               )}
            </Box>
         )}
      </Container>
   )
}

// eslint-disable-next-line @typescript-eslint/require-await
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
      props: { data, title: data?.getMovie?.name },
      revalidate: 10,
   }
}
