import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Adminnavbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Emp App
          </Typography>
          <Link to={'/adminemplist'} style={{color:'white'}}><Button color="inherit" >
         Home</Button></Link>
         <Link to={'/add'} style={{color:'white'}}> <Button color="inherit"         
             
          >Add emp</Button></Link>
         <Link to={'/'} style={{color:'white'}}> <Button color="inherit" onClick={()=>{sessionStorage.removeItem('token')}} >Log out</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Adminnavbar
