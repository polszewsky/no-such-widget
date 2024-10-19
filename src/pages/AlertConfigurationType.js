import { Typography } from "@mui/material";
import { Grid } from "@mui/system";
import React from "react";

function AlertConfigurationType({ configuration }) {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Grid sx={{ padding: 1 }}>
        <Typography size={2}>{configuration.title}</Typography>
      </Grid>
      <Grid>
        <Typography size={2}>{configuration.priority}</Typography>
      </Grid>
      <Grid>
        <Typography size={2}>{configuration.type}</Typography>
      </Grid>
      <Grid>
        <Typography size={2}>{configuration.subtype}</Typography>
      </Grid>
      <Grid>
        <Typography size={2}>{configuration.triggerCondition}</Typography>
      </Grid>
    </Grid>
  );
}

export default AlertConfigurationType;
