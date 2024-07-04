import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar'
import AppRoute from './Routes/AppRoute'
import { UserHolder } from './Context/UserContext'
import Title from './Components/Title'
import Footer from './Components/Footer'


function App() {
  return (
    <>
    <UserHolder>
         <Title/>
         <NavBar/>
         <AppRoute/>
         <Footer/>
   </UserHolder>

    </>
  )
}

export default App
