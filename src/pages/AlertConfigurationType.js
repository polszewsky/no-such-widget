import {
  Typography,
  Card,
  AccordionSummary,
  Accordion,
  AccordionDetails,
} from "@mui/material";
import { Grid } from "@mui/system";
import React from "react";

function AlertConfigurationType({ configuration }) {
  return (
    <Card
      container
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Accordion>
        <AccordionSummary>
          <Grid sx={{ padding: 1, width: "100%" }}>
            <Typography size="auto">{configuration.title}</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Priority</Typography>
            <Typography size={2}>{configuration.priority}</Typography>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Type</Typography>
            <Typography size={2}>{configuration.type}</Typography>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Subtype</Typography>
            <Typography size={2}>{configuration.subtype}</Typography>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>TriggerCondition</Typography>
            <Typography size={2}>{configuration.triggerCondition}</Typography>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}

export default AlertConfigurationType;
