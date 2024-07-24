import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import CountA from './CountA';
import useCounter from './useCounter';

export default function TicketCards() {

  const [total, setTotal] = useState()
    const navigate = useNavigate()
    const tickets = [{name: "Individual Tickets", description: "Select quantity ", image: "./ticketimages/image10.jpg" },
      {name: "Adventure Galaxy Superpass", description: "Unlimited Visits to Rides & Shows", image: "./ticketimages/image1.jpg", price: "$100" },
         {name: "Rides Superpass", description: "Unlimited visits to Rides", image: "./public/ticketimages/image2.jpg", price: "$70" },
         {name: "Shows Superpass", description: "Unlimited visits to Shows", image: "./public/ticketimages/image3.jpg", price: "$50" },
         {name: "Family Pass One", description: "Get Family Rate for 2 adults and 1 child", image: "./public/ticketimages/image4.jpg", price: "$180" },
         {name: "Family Pass Two", description: "Get Family Rate for 2 adults and 2 child", image: "./public/ticketimages/image5.jpg", price: "$210" },
         {name: "Family Pass Three", description: "Get Family Rate for 2 adults and 3 child" , image: "./public/ticketimages/image6.jpg", price: "$230" },
        ]
        const adult = 70
        const child = 35


    return (
    <>
     <Grid container spacing={4} sx={{width:'70em'}}>              
    {tickets.map((ticket,index)=>
    <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 290 }}
        image={ticket.image}
      />
      
      <CardContent>
      
        <Typography gutterBottom variant="h5" component="div">
          {ticket.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {ticket.description}
        </Typography>

        <Typography variant="body2" color="black">
         {ticket.price}
        </Typography>
      </CardContent>
     
     
      <CardActions>
      Quantity: 
       <CountA total ={total} setTotal={setTotal}/> <br/>
      ${total} <br/>
      
      <Button size="medium" sx={{margin: "auto"}}>Add to Cart</Button>
        
      </CardActions>
    </Card>
    </Grid>)} </Grid>
    </>
  );
}

