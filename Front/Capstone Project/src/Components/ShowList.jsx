import '../index.css'
import { useEffect, useState } from 'react';
import SingleShow from './SingleShow';
import { useData } from '../Hooks/useData';

export default function ShowList() {
    
const data = useData(``);
const [currentShows, setCurrentShows] = useState([]);
useEffect(() => {
setCurrentShows(data)
}, [data]
)
console.log(currentShows)

return(
<>
 <div className="componentBox background">
    <Row xs={1} md={2} lg={3} className="g-4">
      
       {currentShows?.map((show,index) => ( 
        <Col key={index}>
      <SingleShow name={show.title} description={show.description} image={show.image}></SingleShow>
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

