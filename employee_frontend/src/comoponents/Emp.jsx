import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Emp = () => {
const[emp,setEmp]=useState([])
useEffect(()=>{
    axios.get('http://localhost:3000/emp').then((res)=>{
      setEmp(res.data)
    })
   .catch((err)=>{
console.log(err)
   })
  },[])


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
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Emp
