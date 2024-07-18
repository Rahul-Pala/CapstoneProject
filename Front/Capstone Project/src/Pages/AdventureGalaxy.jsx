import React from 'react'
import LoginForm from '../Components/LoginForm'
import { Card, CardMedia } from '@mui/material'

export default function AdventureGalaxy() {
  return (
<>
    {/* <div className='main-container'> </div> */}
    <Card >
      <CardMedia
        sx={{ height: 400 }}
        component="iframe"
        allow="autoPlay"

        src="https://giphy.com/embed/SZHxH9vApgOQFlx4Jc/video"
        
      />
      {/* <div style="width:100%"><div style="height:0;padding-bottom:75%;position:relative;width:100%"><iframe src="https://giphy.com/embed/SZHxH9vApgOQFlx4Jc/video"  */}
      {/* style="left:0;position:absolute;top:0" width="100%"></iframe></div></div> */}
      
      <LoginForm/>
      </Card>
  
</>
  )
}
