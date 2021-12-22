import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import footballApi from './services/footballApi'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const handleChange = (event) => {
        if (event.target.value === '')
            setFilteredCountries([...countries]) 
        else 
            setFilteredCountries(countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }
    useEffect(() => {
        const fetchCountries = async () => {
            const body = await footballApi.getCountries()
            const allCountries = body.response.filter(country => country.name !== 'World')
            setCountries(allCountries)
            setFilteredCountries(allCountries)
        }
        fetchCountries()
    }, [])

    if (countries.length !== 0)
    return (
       
        <Grid container direction="column" spacing={10} justifyContent="center" alignItems="center">
            <Grid item>
                <Link to="/home">Home</Link>
            </Grid>
            <Header handleChange = {handleChange}/>
            <Body countries={filteredCountries}/>
            <Footer/>
            <Outlet/>
        </Grid>
        
    )
    return null
}

export default App
