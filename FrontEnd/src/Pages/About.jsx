import React from 'react'
import OurStory from '../Components/OurStory'
import AboutConainer from '../Components/AboutContainer'
import ContainerComponent from '../Components/ContainerComponent'

export default function About() {
  return (
    <div>
      <ContainerComponent>
        <OurStory></OurStory>
        <AboutConainer></AboutConainer>
       </ContainerComponent>

    </div>
  )
}
