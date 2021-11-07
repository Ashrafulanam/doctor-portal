import React, { useState } from 'react';
import { Alert, CircularProgress, Container,Typography } from '@mui/material';
import { Grid } from '@mui/material';
import login from '../../../images/login.png';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';



const Register = () => {
    const [loginData,setLoginData]= useState({})
    const history=useHistory()
   const {user, registerUser,isLoading,authError}=useAuth()
   
    const handleOnBlur=e =>{
        const field= e.target.name;
        const value= e.target.value;
        console.log(field,value);
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
        
    }
    
    const handleLoginSubmit= e =>{
      if(loginData.password !== loginData.password2){
          alert(" your password did not match");
          return
      }
      registerUser(loginData.email,loginData.password,loginData.name,history);
        e.preventDefault();
    }
    return (
       <Container>
        <Grid container spacing={2}>
  <Grid item sx={{mt:8}} xs={12} md={6}>
  <Typography variant="body1" gutterBottom>
        Login
      </Typography>
      {!isLoading && <form onSubmit={handleLoginSubmit}>
      <TextField 
      sx={{width:'75%',m: 1}}
       id="standard-basic"
        label="Your name"
        type="text"
        name="name"
        onBlur={handleOnBlur}
         variant="standard" />
      <TextField 
      sx={{width:'75%',m: 1}}
       id="standard-basic"
        label="Your Email"
        type="email"
        name="email"
        onBlur={handleOnBlur}
         variant="standard" />
      <TextField 
      sx={{width:'75%',m: 1}}
       id="standard-basic" 
       label="Your Password"  
       type="password" 
       name="password"
       onBlur={handleOnBlur}
       variant="standard" />
      <TextField 
      sx={{width:'75%',m: 1}}
       id="standard-basic" 
       label=" Retype Your Password"  
       type="password" 
       name="password2"
       onBlur={handleOnBlur}
       variant="standard" />
       
    
      <Button 
      sx={{width:'75%',m: 1}}
       type="submit" 
       variant='contained'> Register </Button>
          <NavLink style={{textDecoration:'none'}} to='login'><Button variant="text">Already registered? Please Login</Button></NavLink>
      </form>}
      {isLoading && <CircularProgress/>}
      {user?.email && <Alert severity="success">User Createrd successfully!</Alert>}
      {authError && <Alert severity="error">{authError}</Alert>}
   
  </Grid>
  <Grid item xs={12} md={6}>
    <img style={{width:'100%'}} src={login} alt="" />
  </Grid>
  
</Grid>
        
        </Container>
    );
};

export default Register;