import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DatePicker from './DatePicker';
import RatingStars from './RatingStars';

export default function SingleRide(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 220 }}
        image={props.Image}
        title="Rides"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.Name}
        </Typography>

        <Typography variant="body2" color="red">
         Category: {props.Category}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
        {props.Description}
        </Typography>
      </CardContent>
      <CardActions>
      <DatePicker aId={props.id} uid={props.UserID}/>
      </CardActions> 
      <CardActions> 
        <RatingStars aId={props.id} uid={props.UserID}/> 
        </CardActions>
     
      
      
    </Card>
  );
}

