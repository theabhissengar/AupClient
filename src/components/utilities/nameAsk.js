import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from '../../components/firebase/firebase';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NameForm = () => {
  const [open, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = auth.currentUser;

    if (user) {
      try {
        await setDoc(doc(db, 'names', user.uid), {
          firstName: formData.firstName,
          lastName: formData.lastName,
        });
        navigate('/profile'); // Redirect to profile or any other page after submission
      } catch (error) {
        console.error('Error writing document: ', error);
      }
    } else {
      console.error('No user is signed in');
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/'); // Redirect to home page if dialog is closed
  };

  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
      <DialogTitle>Enter Your Name</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            fullWidth
            value={formData.firstName}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            fullWidth
            value={formData.lastName}
            onChange={handleChange}
            required
            margin="normal"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NameForm;
