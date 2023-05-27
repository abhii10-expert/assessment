import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigbar = () => {
  return (
    <div >
        <AppBar>
            <Toolbar>
                <Typography variant='h4' sx = {{ flexGrow: 1}} align='centre ' color='white'> BLOG </Typography>
                <Button variant='contained' align='left' style={{color:"white"}}> <Link to={'/'} style={{textDecoration:"none" ,color:"white"}}>Home</Link></Button>
                <Button variant='contained' align='left' style={{color:"white"}}><Link to={'/add'} style={{textDecoration:"none" ,color:"white"}}>Add Blog</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navigbar