import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

export default function FamilyServiceCards() {
    const navigate = useNavigate()
    const services = [{ServiceType: "Baby Care Room", description: "A comfortable and private room equipped with changing tables. nursing chairs, and a microwave for warming bottles and baby food. The room also includes a play area for toddlers to keep them entertained.", AvailabilityStatus: "Available", Location: "East Galaxy",image: "./rideimages/image2.jpg"  },
        {ServiceType: "Quiet Room", description: "A serene and calming space designed for families with special needs children who might need a break from the sensory overload of the park. The room features soft lighting, comfortable seating, and sensory-friendly toys.", AvailabilityStatus: "Available", Location: "West Galaxy",image: "./ticketimages/image2.jpg" },
        {ServiceType: "Family Lounge", description: "A spacious room for families to relax, recharge, and enjoy some downtime. The lounge includes comfortable seating, charging stations for electronic devices, and a small kitchenette with snacks and beverages..", AvailabilityStatus: "Available", Location: "North Galaxy",image: "./ticketimages/image3.jpg" },
        {ServiceType: "First Aid Room", description: "A fully-equipped first aid room where families can attend to minor injuries or health issues. The room includes basic medical supplies, a resting bed, and a sink. Professional medical staff is available on call..", AvailabilityStatus: "Available", Location: "South Galaxy",image: "./ticketimages/image4.jpg" },
]
  return (
    <>
    <Grid container spacing={4}>              
    {services.map((service,index)=>
    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 220 }}
        image={service.image}
      />
      
      <CardContent>
      
        <Typography gutterBottom variant="h5" component="div">
          {service.ServiceType}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {service.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {service.Location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> list</Button>
        
      </CardActions>
    </Card>
    </Grid>)} </Grid>
    </>
  );
}

