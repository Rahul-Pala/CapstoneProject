import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoute from './Routes/AppRoute'
import Title from './Components/Title'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'

function App() {
  

  return (
    <>
     <Title/>
     <NavBar/>
     <AppRoute/>
     <Footer/>
    </>
  )
}

export default App
