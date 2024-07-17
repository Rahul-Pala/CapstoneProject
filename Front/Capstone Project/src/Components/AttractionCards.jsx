import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

export default function AttractionCards() {
    const navigate = useNavigate()
    const options = [{name: "Rides", description: "our list of rides", link: "/rides", image: "/public/RidePhoto.jpg" }, {name: "Shows", description: "Our list of shows" , link: "/shows"}]
  return (
    <>
    <Grid container spacing={4}>              
    {options.map((option,index)=>
    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 220 }}
        image={option.image}
      />
      
      <CardContent>
      
        <Typography gutterBottom variant="h5" component="div">
          {option.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {option.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() =>navigate(option.link)}>Go to {option.name} list</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>)} </Grid>
    </>
  );
}

