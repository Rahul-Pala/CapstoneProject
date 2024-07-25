import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import axios from 'axios';

const labels = {
  0.5: 'Easy Ride',
  1: 'Mild Thrill',
  1.5: 'Fun Flow',
  2: 'Steady Rush',
  2.5: 'Excitement Peak',
  3: 'Thrill Wave',
  3.5: 'Extreme Buzz',
  4: 'Ultimate Rush',
  4.5: 'High Adrenaline',
  5: 'Extreme Adrenaline',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function RatingStars(props) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const ReserveDate = () => {
    const reviewObject = {UserID: props?.uid, AttractionID: props?.aId, ShowID:props?.sId,
      Rating: value, Review: null
     }
    axios.post("http://localhost:8080/api/adrenaline/create", reviewObject)
        .then(response => { 
            console.log(response.data.data);
         })
        .catch(error => { 
            console.log(error);
            return Promise.reject(error);
        })
  }

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box> 
      )} 
       <Button onClick={ReserveDate}>Rate</Button>
    </Box>
  );
}
