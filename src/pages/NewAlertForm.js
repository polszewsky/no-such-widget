import React from "react";
import {
  Drawer,
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { Grid } from "@mui/system";

function NewAlertForm({ handleOpen, handleClose }) {
  return (
    <div>
      <Container>
        <Drawer
          anchor="right"
          open={handleOpen}
          onClose={handleClose}
          PaperProps={{ sx: { width: 450 } }}
        >
          <Box>
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#002e3c",
                borderRadius: "4px 4px 0px 0px",
                padding: 1,
              }}
            >
              <Typography
                sx={{
                  variant: "title",
                  fontSize: 30,
                  fontFamily: "bold",
                  color: "#ffd700",
                }}
              >
                New custom notification
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                padding: 1,
              }}
            >
              <TextField
                id="outlined-basic"
                label="Alert name"
                variant="outlined"
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                padding: 1,
              }}
            >
              <TextField id="outlined-basic" label="type" variant="outlined" />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                padding: 1,
              }}
            >
              <TextField
                id="outlined-basic"
                label="subtype"
                variant="outlined"
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                padding: 1,
              }}
            >
              <TextField
                id="outlined-basic"
                label="frequency"
                variant="outlined"
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                padding: 1,
              }}
            >
              <TextField
                id="outlined-basic"
                label="Client"
                variant="outlined"
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                padding: 1,
              }}
            >
              <Textarea placeholder="Description..." minRows={2} />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                padding: 1,
              }}
            >
              <Textarea placeholder="URL" minRows={2} />
            </Grid>

            <Grid
              sx={{
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                padding: 1,
              }}
            >
              <Button variant="contained" color="success" onClick={handleClose}>
                Save alert
              </Button>
              <Button variant="contained" color="error" onClick={handleClose}>
                Cancel
              </Button>
            </Grid>
          </Box>
        </Drawer>
      </Container>
    </div>
  );
}

export default NewAlertForm;
