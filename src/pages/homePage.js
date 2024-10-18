import { Container, Grid } from "@mui/system";
import React, { Fragment } from "react";
import Widget from "./Widget";
import Modal from '@mui/material/Modal';
import { Typography, Box, Button } from '@mui/material';
import AlertConfiguration from './alertConfiguration';

function HomePage() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <Container fixed sx={{ marginTop: "20vh" }}>
    <div>
      <Button onClick={handleOpen}>Configuration of alerts</Button>
      <AlertConfiguration handleOpen={open} handleClose={handleClose}></AlertConfiguration>
    </div>
        <Grid
          container
          spacing={2}
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid size={8}>
            <Widget />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default HomePage;
