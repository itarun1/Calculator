import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from './Detail'
import Form from './Form'
import Home from './Home'
import List from './List'

const Routershai = () => {
  return (
    <div>
     
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/add' element={<Form/>}/>
             <Route path='/list' element={<List/>}/>
             <Route path='/list/:id' element={<Detail/>}/>
             
         </Routes>
    
    </div>
  )
}

export default Routershai
