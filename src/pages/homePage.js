import React from 'react';
import Modal from '@mui/material/Modal';
import { Typography, Box, Button } from '@mui/material';
import AlertConfiguration from './alertConfiguration';
  

function HomePage() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Configuration of alerts</Button>
      <AlertConfiguration handleOpen={open} handleClose={handleClose}></AlertConfiguration>
    </div>
  );
}

export default HomePage;