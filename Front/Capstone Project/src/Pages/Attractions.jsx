import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import MediaCard from '../Components/MediaCard'

export default function Attractions() {
  return (
    <div>
      <h1>Attractions</h1>
      <MediaCard></MediaCard>
    </div>
  )
}
