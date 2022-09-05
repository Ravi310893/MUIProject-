import React, { useState } from 'react';   
import { Box, Typography, TextField, Button } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import { login } from '../../Features/userslice';
import { useDispatch } from 'react-redux';



const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  })

  
  /* console.log(isSignup); */

  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const handleSubmit=(e)=>{
      e.preventDefault();
      localStorage.setItem('inputs',JSON.stringify([inputs]));
      console.log(inputs);
  }

  const resetState=()=>{
    setIsSignup(!isSignup);
    setInputs({name:"",email:"",password:""});
  }

  const showData=()=>{
    var data=localStorage.getItem('inputs');    
    console.log(data)
    console.log('data',JSON.parse(data));
    
  }

const dispatch=useDispatch()
   
  dispatch(login({
     inputs:inputs,
    
     isSignup:true
  }));

 

  return (
    <>
   {/*  <Layout> */}

      <form action="" onSubmit={handleSubmit}>
        <Box display='flex'
          flexDirection={'column'}
          maxWidth={400}
          alignItems="center"
          justifyContent={'center'}
          margin="auto"
          marginTop={-2}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: '10px 10px 20px #ccc'
            }
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">{isSignup ? "Signup" : "Login"}</Typography>
          {isSignup && (<TextField
            name="name"
            value={inputs.name}
            type={'text'}
            variant='outlined'
            placeholder='Name'
            margin='normal'
            onChange={handleChange}
          />
          )}

          <TextField
            name='email'
            value={inputs.email}
            type={'email'}
            variant='outlined'
            placeholder='Email'
            margin='normal'
            onChange={handleChange}
          />

          <TextField
            name='password'
            value={inputs.password}
            type={'password'}
            variant='outlined'
            placeholder='Password'
            margin='normal'
            onChange={handleChange}
          />

          <Button
          endIcon={isSignup ? <HowToRegOutlinedIcon/> : <LoginOutlinedIcon/>}
           sx={{ marginTop: 3, borderRadius: 3 }} 
           variant='contained' 
           color='warning'
           type="submit"
          >
            {isSignup ? "Signup" : "Login"}
          </Button>

          <Button
            endIcon={isSignup ? <LoginOutlinedIcon/> : <HowToRegOutlinedIcon/>}
            onClick={resetState}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            Go to {isSignup ? "Login" : "Signup"}
          </Button>


        </Box>
        <button onClick={showData}>show data</button>
      </form>
      {/* </Layout> */}
    
    </>
  )
}

export default Login