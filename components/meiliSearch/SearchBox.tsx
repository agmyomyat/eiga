import { useEffect, useState } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchBoxProvided } from 'react-instantsearch-core';
import { InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';

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
      <Box maxWidth="400px" my={0} mx="auto" py={2}>
         <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={1}
            component="form"
            noValidate
            role="search"
            onSubmit={handleSubmit}
         >
            <InputBase
               placeholder="Search..."
               sx={{
                  '&.MuiInputBase-root': {
                     color: 'inherit',
                     width: '100%',
                  },
                  '& .MuiInputBase-input': {
                     py: 1,
                     px: 2,
                     transition: 'easing.easeIn',
                     borderRadius: '0.6rem 0px 0px 0.6rem',
                     width: '100%',
                     borderWidth: 2,
                     borderStyle: 'solid',
                     borderColor: alpha('#fff', 0.001),
                     backgroundColor: alpha('#fff', 0.2),
                     '&:hover': {
                        bgcolor: alpha('#fff', 0.3),
                     },
                     '&:focus': {
                        bgcolor: 'secondary.main',
                        borderColor: 'primary.main',
                     },
                  },
               }}
               inputProps={{ 'aria-label': 'search' }}
               value={keywords}
               onChange={e => setKeywords(e.currentTarget.value)}
            />
            <Box
               sx={{
                  padding: 1.2,
                  height: 1,
                  pointerEvents: 'none',
                  borderRadius: '0 0.6rem 0.6rem 0px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: '0.5',
                  backgroundColor: alpha('#fff', 0.15),
               }}
            >
               <SearchIcon />
            </Box>
         </Box>
      </Box>
   );
};

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
