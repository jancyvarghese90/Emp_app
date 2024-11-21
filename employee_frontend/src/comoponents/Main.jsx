import React from 'react'
import Adminnavbar from './Adminnavbar'


const Main = ({child}) => {
  return (
    <div>
      <Adminnavbar/>
      {child}
     
    </div>

   
  )
}

export default Main
