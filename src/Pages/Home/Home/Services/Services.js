import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../../Service/Service';
import Typography from '@mui/material/Typography';
import Fluoride from '../../../../images/fluoride.png';
import Cavity from '../../../../images/cavity.png';
import Whitening from '../../../../images/whitening.png';


const services=[
    {
        
        name:"Fluoride Treatment", 
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat similique voluptatum reprehenderit ducimus dolores possimus vitae placeat incidunt minus esse?",
        image:Fluoride
    },
    {
        name:"Cavity Filling", 
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat similique voluptatum reprehenderit ducimus dolores possimus vitae placeat incidunt minus esse?",
        image:Cavity
    },
    {
        name:"Teeth Whitening", 
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat similique voluptatum reprehenderit ducimus dolores possimus vitae placeat incidunt minus esse?",
        image:Whitening
    },
    ]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography   sx={{fontWeight: 500, m: 2}} variant="h6" component="div">
         Our Services
        </Typography>
        <Typography sx={{fontWeight: 600, m:2}} variant="h4" component="div">
         Services We Provide
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      
      
      {
          
          services.map(service => <Service
                        key={service.name}
                         service={service}
                         ></Service>)
      }
      
       
      </Grid>
      
      </Container>
    </Box>
  );
}
export default Services;