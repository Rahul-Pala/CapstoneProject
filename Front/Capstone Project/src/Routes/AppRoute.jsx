import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdventureGalaxy from '../Pages/AdventureGalaxy'
import Attractions from '../Pages/Attractions'
import Rides from '../Pages/Rides'
import Shows from '../Pages/Shows'
import FamilyService from '../Pages/FamilyService'
import Tickets from '../Pages/Tickets'
import About from '../Pages/About'
import ContactUs from '../Pages/ContactUs'
import PageNotFound from '../Pages/PageNotFound'


 export default function AppRoute() {
   return (
         <div>
             <Routes>
                  <Route index element={<AdventureGalaxy/>} />

                  <Route path="attractions" element={<Attractions/>} />
                        
                        
                        <Route path="rides" element={<Rides/>}></Route>
                        
                        
                        <Route path="shows" element={<Shows/>}></Route>
                  
                
                   <Route path="familyservice" element={<FamilyService/>}></Route>
    
                   <Route path="tickets" element={<Tickets/>}></Route>

                   <Route path="about" element={<About/>}></Route> 

                  <Route path="contactus" element={<ContactUs/>}></Route> 
      
                 <Route path="*" element={<PageNotFound/>} /> 
             </Routes>
         </div>
       )
     }

