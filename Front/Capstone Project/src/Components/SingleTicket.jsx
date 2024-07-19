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

export default function SingleTicket() {

    const navigate = useNavigate()
    const singleTickets = [{name: "Individual Tickets", description: "Select quantity ", image: "./ticketimages/image1.jpg" }]

    return (
    <>
     <Grid container spacing={4} >              
    {singleTickets.map((singleTicket,index)=>
    <Grid item key={index} xs={12} sm={6} md={4} lg={12}>
    <Card sx={{ maxWidth: 800 }}>
      <CardMedia
        // sx={{ height: 190 }}
        // image={singleTicket.image}
      />
      
      <CardContent>
      
        <Typography gutterBottom variant="h5" component="div">
          {singleTicket.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {singleTicket.description}
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
       Adult: <CountA/>
      <CardActions>

      </CardActions>
       Child: <CountA/>
      <CardActions>
      <Button size="medium">Add to Cart</Button>
        
      </CardActions>

      <ButtonBlue/>
    </Card>
    </Grid>)} </Grid>
    </>
  );
}

