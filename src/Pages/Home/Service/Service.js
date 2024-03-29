import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
const Service = (props) => {
    const {name,description,image}= props.service 
    return (
        <Grid item xs={2} sm={4} md={4} >
            <Card sx={{ minWidth: 275, boxshadow:0,border:0 }}>
            <CardMedia
        component="img"
       style={{ width:'auto',height:'80px', margin:'0 auto' }}
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" component="div">
         {name}
        </Typography>
      
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      
    </Card>
            
          </Grid>
    );
};

export default Service;