import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

// const isWeekend = (date: Dayjs) => {
//   const day = date.day();

//   return day === 0 || day === 6;
// };

export default function Calender() {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));

    React.useEffect(() => {
        const currentDate = {
            day: value!.date(),
            month: value!.month() + 1,
            year: value!.year()
        }

        console.log(currentDate);
    }, [value]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
                orientation="portrait"
                openTo="day"
                value={value}
                // shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}