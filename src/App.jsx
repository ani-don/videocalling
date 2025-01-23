import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './components/Home'
import Navbar from './components/Navbar'
import Videocomp from './components/Videocomp'

const App = () => {
  return (
  <BrowserRouter>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/room/:roomID' element={<Videocomp/>}/>
    <Route path='/'element={<Navbar/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
