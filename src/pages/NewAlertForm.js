import React from 'react';
import { Drawer, Container, Box, Typography, TextField, Button } from '@mui/material';
import Textarea from '@mui/joy/Textarea';

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

function NewAlertForm ({handleOpen, handleClose}) {
    return (
        <div>
            <Container>
                <Drawer anchor="right" open={handleOpen} onClose={handleClose} PaperProps={{sx: { width: 500 }}}>
                    <Box sx={styleModal}>
                        <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1}}>
                            <Typography sx={{fontSize: 24}}>Add new custom alert</Typography>
                        </Container>
                        <Container sx={{display: 'flex', alignItems: 'left', justifyContent: 'left', padding: 1}}>
                            <TextField id="outlined-basic" label="Alert name" variant="outlined" />
                        </Container>
                        <Container sx={{display: 'flex', alignItems: 'left', justifyContent: 'left', padding: 1}}>
                            <TextField id="outlined-basic" label="type" variant="outlined" />
                        </Container>
                        <Container sx={{display: 'flex', alignItems: 'left', justifyContent: 'left', padding: 1}}>
                            <TextField id="outlined-basic" label="subtype" variant="outlined" />
                        </Container>
                        <Container sx={{display: 'flex', alignItems: 'left', justifyContent: 'left', padding: 1}}>
                            <TextField id="outlined-basic" label="frequency" variant="outlined" />
                        </Container>
                        <Container sx={{display: 'flex', alignItems: 'left', justifyContent: 'left', padding: 1}}>
                            <TextField id="outlined-basic" label="Client" variant="outlined" />
                        </Container>
                        <Container sx={{display: 'flex', alignItems: 'left', justifyContent: 'left', padding: 1}}>
                            <TextField id="outlined-basic" label="Client" variant="outlined" />
                        </Container>
                        <Container sx={{display: 'flex', alignItems: 'left', justifyContent: 'left', padding: 1}}>
                            <Textarea placeholder="Description..." minRows={2} />
                        </Container>
                        <Container sx={{display: 'flex', alignItems: 'left', justifyContent: 'left', padding: 1}}>
                            <Textarea placeholder="URL" minRows={2} />
                        </Container>

                        <Container sx={{display: 'flex', alignItems: 'left', justifyContent: 'left', padding: 1}}>
                        <Button variant="contained" color="success" onClick={handleClose}>
                            Save alert
                        </Button>
                        <Button variant="contained" color="error" onClick={handleClose}>
                            Cancel
                        </Button>
                        </Container>
                    </Box>
                </Drawer>
            </Container>
        </div>
    );
}

export default NewAlertForm;