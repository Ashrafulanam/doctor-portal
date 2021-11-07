import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import  Button  from '@mui/material/Button';
import BokingModal from './../BokingModal/BokingModal';


const Booking = ({booking,date}) => {
    const {name, time,space}=booking;
     const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
    return (
        
           <>
           
             <Grid item xs={12} sm={6} md={4}>
             <Paper elevation={3} sx={{py:5}} >
              <Typography  sx={{color:'info.main',fontweight: 600}} variant="h5" component="div" gutterBottom >
          {name}
          </Typography>
              <Typography variant="h6" component="div" gutterBottom>
          {time}
          </Typography>
              <Typography variant="caption" display='block' gutterBottom>
          {space} SPACES AVAILABLE
          </Typography>
          <Button onClick={handleBookingOpen} variant='contained'  >BOOK Appointment</Button>      
      </Paper >
  </Grid>
  <BokingModal
  date={date}
  booking={booking}
  openBooking={openBooking}
    handleBookingClose={handleBookingClose} 
  >

  
  </BokingModal>
  
           
           
           </>
 
       
    );
};

export default Booking;