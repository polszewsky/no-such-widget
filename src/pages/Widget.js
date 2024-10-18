import { Badge, IconButton, Paper, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import React, { useState } from "react";

import SettingsIcon from "@mui/icons-material/Settings";
import AlertRow from "./AlertRow";
import { Mail } from "@mui/icons-material";
import AlertConfiguration from "./AlertConfiguration";

export default function Widget() {
  const [alerts] = useState([{ id: 1 }, { id: 2 }]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <Paper elevation={3}>
      <Grid
        container
        sx={{ backgroundColor: "#f2f2f2", borderRadius: "4px 4px 0px 0px" }} //6042F7
      >
        <Grid size={8} p={1}>
          <Typography sx={{ fontWeight: "bold", color: "#666" }}>
            Notification
          </Typography>
        </Grid>
        <Grid
          size="grow"
          sx={{ textAlign: "right", fontWeight: "bold", color: "#328050" }}
          p={1}
        >
          Mark all as read
        </Grid>
        <Grid size={1} p={0} sx={{ textAlign: "right" }}>
          <IconButton title="Alerts configuration" onClick={handleOpen} aria-label="delete">
            <SettingsIcon />
          </IconButton>
          <AlertConfiguration handleOpen={open} handleClose={handleClose}></AlertConfiguration>
        </Grid>
      </Grid>

      {alerts.map((t, index) => (
        <AlertRow key={index} alert={t} />
      ))}
      <Grid sx={{ minHeight: "2px" }} />
    </Paper>
  );
}
