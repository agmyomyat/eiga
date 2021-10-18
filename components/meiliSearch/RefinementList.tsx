import { useState, useMemo, useEffect } from 'react'
import { Chip, Box, Grid, Button, MenuItem } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import { alpha, styled } from '@mui/material/styles'
import Menu, { MenuProps } from '@mui/material/Menu'
function CustomRefinementList({ name }) {
   const RefinementList = ({ items, refine, isRefined }) => {
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
         console.log('value is', typeof value)
         refine(value)
         setAnchorEl(null)
      }

      const StyledMobileGrid = styled(Grid)(() => ({
         flexWrap: 'nowrap',
         overflowX: 'scroll',
         msOverflowStyle: 'none',
         scrollbarWidth: 'none',
         '&::-webkit-scrollbar': {
            display: 'none',
         },
      }))

      const MobileFilter = (
         <StyledMobileGrid
            container
            spacing={1}
            sx={{
               display: {
                  xs: 'flex',
                  sm: 'none',
               },
            }}
         >
            {Object.entries(items).map(([key]) => (
               <Grid item key={key}>
                  <Chip
                     color={`${isRefined === `${key}` ? 'primary' : 'default'}`}
                     label={`${key}`}
                     onClick={() => refine(key)}
                  />
               </Grid>
            ))}
         </StyledMobileGrid>
      )

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
               aria-controls="simple-menu"
               aria-haspopup="true"
               variant="contained"
               color="primary"
               size="small"
               sx={{ mr: 3 }}
               startIcon={<FilterListIcon />}
               onClick={handleOpen}
               disableElevation
            >
               {name}
            </Button>
            {/* Will Fix Later */}
            <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
               {Object.entries(items).map(([key]) => (
                  <MenuItem key={key} onClick={() => handleRefine(key)}>
                     {key}
                  </MenuItem>
               ))}
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
