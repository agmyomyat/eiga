import { useState } from 'react';
import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';
import { ComponentTvSeriesSeason, ComponentTvSeriesEpisodes } from '@graphgen';
import { StyledButton, StyledBox, classes } from '@styles/EpisodesStyles';

type Episodes = Partial<ComponentTvSeriesEpisodes>;
type OmitEpi = Omit<ComponentTvSeriesSeason, 'episodes'>;
type Seasons = Partial<OmitEpi & { episodes: Episodes[] }>;
interface Iepisodes {
   seasons: Seasons[];
   currentSeason: number;
   currentEpisode: number;
   handleSelect: (season: number, id: number) => void;
}

const Episodes: React.FC<Iepisodes> = ({
   seasons,
   currentSeason,
   currentEpisode,
   handleSelect,
}) => {
   const [season, setSeason] = useState<number>(1);

   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setSeason(+event.target.value as number);
   };

   return (
      <StyledBox className={classes.root}>
         <FormControl className={classes.formControl}>
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
               {seasons.map(season => (
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
            className={classes.episodesContainer}
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
      </StyledBox>
   );
};

export default Episodes;

interface Iepisode {
   id: number;
   season: number;
   currentSeason: number;
   currentEpisode: number;
   handleSelect: (season: number, id: number) => void;
}

export const Episode: React.FC<Iepisode> = ({
   id,
   season,
   handleSelect,
   currentEpisode,
   currentSeason,
}) => {
   const isSelected = season === currentSeason && id === currentEpisode;
   return (
      <StyledButton
         onClick={() => handleSelect(season, id)}
         variant={isSelected ? 'contained' : 'outlined'}
         color="primary"
         className={classes.episode}
      >
         Episode {id}
      </StyledButton>
   );
};
