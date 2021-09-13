import { useState } from 'react';
import { Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/EpisodesStyles';
import { ComponentTvSeriesSeason, ComponentTvSeriesEpisodes} from '@graphgen'

const useStyles = makeStyles(styles);
type Episodes = Partial<ComponentTvSeriesEpisodes>
type OmitEpi = Omit<ComponentTvSeriesSeason, "episodes">
type Seasons=Partial<OmitEpi & {episodes:Episodes[]}>
// type SSeasons<T extends { [P in keyof OmitEpi]?: OmitEpi[P] }>=T

 

// type Seasons = {
//    __typename?: 'ComponentTvSeriesSeason';
//    seasonID?: number;
//    episodes?: {
//       __typename?: 'ComponentTvSeriesEpisodes';
//       episodeID?: number;
//       freeServer1?: string;
//       freeServer2?: string;
//       vipServer1?: string;
//       vipServer2?: string;
//    }[];
// }[];



interface Iepisodes {
   seasons: Seasons[]
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
   const classes = useStyles();
   const [season, setSeason] = useState<number>(1);

   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setSeason(event.target.value as number);
   };

   return (
      <FormControl className={classes.formControl}>
         <InputLabel id="select-season">Season</InputLabel>
         <Select
            labelId="select-season"
            id="select-season"
            value={season}
            onChange={handleChange}
            label="Age"
         >
            {seasons.map(season => (
               <MenuItem key={season.seasonID} value={season.seasonID}>
                  Season {season.seasonID}
               </MenuItem>
            ))}
         </Select>
         <ul>
            {seasons[season - 1].episodes.map((episode:Episodes) => (
               <Episode
                  key={episode.episodeID}
                  id={episode.episodeID}
                  currentSeason={currentSeason}
                  currentEpisode={currentEpisode}
                  handleSelect={handleSelect}
                  season={season}
               >
                  Season: {season} Episode: {episode.episodeID}
               </Episode>
            ))}
         </ul>
      </FormControl>
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
   return (
      <Button
         onClick={() => handleSelect(season, id)}
         variant={season === currentSeason && id === currentEpisode ? 'contained' : 'outlined'}
         color="primary"
      >
         Season {season} Episode {id}
      </Button>
   );
};