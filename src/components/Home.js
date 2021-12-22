import React from 'react'
import { useParams } from 'react-router-dom'
const Home = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            Cox
        </div>
    )
}

export default Home
