import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Button } from '@mui/material';
import axios from 'axios'
import { useUserContext } from '../Context/UserContext';

export default function DatePicker(props) {
  const [value, setValue] = React.useState(null);
  const{user, setUser} = useUserContext()
  const ReserveDate = () => {
    const queueObject = {UserID: props?.uid, AttractionID: props?.aId, ShowID:props?.sId, ServiceID:props?.fsId,
      ReservationTime: value, Queuing: true
     }

    
    const editqueue = axios.put(`http://localhost:8080/api/queue/${props.qid}`, {ReservationTime:props.RT})
    axios.post("http://localhost:8080/api/queue/create", queueObject)
        .then(response => { 
            console.log(response.data.data);
         })
        .catch(error => { 
            console.log(error);
            return Promise.reject(error);
        })
  }
  const EditDate = () => {
     
    axios.put(`http://localhost:8080/api/queue/${props.qid}`, {ReservationTime:value})
        .then(response => { 
            console.log(response.data.data);
         })
        .catch(error => { 
            console.log(error);
            return Promise.reject(error);
        })
  }

  const DeleteDate = () => {
     
    axios.delete(`http://localhost:8080/api/queue/${props.qid}` )
        .then(response => { 
            console.log(response.data.data);
         })
        .catch(error => { 
            console.log(error);
            return Promise.reject(error);
        })
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2} sx={{ maxWidth: 305 }}>
        <DateTimePicker
          value={value}
          onChange={setValue}
          referenceDate={dayjs('2022-04-17T15:30')}
        />
        <Typography>
          Reservation: {value == null ? 'null' : value.format()}
        </Typography>
      {  props.qid?<><Button onClick={EditDate}>Edit</Button ><br/><Button onClick={DeleteDate}>Delete</Button ></>  :<Button onClick={ReserveDate}>Confirm</Button >}
      </Stack>
    </LocalizationProvider>
  );
}
