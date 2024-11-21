import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Adminemplist = () => {
  const navigate=useNavigate()
  const[emp,setEmp]=useState([])
useEffect(()=>{
    axios.get('http://localhost:3000/emp').then((res)=>{
      setEmp(res.data)
    })
   .catch((err)=>{
console.log(err)
   })
  },[])

  const deleteHandler=((id)=>{
    axios.delete(`http://localhost:3000/emp/remove/${id}`).then((res)=>{
    // console.log(res)
    window.location.reload();
    
    })
    .catch((err)=>{console.log(err)})
      })
    
      function updateHandler(val){
    navigate('/add',{state:{val}})
      }
  return (
    <div>
      <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            
            <TableCell>Name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Phonenumber</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {emp.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.phonenumber}</TableCell>
              <Button variant='contained' color='secondary' style={{marginRight:'5px',marginBottom:'5px'}} onClick={()=>updateHandler(row)}>Update</Button>
              <Button variant='contained' color='error' style={{marginBottom:'5px'}} onClick={()=>deleteHandler(row._id)}>Delete</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Adminemplist

