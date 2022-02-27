import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Route, Routes } from 'react-router-dom'
import footballApi from '../services/footballApi'
import Selector from './Selector'
import Standings from './Standings'
import Results from './Results'
import { Grid, Button, Box, Typography  } from '@mui/material'
const CountryPage = () => {
    
    const [currentLeague, setCurrentLeague] = useState(null)
    const [leagues, setLeagues] = useState([])
    const [currentSeason, setCurrentSeason] = useState(null)
    const [teams, setTeams] = useState([])
    const [fixtures, setFixtures] = useState([])
    const [isLeague, setIsLeague] = useState(null)
    const [showResults, setShowResults] = useState(false)
    const [buttonText, setButtonText] = useState('Show Results')
    const params = useParams()
    const countryId = params.countryId
    useEffect(() => {
        const fetchData = async () => {
            const response = await footballApi.getLeagues(countryId)
            setLeagues(response)
            setCurrentLeague(response[0])
            setCurrentSeason(response[0].seasons[0].year)
            
        }
        fetchData()
       /* const fetchTeams = async () => {
            
            setTeams(response)
        }
        fetchTeams()*/
    }, [countryId])
    useEffect(() => {
     
         const fetchTeams = async () => {
            const responseStandings = await footballApi.getStandings(currentSeason, currentLeague.league.id)
            const responseFixtures = await footballApi.getFixtures(currentSeason, currentLeague.league.id)
            if (responseStandings.length) {
                setTeams(responseStandings[0].league.standings[0])
                setIsLeague(true)
            } else {
                setTeams([])
                setIsLeague(false)
            }
            setFixtures(responseFixtures)
            
        }
        
        if (currentSeason && currentLeague) 
            fetchTeams()
    }, [currentSeason, currentLeague])

    const handleClickLeague = (league) => {
        setCurrentLeague(league)
        setCurrentSeason(league.seasons[0].year)
    }
    const handleClickSeason = (season) => setCurrentSeason(season)
    const handleClickButton = () => {
        if (showResults) {
            setShowResults(false)
            setButtonText('Show Reults')
        }
        else {
            setShowResults(true)
            setButtonText('Show Standings')
        }
            
    }
    console.log(teams)
    console.log(currentLeague)
    if (currentLeague && currentSeason) 
    return (
        <Grid container direction="column" alignItems="center" justifyContent="space-between">
           
                <Grid item>

                    <img src={currentLeague.league.logo} height={200} width={200} />
                    
                    </Grid>
                
                    <Grid item>
                
                <Selector options={leagues} handleClickLeague={handleClickLeague} handleClickSeason={handleClickSeason} currentSeason = {currentSeason} currentLeague={currentLeague}/> 

                    {isLeague ? 
                    
                    <Grid item align="center"> <Button variant="contained" onClick={() => handleClickButton()}>{buttonText}</Button> {showResults ? <Results  fixtures={fixtures}/> : <Standings teams={teams}/> } </Grid>
                   
                   : <Grid item align="center"><Results fixtures={fixtures}/> </Grid>} 
               
                </Grid>
          
        </Grid>
        
        
              
    )
    return null
}

export default CountryPage
