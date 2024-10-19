import { Chip, Typography, Button } from "@mui/material";
import { Grid } from "@mui/system";
import React from "react";
import InfoIcon from '@mui/icons-material/Info';
import AlertDetails from "./AlertDetails";

export default function AlertRow(props) {
  const { alert = {} } = props;

  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
      <Grid container sx={{ minHeight: "25px", padding: "2px 4px 2px 4px",
        '&:hover': {
          background: "#F0FFFF",
          boxShadow: 10,},
          }}>
        <Grid size={2}>
          <Chip
            color="error"
            size="small"
            label="4 DAYS"
            sx={{ borderRadius: "2px" }}
          />
        </Grid>
        <Grid size={10}>
          <Grid container direction="column">
            <Grid container sx={{ marginBottom: "-20px" }}>
              <Grid size={6}>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "10pt", color: "#666" }}
                >
                  4Eye: Fix term deposits
                </Typography>
              </Grid>
              <Grid size={4} sx={{ display: "flex", alignItems: "right"}}>
                <Typography variant="overline">2024-12-12</Typography>
                <Button variant="contained" onClick={handleOpen}>
                  <Typography>Details</Typography>
                  <InfoIcon></InfoIcon>
                </Button>
                <AlertDetails handleOpen={open} handleClose={handleClose}></AlertDetails>
              </Grid>
            </Grid>

            <Grid>b</Grid>
            <Grid>c</Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr />
    </>
  );
}
