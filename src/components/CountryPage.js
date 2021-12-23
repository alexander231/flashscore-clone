import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import footballApi from '../services/footballApi'
import Selector from './Selector'
const CountryPage = () => {
    const [currentLeague, setCurrentLeague] = useState({})
    const [leagues, setLeagues] = useState([])
   
    const params = useParams()
    const countryId = params.countryId
    useEffect(() => {
        const fetchLeagues = async () => {
            const body = await footballApi.getLeagues(countryId)
            const allLeagues = body.response
            setLeagues(allLeagues)
            setCurrentLeague(allLeagues[0])
        }
        fetchLeagues()
    }, [countryId])
    const handleClick = (league) => setCurrentLeague(league)
    console.log(leagues)
    console.log(currentLeague)
    if (leagues.length) {

    
    return (
        <div>
            <Selector options={leagues} handleClick={handleClick}/>
        </div>
    )
    }
    return null
}

export default CountryPage
