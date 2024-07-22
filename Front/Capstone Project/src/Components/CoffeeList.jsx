import '../index.css'
import { useEffect, useState } from 'react';
import SingleCoffee from './SingleCoffee';
import { useData } from '../Hooks/useData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function CoffeeList() {
const data = useData(`https://api.sampleapis.com/coffee/hot`);
const [currentCoffees, setCurrentCoffees] = useState([]);
useEffect(() => {
setCurrentCoffees(data)
}, [data]
)
console.log(currentCoffees)

return(
<>
 <div className="componentBox background">
    <Row xs={1} md={2} lg={3} className="g-4">
      
       {currentCoffees?.map((coffee,index) => ( 
        <Col key={index}>
      <SingleCoffee name={coffee.title} description={coffee.description} image={coffee.image}></SingleCoffee>
      </Col> ))} </Row>
  </div>
  <div>
    {/* <button onClick={() =>setCurrentCoffees([...Coffees].sort((coffee1,coffee2)=>coffee1.name < coffee2.name ? -1: 1))}>Sort Alphabetically</button>
    <button onClick={() =>setCurrentCoffees([...Coffees].reverse())}>Sort Reversing</button>
    <button onClick={() =>setCurrentCoffees([...Coffees].filter((latinName)=>latinName.startsWith('Panthera')))}>Filter</button> */}
  </div>

</>
)
}

