import { ChangeEventHandler, FormEventHandler } from 'react';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';

interface IcustomSearchBox {
   onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
   value: string;
   onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const CustomSearchBox: React.FC<IcustomSearchBox> = ({ value, onChange, onSubmit }) => {
   return (
      <Box
         display="flex"
         justifyContent="center"
         alignItems="center"
         width={1}
         component="form"
         noValidate
         role="search"
         onSubmit={onSubmit}
      >
         <InputBase
            placeholder="Search"
            sx={{
               '&.MuiInputBase-root': {
                  color: 'inherit',
                  width: '100%',
               },
               '& .MuiInputBase-input': {
                  py: 1,
                  px: 2,
                  transition: theme =>
                     theme.transitions.create('backgroundColor', {
                        duration: theme.transitions.duration.complex,
                     }),
                  borderRadius: '0.6rem 0px 0px 0.6rem',
                  width: '100%',
                  borderWidth: 2,
                  borderStyle: 'solid',
                  borderColor: theme => alpha(theme.palette.common.white, 0.001),
                  bgcolor: theme => alpha(theme.palette.common.white, 0.2),
                  flexGrow: 1,
                  '&:hover': {
                     bgcolor: theme => alpha(theme.palette.common.white, 0.3),
                  },
                  '&:focus': {
                     bgcolor: theme => theme.palette.common.black,
                     borderColor: 'primary.main',
                  },
               },
            }}
            inputProps={{ 'aria-label': 'search' }}
            value={value}
            onChange={onChange}
         />
         <Box
            sx={{
               padding: 1.2,
               pointerEvents: 'none',
               borderRadius: '0 0.6rem 0.6rem 0px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               opacity: '0.5',
               backgroundColor: theme => alpha(theme.palette.common.white, 0.15),
            }}
         >
            <SearchIcon />
         </Box>
      </Box>
   );
};

export default CustomSearchBox;
