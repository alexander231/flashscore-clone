import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import footballApi from './services/footballApi'
import fifa from './images/fifa.png'
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
            const response = await footballApi.getCountries()
            const allCountries = response.map(country => {
                
                if (country.name === 'World') {
                
                    return {...country, flag: fifa}
                }
                return country
            })
            setCountries(allCountries)
            setFilteredCountries(allCountries)
        }
        fetchCountries()
    }, [])

    if (countries.length !== 0)
    return (
       
        <Grid container direction="column" spacing={10} justifyContent="center" alignItems="center">
        
            <Header handleChange = {handleChange}/>
            <Body countries={filteredCountries}/>
            <Footer/>
            <Outlet/>
        </Grid>
        
    )
    return null
}

export default App
