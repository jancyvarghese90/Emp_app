import { Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid2'
import axios from 'axios';

const Addemp = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const [form,setForm]=useState({
     name:'',
     email:'',
     department:'',
     phonenumber:''
    })
    useEffect((val)=>{
        if(location.state!=null){
      setForm({...form, name:location.state.val.name,email:location.state.val.email,department:location.state.val.department,phonenumber:location.state.val.phonenumber
      })
        }
        else{
          setForm({...form,name:'',email:'',department:'',phonenumber:''})
        }
      },[])

    const inputHandler=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        }

        const addHandler=()=>{
            if(location.state!=null){
              // axios.put(`http://localhost:3000/blog/edit`+location.state.val._id,form).then((res)=>{//this statement will cause error in the code always append id wilth the url
                axios.put(`http://localhost:3000/emp/edit/${location.state.val._id}`,form).then((res)=>{
                alert(res.data)
                // console.log(res.data)
                navigate('/adminemplist')
              }).catch((err)=>{
          console.log(err)
              })
            }
          
            else{
          axios.post('http://localhost:3000/emp/add',form).then((res)=>{
            // alert(res.data)
            console.log(res.data)
            navigate('/adminemplist');
          }).catch((err)=>{
          console.log(err)
            })
          
          
            }}
          
          
        
  return (
    <div>
     <Box sx={{ flexGrow: 1 }} style={{marginTop:'10%',width:'50%',marginLeft:'20%'}}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField fullWidth id="title" label="name" name='name' value={form.name} onChange={inputHandler} variant='outlined'/>
        </Grid> 
        <Grid size={12}>
        <TextField fullWidth id="image" label="email" name='email' value={form.email} onChange={inputHandler} variant='outlined'/>
        </Grid>
        {/* <Grid size={12}>
        <TextField
        fullWidth
          id="outlined-multiline-flexible"
          label="description"
          name='description'
          value={form.description}
          onChange={inputHandler}
          multiline
          rows={4}
        />
        </Grid> */}
         <Grid size={12}>
        <TextField fullWidth id="image" label="department" name='department' value={form.department} onChange={inputHandler} variant='outlined'/>
        </Grid>
        <Grid size={12}>
        <TextField fullWidth id="image" label="phonenumber" name='phonenumber' value={form.phonenumber} onChange={inputHandler} variant='outlined'/>
        </Grid>
       <Grid size={12}>
       {/* <Typography style={{color:'darkblue'}}>
       <Link to={'/'}> Already Registered? Please click here </Link></Typography> */}
       <Button variant='contained' onClick={addHandler}>Add</Button>
       </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Addemp
