import '../index.css'
import { useEffect, useState } from 'react';
import SingleRide from './SingleRide';
import { useData } from '../Hooks/useData';

export default function RideList() {
    
const data = useData(``);
const [currentRides, setCurrentRides] = useState([]);
useEffect(() => {
setCurrentRides(data)
}, [data]
)
console.log(currentRides)

return(
<>
 <div className="componentBox background">
 <Grid container spacing={4}>
                {currentRides.map((ride, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
      <SingleRide name={ride.title} description={ride.description} image={ride.image}></SingleRide>
      </Grid>))} </Grid>
  </div>
  <div>
    {/* <button onClick={() =>setCurrentCoffees([...Coffees].sort((coffee1,coffee2)=>coffee1.name < coffee2.name ? -1: 1))}>Sort Alphabetically</button>
    <button onClick={() =>setCurrentCoffees([...Coffees].reverse())}>Sort Reversing</button>
    <button onClick={() =>setCurrentCoffees([...Coffees].filter((latinName)=>latinName.startsWith('Panthera')))}>Filter</button> */}
  </div>

</>
)
}

