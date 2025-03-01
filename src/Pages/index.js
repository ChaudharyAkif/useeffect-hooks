import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Fortened/Home'
import About from './Fortened/About'
import Navbar from '../Compents/Header/Navbar'
import Login from './Auth/Login/Index'
import Media from './Fortened/Media'
import Table from './Fortened'

const Index = () => {
  return (
<>
<Navbar/>
<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/login' element={<Login />} />
    <Route path='/Media' element={<Media />} />
    <Route path='/table' element={<Table />} />
    <Route path='*' element={<h1>Page Not Found</h1>} />
</Routes>
</>
  )
}

export default Index
