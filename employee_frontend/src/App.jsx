import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './comoponents/Login'



import Emp from './comoponents/Emp'
import Addemp from './comoponents/Addemp'
import Signup from './comoponents/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Adminnavbar from './comoponents/Adminnavbar'
import Main from './comoponents/Main'
import Adminemplist from './comoponents/Adminemplist'

// import Main from './components/Main'

function App() {
  const [data, setData] = useState(0)

  return (
    <>
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      {/* <Route path='/blogs' element={<Main child={<Blogs/>}/>}></Route>

      <Route path='/addblog' element={<Main child={<AddBlog/>}/>}></Route> */}
       <Route path='/list' element={<Emp/>}></Route>
       {/* <Route path='/add' element={<Main subchild={<Emp/>}/>}></Route> */}
       <Route path='/add' element={<Main child={<Addemp/>}/>}></Route>
       <Route path='/adminemplist' element={<Main child={<Adminemplist/>}/>}></Route>
      </Routes>
      </BrowserRouter>
       </>
  )
}

export default App
