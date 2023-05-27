import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

 var[nam,setnam]=useState([])
 useEffect(()=>{
   axios.get("https://jsonplaceholder.typicode.com/posts")
   .then((response)=>{
        setnam(response.data)

  })
.catch(err=>console.log(err))
})


  return (
    <div style={{paddingTop:"70px"}} >
        <TableContainer component={Paper}>
            <Table stickyHeader aria-aria-label="sticky table">
                <TableHead >
                    <TableRow>
                        <TableCell  style={{fontSize:"30px"}} align='centre' > ID </TableCell>
                        <TableCell style={{fontSize:"30px"}} align='centre' > TITLE </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {nam.map((value,index)=>{
                        return(
                            <TableRow key={index} >
                                <TableCell align='centre' >{value.id}</TableCell>
                                <TableCell align='centre' >{value.title}</TableCell>
                        </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Home