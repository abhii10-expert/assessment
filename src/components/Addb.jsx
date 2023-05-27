import { TextField } from '@mui/material'
import React from 'react'

const Addb = () => {
  return (
    <div style={{paddingTop:'100px'}}>
        <TextField placeholder='Add Blog Name'>  </TextField>
        <br></br>
        <br></br>
        <TextField placeholder='Add Description'> </TextField>
        <br></br>
        <br></br>
        <TextField placeholder='Enter author name' style={{color:"black"}}></TextField>

    </div>
  )
}

export default Addb