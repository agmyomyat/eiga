import { useEffect, useState } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchBoxProvided } from 'react-instantsearch-core';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '@styles/SearchMoviesStyles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(styles);

const SearchBox = ({ refine }: SearchBoxProvided) => {
   const classes = useStyles();
   const [keywords, setKeywords] = useState('');

   useEffect(() => {
      const timeout = setTimeout(() => {
         refine(keywords);
      }, 1000);
      return () => clearTimeout(timeout);
   }, [keywords, refine]);

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      refine(keywords);
   };

   return (
      <Box className={classes.searchContainer} pb={3}>
         <form noValidate role="search" className={classes.search} onSubmit={handleSubmit}>
            <InputBase
               placeholder="Search..."
               classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
               }}
               inputProps={{ 'aria-label': 'search' }}
               value={keywords}
               onChange={e => setKeywords(e.currentTarget.value)}
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
