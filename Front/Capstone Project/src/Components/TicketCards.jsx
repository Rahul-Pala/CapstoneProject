import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import CountA from './CountA';
import ButtonBlue from './ButtonBlue';

export default function TicketCards() {

    const navigate = useNavigate()
    const tickets = [{name: "Adventure Galaxy Superpass", description: "Unlimited Visits to Rides & Shows", image: "./ticketimages/image1.jpg" },
         {name: "Rides Superpass", description: "Unlimited visits to Rides", image: "./public/ticketimages/image2.jpg" },
         {name: "Shows Superpass", description: "Unlimited visits to Shows", image: "./public/ticketimages/image3.jpg" },
         {name: "Family Pass One", description: "Get Family Rate for 2 adults and 1 child", image: "./public/ticketimages/image4.jpg" },
         {name: "Family Pass Two", description: "Get Family Rate for 2 adults and 2 child", image: "./public/ticketimages/image5.jpg" },
         {name: "Family Pass Three", description: "Get Family Rate for 2 adults and 3 child" , image: "./public/ticketimages/image6.jpg" },
        ]

    return (
    <>
     <Grid container spacing={4}>              
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
      </CardContent>
      <CardActions>
        
      </CardActions>
       <CountA/>
      <CardActions>
      <Button size="medium">Add to Cart</Button>
        
      </CardActions>

      <ButtonBlue/>
    </Card>
    </Grid>)} </Grid>
    </>
  );
}

