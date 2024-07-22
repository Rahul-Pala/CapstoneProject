import React from 'react'
import RecipeTwo from '../Components/RecipeTwo'
import ContainerComponent from '../Components/ContainerComponent'

export default function MealsPageTwo() {
  return (
    <div>
      <h2 className='h2'>MEALS</h2>
      <br></br>
  <ContainerComponent>
     <RecipeTwo></RecipeTwo>
  </ContainerComponent>
    </div>
  )
}
