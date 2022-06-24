import { useState } from 'react'
import { Chip, Box, Button, MenuItem } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { alpha, styled } from '@mui/material/styles'
import Menu, { MenuProps } from '@mui/material/Menu'
import { transformLabels } from '@helpers/tranformGenereLabels'

const StyledMenu = styled((props: MenuProps) => (
   <Menu
      id="refinementList-menu"
      keepMounted
      anchorOrigin={{
         vertical: 'top',
         horizontal: 'right',
      }}
      transformOrigin={{
         vertical: 'top',
         horizontal: 'left',
      }}
      {...props}
   />
))(({ theme }) => ({
   '& .MuiList-root': {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))',
      columnGap: 20,
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
   },
   '& .MuiPaper-root': {
      marginLeft: theme.spacing(2),
   },
   '& .MuiMenuItem-root': {
      paddingRight: theme.spacing(3),
      '&:hover': {
         backgroundColor: alpha(theme.palette.secondary.main, 0.8),
         color: theme.palette.primary.main,
         borderRadius: theme.shape.borderRadius,
      },
   },
}))

function CustomRefinementList({ name }) {
   const RefinementList = ({ items, refine, isRefined, show }) => {
      const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
      // console.log('items', items)
      const open = Boolean(anchorEl)
      const handleOpen = (
         event: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ): void => {
         setAnchorEl(event.currentTarget)
      }

      const handleClose = () => {
         setAnchorEl(null)
      }

      const handleRefine = (value: string) => {
         // eslint-disable-next-line @typescript-eslint/no-extra-semi
         ;(refine as (value: string) => void)(value)
         setAnchorEl(null)
      }

      const MobileFilter = (
         <>
            {show &&
               Object.entries(items as { [s: string]: unknown }).map(
                  ([key], i) => (
                     <Box
                        key={key + i.toString()}
                        sx={{ px: 0.6, display: { sm: 'none' } }}
                     >
                        <Chip
                           color={`${
                              isRefined === `${key}` ? 'primary' : 'default'
                           }`}
                           label={`${transformLabels(key)}`}
                           onClick={() =>
                              (refine as (key: string) => void)(key)
                           }
                        />
                     </Box>
                  )
               )}
         </>
      )

      const DesktopFilter = (
         <Box
            sx={{
               display: {
                  xs: 'none',
                  sm: 'inline-block',
               },
            }}
         >
            <Button
               id="refinement-toggle-button"
               aria-controls="refinement-list"
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
               variant="outlined"
               disableElevation
               sx={{ mr: 2, py: 0.9 }}
               endIcon={<KeyboardArrowDownIcon />}
               onClick={handleOpen}
            >
               {name}
            </Button>
            {/* Will Fix Later */}
            <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
               {Object.entries(items as { [s: string]: unknown }).map(
                  ([key]) => (
                     <MenuItem key={key} onClick={() => handleRefine(key)}>
                        {key}
                     </MenuItem>
                  )
               )}
            </StyledMenu>
         </Box>
      )

      return (
         <>
            {MobileFilter}
            {DesktopFilter}
         </>
      )
   }
   const CustomRefinementList = RefinementList
   return CustomRefinementList
}
export default CustomRefinementList
