import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoute from './Routes/AppRoute'
import Title from './Components/Title'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import { UserHolder } from './Context/UserContext'

function App() {
  

  return (
    <>
     <Title/>
     <UserHolder>
     <NavBar/>
     <AppRoute/>
     </UserHolder>
     <Footer/>
    </>
  )
}

export default App
