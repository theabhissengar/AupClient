import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, IconButton, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ConsultationSuccessPage = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Consultation Successfully Booked</DialogTitle>
      <DialogContent>
        <Box display="flex" justifyContent="center" alignItems="center" marginBottom={2}>
          <IconButton disabled>
            <CheckCircleIcon style={{ color: 'green', fontSize: 100 }} />
          </IconButton>
        </Box>
        <Typography variant="body1" align="center">
          Your video consultation has been successfully booked.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConsultationSuccessPage;
