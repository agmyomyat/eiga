import { useState } from 'react'
import { connectMenu } from 'react-instantsearch-dom'
import { MenuProvided } from 'react-instantsearch-core'
import { Chip, Box, Grid, Button, MenuItem } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import { alpha, styled } from '@mui/material/styles'
import Menu, { MenuProps } from '@mui/material/Menu'

const RefinementList = ({ items, refine }: MenuProvided) => {
   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
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
         {items.map((item) => (
            <Grid item key={item.label}>
               <Chip
                  color={`${item.isRefined ? 'primary' : 'default'}`}
                  label={`${item.label}`}
                  onClick={() => refine(item.value)}
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
            Filter
         </Button>
         {/* Will Fix Later */}
         <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {items.map((item) => (
               <MenuItem
                  key={item.label}
                  onClick={() => handleRefine(item.value)}
               >
                  {item.label}
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

const CustomRefinementList = connectMenu(RefinementList)

export default CustomRefinementList
