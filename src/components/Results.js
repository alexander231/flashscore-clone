import React from 'react'
import { Grid, Box, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material'
const Results = ({ fixtures }) => {
  console.log(fixtures)
  return (
    <List align= "right" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }}>
      {fixtures.map(fixture => <ListItem key={fixture.fixture.id}>
      <ListItemAvatar align="left">
        <Avatar>
        <img src= {fixture.teams.home.logo} height={40} width={40} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText sx={{mr: 10}} align = "left" primary={fixture.teams.home.name} />

        <Box sx={{ml: 3, mr:3}}align="center">

        <Typography fontFamily="sans-serif">
          {fixture.goals.home} 
               :
          {fixture.goals.home} 
          </Typography>
      </Box>


        
      <ListItemText sx={{ml: 3}}align = "right" primary={fixture.teams.away.name}  />

      <ListItemAvatar sx={{ml: 10}} align="right">
        <Avatar>
        <img src= {fixture.teams.away.logo} height={40} width={40} />


        </Avatar>
      </ListItemAvatar>
    </ListItem>)}
    </List>)
}

export default Results
