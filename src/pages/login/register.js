
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Typography, Grid } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../components/firebase/firebase"
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        
        // You can use React Router or another navigation method here
        console.log('User is logged in:', user);
      } else {
        // No user is logged in
        console.log('No user is logged in');
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData); // You can perform your registration logic here
    localStorage.setItem("username", formData.firstName);
    e.preventDefault();
    if (formData.email && formData.password && formData.firstName) {
      try {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password, formData.firstName);
          setFormData('');
          navigate("/login");

        // Clear the input fields
        // Redirect to the home page or another page upon successful login/signup
        // You can use React Router or another navigation method here
        console.log('Successful Register');
      } catch (error) {
        // Handle login/signup errors
        console.error('Error:', error.message);
        alert('invalid user');
      }
    } else {
      alert('Fill in all data');
    }

  };

  return (
    <Container maxWidth="sm" style={{ display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: "column", height: "100vh" }}>
     
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              name="firstName"
              label="Name"
              type="text"
              variant="outlined"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
         
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        {error && <Typography variant="body1" color="error">{error}</Typography>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '1rem' }}
        >
          Register
        </Button>
      </form>
      <Button
        type="button"
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '1rem' }}
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
    </Container>
  );
};

export default Register;
