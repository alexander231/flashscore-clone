import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import footballApi from '../services/footballApi'

const CountryPage = () => {
    const [leagues, setLeagues] = useState([])
    const params = useParams()
    const countryId = params.countryId
    useEffect(() => {
        const fetchLeagues = async (country) => {
            const body = await footballApi.getLeagues(country)
            const allLeagues = body.response
            setLeagues(allLeagues)
        }
        fetchLeagues(countryId)
    }, [])
 
    console.log(leagues)
    return (
        <div>
            Cox
        </div>
    )
}

export default CountryPage
