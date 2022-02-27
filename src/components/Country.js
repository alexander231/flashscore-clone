import React from 'react'
import { Card, Typography, CardActionArea, CardContent, CardMedia } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Country = ({ country }) => {
    const navigate = useNavigate()
    
    return (
    <Card style={{ maxWidth: 200 }}>
        <CardActionArea onClick={() => navigate(`/${country.name}`)}> 
            <CardMedia                                                                                                                                                                                                                                                                                                            
              component="img"                                                                                                                                                                                                                                                                                                     
              image={country.flag}
            />
          <CardContent>
            <Typography align="center" gutterBottom variant="h6" component="div">
              {country.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default Country
