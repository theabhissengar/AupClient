import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../components/firebase/firebase"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
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

  useEffect(() => {
    // Check if the user is already logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // You can use React Router or another navigation method here
        console.log('User is logged in:');
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
    console.log(formData); // You can perform your login logic here

    e.preventDefault();
    if (formData.email && formData.password) {
      try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
          setFormData('');
          navigate("/");

        // Clear the input fields
        // Redirect to the home page or another page upon successful login/signup
        // You can use React Router or another navigation method here
        console.log('Successful login');
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
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <Typography variant="body1" color="error">{error}</Typography>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '1rem' }}
        >
          Login
        </Button>
      </form>
      <Button
        type="button"
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '1rem' }}
        onClick={() => navigate("/register")}
      >
        Register
      </Button>
    </Container>
  );
};

export default Login;
