import axios from 'axios'
const baseUrl = 'http://localhost:3001/api'

const getCountries = async () => {
    const response = await axios.get(`${baseUrl}/countries`)
    return response.data
}

const getLeagues = async (country) => {
    const response = await axios.get(`${baseUrl}/leagues/${country}`)
    return response.data
}

const getStandings = async (season, league) => {
    const params = { season, league }
    const response = await axios.get(`${baseUrl}/standings`, { params })
    return response.data
}

const getFixtures = async (season, league) => {
    const params = { season, league }
    const response = await axios.get(`${baseUrl}/fixtures`, { params })
    return response.data
}

export default {
    getCountries,
    getLeagues,
    getStandings, 
    getFixtures
}