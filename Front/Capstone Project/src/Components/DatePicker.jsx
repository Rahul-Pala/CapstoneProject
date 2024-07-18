import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Button } from '@mui/material';

export default function DatePicker() {
  const [value, setValue] = React.useState(null);

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
        <Button>Confirm</Button>
      </Stack>
    </LocalizationProvider>
  );
}
