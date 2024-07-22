import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div>
       <h1>Oops... Page Not Found</h1> 
       <p>Please click <Link to="/"> <a href='http://localhost:5173/'></a></Link> to go to Home Page</p>
     
    </div>
  )
}
