import React from 'react'
import Home from '../component/Home'
import About from '../component/About'
import Contact from '../component/Contact'
import Service from '../component/Service'
import NotFound from '../component/NotFound'
import { Route, Routes } from 'react-router'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Home/>}></Route>
            <Route path='/about' element = {<About/>}></Route>
            <Route path='/service' element = {<Service/>}></Route>
            <Route path='/contact' element = {<Contact/>}></Route>
            <Route path='*' element = {<NotFound/>}></Route>
        </Routes>
      
    </div>
  )
}

export default AllRoutes
