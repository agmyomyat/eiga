import { useState, useEffect, useRef } from 'react';
import { initializeApollo } from '@apollo/index';
import { GetStaticPaths, GetStaticProps } from 'next';
import { GetSeriesDocument, GetSeriesQuery, GetSeriesQueryResult } from '@graphgen';
import { useRouter, NextRouter } from 'next/router';
import { Box, Divider, Container } from '@mui/material';
import DetectOtherLogin from '@components/modals/detectOtherLogin';
import MovieInfo from '@components/movies/MovieInfo';
import Iframe from '@components/movies/Iframe';
import Episodes from '@components/movies/Episodes';
import { useAuth } from '@contexts/AuthContext';
import { useApolloClient } from '@apollo/client';

const client = initializeApollo();

interface PageProps {
   data: GetSeriesQuery;
}

export default function SeriesPage(props: PageProps) {
   // const theme = useTheme();
   // const isMobile = useMediaQuery(theme.breakpoints.only('xs'));
   // const containerRef = useRef(null);
   const client = useApolloClient();
   const { userData, getUserLoading} = useAuth();
   const router: NextRouter = useRouter();
   const [currentServer, setCurrentServer] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const { id } = router.query;
   const serverResult = props.data;
   const seriesData = serverResult?.getMovie;
   const [currentSeason, setCurrentSeason] = useState<number>(1);
   const [currentEpisode, setCurrentEpisode] = useState<number>(1);
   const seasons = seriesData?.tv_sery.season;
   const servers = seasons?.[currentSeason - 1].episodes[currentEpisode - 1];

   function changeServer(server: string) {
      setCurrentServer(server);
      setLoading(server !== currentServer);
   }

   function iframeLoad(prop: boolean) {
      setLoading(prop);
   }

   useEffect(() => {
      // console.log('user', premiumUser);
      // console.log('fallback', router.isFallback);
      if (!router.isFallback && userData?.premium) {
         return setCurrentServer(servers.vipServer1);
      } else if (!router.isFallback && !userData?.premium) {
         return setCurrentServer(servers.freeServer1);
      } else {
         return;
      }
   }, [router.isFallback, servers?.vipServer1, servers?.freeServer1, router.query.id, client, userData?.premium]);

   const handleSelect = (season: number, id: number) => {
      setCurrentSeason(season);
      setCurrentEpisode(id);
   };

   return (
      <Container sx={{ mb: '100px' }}>
         {(router.isFallback || getUserLoading) && <h2>loading</h2>}
         {!router.isFallback && !getUserLoading && (
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
                  name={seriesData.name}
                  release_date={seriesData.release_date}
                  body={seriesData.body}
                  genres={seriesData.genres}
               />
               <Divider />
            </Box>
         )}

      </Container>
   );
}

export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: [],
      fallback: true,
   };
};

export const getStaticProps: GetStaticProps = async context => {
   const { id } = context.params;

   const { data }: GetSeriesQueryResult = await client.query({
      query: GetSeriesDocument,
      variables: { uuid: id },
   });

   return {
      props: { data },
   };
};

