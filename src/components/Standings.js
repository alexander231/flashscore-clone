import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Grid } from '@mui/material'

const Standings = ({ teams }) => {


    return (
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell align="left">Team</TableCell>
                <TableCell align="right">Played</TableCell>
                <TableCell align="right">Win</TableCell>
                <TableCell align="right">Draw</TableCell>
                <TableCell align="right">Lose</TableCell>
                <TableCell align="right">Goals Difference</TableCell>
                <TableCell align="right">Points</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {teams.map((team) => (
                <TableRow
                key={team.team.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {team.rank}
                </TableCell>
                <TableCell align="right">
                    <Grid container alignContent="center" justifyContent="flex-start" spacing={3}> 
                        <Grid item alignSelf="center">
                            <img src={team.team.logo} height={30} width={30} /> 
                        </Grid>
                 
                        <Grid item alignSelf="center">
                            {team.team.name}
                        </Grid>
                    </Grid>
                </TableCell>
                <TableCell align="right">{team.all.played}</TableCell>
                <TableCell align="right">{team.all.win}</TableCell>
                <TableCell align="right">{team.all.draw}</TableCell>
                <TableCell align="right">{team.all.lose}</TableCell>
                <TableCell align="right">{team.goalsDiff}</TableCell>

                <TableCell align="right">{team.points}</TableCell>


                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
        
}
export default Standings