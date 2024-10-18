import React from 'react';
import { Typography, Box, Modal, Container, Switch, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AlertConfigurationType from './AlertConfigurationType';
import NewAlertForm from './NewAlertForm';

const styleModal = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 500,
    height: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function AlertConfiguration({handleOpen, handleClose}) {

    const alerts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [open, setOpen] = React.useState(false);
    const handleOpenNewAlertForm = () => setOpen(true);
    const handleCloseNewAlertForm = () => setOpen(false);

    return (
      <div>
        <Container>
            <Modal
            open={handleOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <Box sx={styleModal}>
                  <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography sx={{variant: 'title'}} >Configuration of alerts</Typography>
                    <IconButton title="Add new custom alert" onClick={handleOpenNewAlertForm}>
                      <AddCircleIcon fontSize="large" />
                    </IconButton>
                    <NewAlertForm handleOpen={open} handleClose={handleCloseNewAlertForm}></NewAlertForm>
                  </Container>
                  <hr/>
                  <Container>
                    {alerts.map((alert) => {
                        return <AlertConfigurationType number={alert}></AlertConfigurationType>
                    })}
                  </Container>
                  <hr/>
                  <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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