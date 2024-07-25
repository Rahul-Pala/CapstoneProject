import React from 'react';
import '../index.css'
import { useEffect, useState } from 'react';
import SingleRide from './SingleRide';
import { useData } from '../Hooks/useData';
import { Grid } from '@mui/material';
import { useUserContext } from '../Context/UserContext';
import SingleQueue from './SingleQueue';

export default function QueueList() {
    
const data = useData(`http://localhost:8080/api/queue`);
const [currentQueues, setCurrentQueues] = useState([]);
const{user, setUser} = useUserContext()
useEffect(() => {
  const filteredArray = data?.filter((queue) => queue.UserID === user._id)
  console.log(filteredArray)
setCurrentQueues(filteredArray)
}, [data]
)
console.log(currentQueues)

return(
<>
 <div className="componentBox background">
 <Grid container spacing={4} sx={{width:'70em'}}>
                {currentQueues?.map((queue, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
      <SingleQueue UserID={queue.UserID}id={queue._id} Attracion={queue.AttractionID} Service={queue.ServiceID} ReservationTime={queue.ReservationTime} Queuing={queue.Queuing}></SingleQueue>
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

