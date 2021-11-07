import React from 'react';
import chair from '../../../../images/chair.png';
import bg from '../../../../images/bg.png';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';


const bannerBg ={
    background:`url(${bg})`,
    height:450,
//     backgroundColor:'rgba(45, 58, 74,0.9)',
//     backgroundBlendMode: 'darken, luminosity',
//     marginTop:150
 }
const verticalCenter ={
    display: 'flex',
    alignItems: 'center',
    height:450,
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{...verticalCenter,textAlign: 'left'}} xs={12} md={6}>
       <Box>
       
         <Typography variant="h3" >
       Your New Smile <br/>
       starts Here
         </Typography>
         <Typography variant="h6" sx={{my:5,fontsize: 13,color: 'gray',fontweight: '300'}}> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat incidunt esse nam natus assumenda et iusto ipsa! Suscipit, voluptate libero?
         </Typography>
         <Button variant='contained'  style={{backgroundColor:'#5CE7ED'}}>Get Appointment</Button> 
       </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
         <img style={{width:'400px'}} src={chair} alt="" />
        </Grid>
        
      </Grid>
    </Container>
    );
};

export default Banner;