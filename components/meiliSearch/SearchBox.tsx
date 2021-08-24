import { connectSearchBox } from 'react-instantsearch-dom';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/SearchMoviesStyles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(styles as any);

const SearchBox = ({ currentRefinement, refine }) => {
   const classes = useStyles();

   return (
      <Box className={classes.searchContainer} pb={3}>
         <form
            noValidate
            role="search"
            className={classes.search}
            onSubmit={e => e.preventDefault()}
         >
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
            <div className={classes.searchIcon}>
               <SearchIcon />
            </div>
         </form>
      </Box>
   );
};

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
