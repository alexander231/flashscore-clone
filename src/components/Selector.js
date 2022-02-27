import React from 'react'
import { Box, FormControl, Select, MenuItem, Grid, Icon } from "@mui/material"

const Selector = ({ options, handleClickLeague, handleClickSeason, currentLeague, currentSeason }) => {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    }

    return (
    
      <Grid>
        <FormControl style={{ minWidth: 400 }} size="small">
            <Select MenuProps={MenuProps} value = {currentLeague.league.name}>
                {options.map(option => <MenuItem onClick={() => handleClickLeague(option)} key = {option.league.id} value = {option.league.name}>{option.league.name}</MenuItem>)}
            </Select>
        </FormControl>
        <FormControl style={{ minWidth: 400 }} size="small">
            <Select MenuProps={MenuProps} value={currentSeason}>
                {currentLeague.seasons.map(season => <MenuItem onClick={() => handleClickSeason(season.year)} key = {season.year} value = {season.year}>{season.year}</MenuItem>)}
            </Select>
        </FormControl>
      </Grid>
    )

}

export default Selector
