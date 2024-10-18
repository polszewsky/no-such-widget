import { Typography } from '@mui/material';
import React from 'react';

function AlertConfigurationType({number}) {
  return (
    <Typography sx={{padding: 2}}>
        Alert Configuration number {number}
    </Typography>
  );
}

export default AlertConfigurationType;