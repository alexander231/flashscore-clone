import React from 'react'
import { Box, FormControl, Select, MenuItem, Grid, Icon } from "@mui/material"

const Selector = ({ options, handleClick }) => {
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
        <FormControl style={{ minWidth: 400 }} size="small">
            <Select MenuProps={MenuProps} defaultValue={options[0].league.name}>
                {options.map(option => <MenuItem onClick={() => handleClick(option)} key = {option.league.id} value = {option.league.name}>{option.league.name}</MenuItem>)}
            </Select>
         </FormControl>
    )

}

export default Selector
