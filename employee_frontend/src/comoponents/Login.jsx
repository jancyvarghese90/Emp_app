import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate=useNavigate();
  const [data,setData]=useState({
    email:'',
    password:''
  })
  const inputHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const loginHandler=()=>{
    console.log(data)
    axios.post('http://localhost:3000/user/login',data)
    .then((res)=>{
        alert(res.data.message)
      if(res.data.token){
sessionStorage.setItem('token',res.data.token)

navigate('/list')

      }
     
     if(res.data.admintoken){
        sessionStorage.setItem('admintoken',res.data.admintoken)
       
        navigate('/adminemplist')
     }
    //  else
    //  alert(res.data.message)
    

    })
    .catch((err)=>{
      console.log(err)
    })
    
  }
  return (
    <div style={{margin:'15%'}}>
        <Typography variant='h3'>Blog App Login</Typography><br></br>
      <TextField id="filled-basic" label="email" variant="filled" name='email'onChange={inputHandler}/>
      <br/><br/>
      <TextField id="filled-basic" label="password" variant="filled" name='password'onChange={inputHandler} /><br/><br/>
      <Button variant='contained' onClick={loginHandler}>Login</Button><br></br><br></br>
      <Typography style={{color:'darkblue'}}>
      <Link to={'/signup'}> New User? Please click here </Link></Typography>
      </div>
  )
}

export default Login
