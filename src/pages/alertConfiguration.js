import React from 'react';
import { Typography, Box, Modal, Container, Row, Switch } from '@mui/material';
import AlertConfigurationType from './alertConfigurationType';

const styleModal = {
    // position: 'fixed',
    // alignSelf: 'right',
    // justifyContent: 'right',
    // alignItems: 'right',
    position: 'absolute',
    top: 0,
    right: 0,
    width: 300,
    height: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function AlertConfiguration({handleOpen, handleClose}) {

    const alerts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div>
        <Container>
            <Modal
            open={handleOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <Box sx={styleModal}>
                    <Typography align='right' variant='title'>Configuration of alerts</Typography>
                    <hr/>
                    {alerts.map((alert) => {
                        return <AlertConfigurationType number={alert}></AlertConfigurationType>
                    })}
                    <hr/>
                    <Container sx={{display: 'flex'}}>
                        <Typography>External alerts (News)</Typography>
                        <Switch defaultChecked />
                    </Container>
                </Box>
            </Modal>
        </Container>
      </div>
    );
  }
  
  export default AlertConfiguration;