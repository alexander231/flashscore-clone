import axios from 'axios'
const baseUrl = 'https://api-football-beta.p.rapidapi.com'
const method = 'GET'
const headers = {
    'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
    'x-rapidapi-key': '9d32936546msh32bd09654c154afp19d9e0jsna419f727701b'
}

const optionsCountries = {
    method,
    url: `${baseUrl}/countries`,
    headers
}
const optionsLeagues = {
    method,
    url: `${baseUrl}/leagues`,
    headers
}

const getCountries = async () => {
    const response = await axios.request(optionsCountries)
    return response.data
}

const getLeagues = async (country) => {
    optionsLeagues.params = { country }
    const response = await axios.request(optionsLeagues)
    return response.data
}

export default{
    getCountries,
    getLeagues
}