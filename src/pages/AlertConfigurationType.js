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
              sx={{ textAlign: "left", fontFamily: "bold" }}
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
              paddingBottom: 1,
            }}
          >
            <Grid size={6}>
              <Typography sx={{ fontWeight: "bold" }}>Priority</Typography>
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
              paddingBottom: 1,
            }}
          >
            <Grid size={6}>
              <Typography sx={{ fontWeight: "bold" }}>Type</Typography>
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
              paddingBottom: 1,
            }}
          >
            <Grid size={6}>
              <Typography sx={{ fontWeight: "bold" }}>Subtype</Typography>
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
              paddingBottom: 1,
            }}
          >
            <Grid size={6}>
              <Typography sx={{ fontWeight: "bold" }}>
                Trigger Condition
              </Typography>
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
              paddingBottom: 1,
            }}
          >
            <Grid size={6}>
              <Typography sx={{ fontWeight: "bold" }}>Client</Typography>
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
              <Typography sx={{ fontWeight: "bold" }}>Url</Typography>
            </Grid>
            <Grid size={6}>
              <Typography sx={{ textAlign: "left" }}>
                {configuration.url}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "left",
              paddingBottom: 1,
            }}
          >
            <Grid size={6}>
              <Typography sx={{ fontWeight: "bold" }}>Description</Typography>
            </Grid>
            <Grid size={6}>
              <Typography sx={{ textAlign: "left" }}>
                {configuration.description}
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}

export default AlertConfigurationType;
