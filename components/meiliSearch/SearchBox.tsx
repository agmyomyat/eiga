import { useEffect, useState } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchBoxProvided } from 'react-instantsearch-core';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledBox, classes } from '@styles/SearchMoviesStyles';

const SearchBox = ({ refine }: SearchBoxProvided) => {
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
      <StyledBox className={classes.searchContainer} pb={3}>
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
      </StyledBox>
   );
};

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
