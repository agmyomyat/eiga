import { useState } from 'react'
import {
   Box,
   FormControl,
   InputLabel,
   NativeSelect,
   Button,
} from '@mui/material'
import { ComponentTvSeriesSeason, ComponentTvSeriesEpisodes } from '@graphgen'
import { styled } from '@mui/material/styles'

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
               {seasons.map((season) => (
                  <option key={season.seasonID} value={season.seasonID}>
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
            {seasons[season - 1].episodes.map((episode: Episodes) => (
               <Episode
                  key={episode.episodeID}
                  id={episode.episodeID}
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
}

export const Episode: React.FC<Iepisode> = ({
   id,
   season,
   handleSelect,
   currentEpisode,
   currentSeason,
}) => {
   const isSelected = season === currentSeason && id === currentEpisode

   const StyledButton = styled(Button)(({ theme }) => ({
      width: '100%',
      margin: theme.spacing(1, 0),
      [theme.breakpoints.up('sm')]: {
         width: '70%',
         maxWidth: 250,
         marginRight: theme.spacing(2),
      },
   }))
   return (
      <StyledButton
         onClick={() => handleSelect(season, id)}
         variant={isSelected ? 'contained' : 'outlined'}
         color="primary"
      >
         Episode {id}
      </StyledButton>
   )
}
