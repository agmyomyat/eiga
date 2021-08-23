import { instantMeiliSearch, InstantMeiliSearchInstance } from '@meilisearch/instant-meilisearch';
import {
   InstantSearch,
   connectSearchBox,
   connectHits,
   connectRefinementList,
} from 'react-instantsearch-dom';
// import './meili.module.scss' //should i delete later?
import Container from '@material-ui/core/Container';
import Movies from '../movies/Movies';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { styles } from '../../styles/searchMoviesStyles';
import InputBase from '@material-ui/core/InputBase';

const searchClient: InstantMeiliSearchInstance = instantMeiliSearch(
   'http://localhost:7700',
   '2e2716d9058e8c26ab4c01f936fd66f16dd5efe785448d2e87bcb53ab9d69588'
);

const useStyles = makeStyles(styles as any);

const Hits = ({ hits }) => {
   return <Movies movies={hits} />;
};

const CustomHits = connectHits(Hits);

const RefinementList = ({ items, refine }) => {
   const theme = useTheme();
   const classes = useStyles();

   return (
      <Grid container spacing={1} className={classes.grid}>
         {items.map(item => (
            <Grid item key={item.label}>
               <Chip
                  label={`${item.label}`}
                  style={{
                     backgroundColor: item.isRefined
                        ? theme.palette.secondary.main
                        : theme.palette.background.paper,
                  }}
                  onClick={() => refine(item.value)}
               />
            </Grid>
         ))}
         {items.map(item => (
            <Grid item key={item.label}>
               <Chip
                  label={`${item.label}`}
                  style={{
                     backgroundColor: item.isRefined
                        ? theme.palette.secondary.main
                        : theme.palette.background.paper,
                  }}
                  onClick={() => refine(item.value)}
               />
            </Grid>
         ))}
      </Grid>
   );
};

const CustomRefinementList = connectRefinementList(RefinementList);

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
   const classes = useStyles();

   console.log(currentRefinement);
   return (
      <form noValidate role="search" className={classes.search} onSubmit={e => e.preventDefault()}>
         <div className={classes.searchIcon}>
            <SearchIcon />
         </div>
         <InputBase
            placeholder="Search..."
            classes={{
               root: classes.inputRoot,
               input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            value={currentRefinement}
            onChange={e => refine(e.currentTarget.value)}
         />
      </form>
   );
};

const CustomSearchBox = connectSearchBox(SearchBox);

export const Search: React.FC = () => (
   <InstantSearch searchClient={searchClient} indexName="movies">
      <Container>
         <CustomSearchBox />
         <CustomRefinementList
            attribute="genres"
            searchable
            operator="and"
            transformItems={items =>
               items.map(item => ({
                  ...item,
                  label: item.label[0].toUpperCase() + item.label.slice(1),
               }))
            }
         />
         <CustomHits />
      </Container>
   </InstantSearch>
);
