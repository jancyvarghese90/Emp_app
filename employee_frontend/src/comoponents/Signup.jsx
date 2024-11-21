import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid2'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [users,setUsers]=useState();
  const inputHandler=(e)=>{
    setUsers({...users,[e.target.name]:e.target.value})
  }
  const addHandler=()=>{
    console.log(users)
    axios.post('http://localhost:3000/user/signup',users)
    .then((res)=>{
console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
    
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} style={{marginTop:'10%',width:'50%',marginLeft:'20%'}}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField fullWidth id="name" label="name" variant='outlined' name='name' onChange={inputHandler}/>
        </Grid>
        <Grid size={6}>
        <TextField fullWidth id="email" label="email" variant='outlined' name='email' onChange={inputHandler}/>
        </Grid>
        <Grid size={12}>
        <TextField
        fullWidth
          id="outlined-multiline-flexible"
          label="address"
          multiline
          rows={4}
          name='address' onChange={inputHandler}
        />
        </Grid>
        <Grid size={6}>
        <TextField fullWidth id="phone" label="phonenumber" variant='outlined'name='phonenumber' onChange={inputHandler}/>
        </Grid>
        <Grid size={6}>
        <TextField fullWidth id="password" label="password" variant='outlined'name='password' onChange={inputHandler}/>
        </Grid>
        <Grid size={12}>
        <Button variant='contained' onClick={addHandler}>Signup</Button>
       </Grid>
       <Grid size={12}>
       <Typography style={{color:'darkblue'}}>
       <Link to={'/'}> Already Registered? Please click here </Link></Typography>
       </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Signup
