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
    const services = [{name: "Baby Care Room", description: "A comfortable and private room equipped with changing tables. nursing chairs, and a microwave for warming bottles and baby food. The room also includes a play area for toddlers to keep them entertained.", availability },
        {name: "Baby Care Room", description: "A comfortable and private room equipped with changing tables. nursing chairs, and a microwave for warming bottles and baby food. The room also includes a play area for toddlers to keep them entertained." },
        {name: "Baby Care Room", description: "A comfortable and private room equipped with changing tables. nursing chairs, and a microwave for warming bottles and baby food. The room also includes a play area for toddlers to keep them entertained." },
        {name: "Baby Care Room", description: "A comfortable and private room equipped with changing tables. nursing chairs, and a microwave for warming bottles and baby food. The room also includes a play area for toddlers to keep them entertained." },
        {name: "Baby Care Room", description: "A comfortable and private room equipped with changing tables. nursing chairs, and a microwave for warming bottles and baby food. The room also includes a play area for toddlers to keep them entertained." },
        {name: "Baby Care Room", description: "A comfortable and private room equipped with changing tables. nursing chairs, and a microwave for warming bottles and baby food. The room also includes a play area for toddlers to keep them entertained." },

    ]
  return (
    <>
    <Grid container spacing={4}>              
    {services.map((service,index)=>
    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 220 }}
      />
      
      <CardContent>
      
        <Typography gutterBottom variant="h5" component="div">
          {service.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {service.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> list</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>)} </Grid>
    </>
  );
}

