import React from 'react';
import '../index.css';
import { useEffect, useState } from 'react';
import SingleShow from './SingleShow';
import { useData } from '../Hooks/useData';
import { Grid } from '@mui/material';

export default function ShowList() {
    
const data = useData(`http://localhost:3000/shows`);
const [currentShows, setCurrentShows] = useState([]);
useEffect(() => {
setCurrentShows(data)
}, [data]
)
console.log(currentShows)

return(
<>
 <div className="componentBox background">
 <Grid container spacing={4}>
                {currentShows?.map((show, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
      <SingleShow Name={show.Name} Description={show.Description} Image={show.Image} Category={show.Category}></SingleShow>
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

