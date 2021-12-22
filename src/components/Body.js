import React from 'react'
import { Grid } from '@mui/material'
import Country from './Country'

const Body = ({ countries }) => {
    return (
        <Grid container item direction="row" justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
            <Grid item xs={4} sm={2} />
            <Grid container item direction = "row" spacing = {4} xs={10} sm={8} justifyContent="center" alignItems="center">
                {countries.map(country => <Grid item key = {country.name} ><Country country={country}/></Grid>)}
            </Grid>
            <Grid item xs={4} sm={2} />
        </Grid>
    )
}

export default Body
