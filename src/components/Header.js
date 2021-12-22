import React from 'react'
import { Grid } from '@mui/material'
import Filter from './Filter'
const Header = ({ handleChange }) => {
    return (
        <Grid item>

       
        <Filter handleChange={handleChange}/>
        </Grid>
    )
}

export default Header
