import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import AttractionCards from '../Components/AttractionCards'

export default function Attractions() {
  return (
    <div>
      <h1 className='heading'>ATTRACTIONS</h1>
      <AttractionCards></AttractionCards>
    </div>
  )
}
