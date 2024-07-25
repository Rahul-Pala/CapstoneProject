import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DatePicker from './DatePicker';
import RatingStars from './RatingStars';

export default function SingleQueue(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
       {/* { props.queuing? */}
        <Typography gutterBottom variant="h5" component="div">
            Booked for : 
        {props.ReservationTime.slice(0, 10)} <br/>
        at : 
        {props.ReservationTime.slice(11, 16)} pm
        </Typography>
         {/* : null} */}

       
      </CardContent>
      <CardActions>
      <DatePicker aId={props.id} uid={props.UserID} RT={props.ReservationTime} qid={props.id}/>
      </CardActions> 
    </Card>
  );
}

