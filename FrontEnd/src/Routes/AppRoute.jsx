import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CoffeeListPage from '../Pages/CoffeeListPage'
import Home from '../Pages/Home'
import Meals from '../Pages/Meals'
import About from '../Pages/About'
import PageNotFound from '../Components/PageNotFound'
import MealsPageTwo from '../Pages/MealsPageTwo'

export default function AppRoute() {
  return (
        <div>
            <Routes>
                <Route index element={<Home/>} /> 

                <Route path="about" element={<About/>}></Route>
                
                <Route path="coffeelist" element={<CoffeeListPage/>}></Route>
    
                 <Route path="meals" element={<Meals/>}></Route>

                 <Route path="mealstwo" element={<MealsPageTwo/>}></Route>
      
               <Route path="*" element={<PageNotFound/>}/>  
            </Routes>
        </div>
      )
    }

