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
        postion: "absolute",
        width: 450,
      }}
    >
      <Accordion
        sx={{
          width: "100%",
          "&:hover": { color: "#ffd700", backgroundColor: "#002e3c" },
        }}
      >
        <AccordionSummary>
          <Grid sx={{ padding: 1, width: "100%", alignItems: "center" }}>
            <Typography
              sx={{ textAlign: "center", fontFamily: "bold" }}
              size="auto"
            >
              {configuration.title}
            </Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "left",
            }}
          >
            <Grid size={6}>
              <Typography>Priority</Typography>
            </Grid>
            <Grid size={6}>
              <Typography sx={{ textAlign: "left" }}>
                {configuration.priority}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "left",
            }}
          >
            <Grid size={6}>
              <Typography>Type</Typography>
            </Grid>
            <Grid size={6}>
              <Typography sx={{ textAlign: "left" }}>
                {configuration.type}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "left",
            }}
          >
            <Grid size={6}>
              <Typography>Subtype</Typography>
            </Grid>
            <Grid size={6}>
              <Typography sx={{ textAlign: "left" }}>
                {configuration.subtype}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "left",
            }}
          >
            <Grid size={6}>
              <Typography>Trigger Condition</Typography>
            </Grid>
            <Grid size={6}>
              <Typography sx={{ textAlign: "left" }}>
                {configuration.triggerCondition}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "left",
            }}
          >
            <Grid size={6}>
              <Typography>Client</Typography>
            </Grid>
            <Grid size={6}>
              <Typography sx={{ textAlign: "left" }}>
                {configuration.client}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "left",
            }}
          >
            <Grid size={6}>
              <Typography>Description</Typography>
            </Grid>
            <Grid size={6}>
              <Typography sx={{ textAlign: "left" }}>
                {configuration.description}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "left",
            }}
          >
            <Grid size={6}>
              <Typography>Url</Typography>
            </Grid>
            <Grid size={6}>
              <Typography sx={{ textAlign: "left" }}>
                {configuration.url}
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}

export default AlertConfigurationType;
