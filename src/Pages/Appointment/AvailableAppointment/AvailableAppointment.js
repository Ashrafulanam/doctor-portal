import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Booking from '../Booking/Booking';
import Typography from '@mui/material/Typography';
const bookings=[
    {
        id:1,
        name:'cavity protection',
        time:'11:00am - 12:00pm',
        space:1
    },
    {
        id:2,
        name:'pediatric Dental',
        time:'06:00am - 7:00pm',
        space:10
    },
    {
        id:3,
        name:'oral Surgery ',
        time:'7:00pm - 8:00pm',
        space:10
    },
    {
        id:4,
        name:'Teeth Orthodontics',
        time:'8:00am - 9:00am',
        space:10
    },
    {
        id:5,
        name:'Cosmitics Dentistry',
        time:'10:00am - 12:00am',
        space:1
    },
    {
        id:6,
        name:'Teeth Cleaning',
        time:'11:00am - 12:00am',
        space:1
    },
]
const AvailableAppointment = ({date}) => {
    return (
        <Container>
            <Typography  sx={{color:'info.main',mb:3}} variant="h4" component="div" gutterBottom>Available Appointment on {date.toDateString()}</Typography>
            <Grid container spacing={2}>
            {
                bookings.map(booking =><Booking key={booking.id} booking={booking} date={date}></Booking>)
            }
            
            </Grid>
            
            
            
        </Container>
    );
};

export default AvailableAppointment;