import React from 'react'
import Recipelist from '../Components/RecipeList'
import ContainerComponent from '../Components/ContainerComponent'

function Meals() {
  return (
    <>
    <h2 className='h2'>MEAL</h2>
    <br></br>
    <ContainerComponent>
        <Recipelist></Recipelist>
    </ContainerComponent>
    </>
  )
}

export default Meals