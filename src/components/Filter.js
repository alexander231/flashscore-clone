import React from 'react'
import { TextField } from '@mui/material'
const Filter = ({ handleChange }) => {
    
    return (
        <TextField onChange={handleChange} id="standard-basic" label="country" variant="standard" />
    )
}

export default Filter
