import { useEffect, useState } from 'react'
import {
   Box,
   FormControl,
   InputLabel,
   NativeSelect,
   Button,
} from '@mui/material'
import { ComponentTvSeriesSeason, ComponentTvSeriesEpisodes } from '@graphgen'

type Episodes = Partial<ComponentTvSeriesEpisodes>
type OmitEpi = Omit<ComponentTvSeriesSeason, 'episodes'>
type Seasons = Partial<OmitEpi & { episodes: Episodes[] }>
interface Iepisodes {
   seasons: Seasons[]
   currentSeason: number
   currentEpisode: number
   handleSelect: (season: number, id: number) => void
}

const Episodes: React.FC<Iepisodes> = ({
   seasons,
   currentSeason,
   currentEpisode,
   handleSelect,
}) => {
   const [season, setSeason] = useState<number>(1)
   useEffect(() => {
      setSeason(currentSeason)
   }, [currentSeason])
   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setSeason(+event.target.value as number)
   }

   return (
      <Box my={2}>
         <FormControl sx={{ my: 2 }}>
            <InputLabel htmlFor="select-season">Season</InputLabel>
            <NativeSelect
               id="select-season"
               value={season}
               onChange={handleChange}
               inputProps={{
                  name: 'season',
                  id: 'select-season',
               }}
            >
               {seasons.map((season, index) => (
                  <option key={season.seasonID} value={index + 1}>
                     Season {season.seasonID}
                  </option>
               ))}
            </NativeSelect>
         </FormControl>
         <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            maxHeight="400px"
            overflow="auto"
            my={2}
         >
            {seasons[season - 1].episodes.map((episode: Episodes, index) => (
               <Episode
                  key={episode.episodeID}
                  id={index + 1}
                  episodeId={episode.episodeID}
                  currentSeason={currentSeason}
                  currentEpisode={currentEpisode}
                  handleSelect={handleSelect}
                  season={season}
               />
            ))}
         </Box>
      </Box>
   )
}

export default Episodes

interface Iepisode {
   id: number
   season: number
   currentSeason: number
   currentEpisode: number
   handleSelect: (season: number, id: number) => void
   episodeId: number
}

export const Episode: React.FC<Iepisode> = ({
   id,
   season,
   handleSelect,
   currentEpisode,
   currentSeason,
   episodeId,
}) => {
   const isSelected = season === currentSeason && id === currentEpisode

   return (
      <Box
         width={1}
         my={1}
         sx={{
            maxWidth: { sm: 250 },
            mr: { sm: 2 },
         }}
      >
         <Button
            sx={{ width: 1 }}
            onClick={() => handleSelect(season, id)}
            variant={isSelected ? 'contained' : 'outlined'}
            color="primary"
         >
            Episode {episodeId}
         </Button>
      </Box>
   )
}
