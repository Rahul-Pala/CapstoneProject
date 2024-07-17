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

export default function TicketCards() {

    const navigate = useNavigate()
    const tickets = [{name: "Adventure Galaxy Superpass", description: "Unlimited Visits to Rides & Shows", image: "/public/RidePhoto.jpg" },
         {name: "Rides Superpass", description: "Unlimited visits to Rides", },
         {name: "Shows Superpass", description: "Unlimited visits to Shows" },
         {name: "Family Pass One", description: "Get Family Rate for 2 adults and 1 child" },
         {name: "Family Pass Two", description: "Get Family Rate for 2 adults and 2 child" },
         {name: "Family Pass Three", description: "Get Family Rate for 2 adults and 3 child" },
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
        <Button size="small">Go to {ticket.name} list</Button>
      </CardActions>

      <CardActions>
        
        <CountA/>
      </CardActions>
    </Card>
    </Grid>)} </Grid>
    </>
  );
}

