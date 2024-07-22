import React from 'react'
import CoffeeList from '../Components/CoffeeList'
import ContainerComponent from '../Components/ContainerComponent'

export default function CoffeeListPage() {
  return (
    <>
    <h2 className='h2'>COFFEE</h2>
    <br></br>
    {/* <ContainerComponent component={<CoffeeList/>}/> */}
    <ContainerComponent>
  <CoffeeList></CoffeeList>
    </ContainerComponent>
    </>
  )
}