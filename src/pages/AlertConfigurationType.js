import {
  Typography,
  Card,
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Tooltip,
} from "@mui/material";
import { Grid } from "@mui/system";
import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import { useDispatch } from "react-redux";
import { notifyError, notifyInfo } from "../actualAlert/actualAlertSlice";

function AlertConfigurationType({ configuration, configs, setConfigs }) {
  const dispatch = useDispatch();
  return (
    <Card
      container
      sx={{
        display: "flex",
        alignItems: "center",
        postion: "absolute",
        width: 550,
      }}
    >
      <Accordion
        sx={{
          width: "80%",
          "&:hover": {
            color: "#ffd700",
            backgroundColor: "#002e3c",
          },
        }}
      >
        <AccordionSummary>
          <Grid
            sx={{
              display: "flex",
              padding: 1,
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                fontFamily: "bold",
              }}
              size="auto"
            >
              {configuration.title}
            </Typography>
            {/* <Grid size="auto" sx={{ justifyContent: "space-between" }}>
              <Tooltip title="Delete">
                <DeleteForeverIcon
                  title="Remove configuration"
                  onClick={() => {
                    setConfigs(
                      configs.filter((a) => a.title !== configuration.title)
                    );
                  }}
                />
              </Tooltip>
              <Tooltip title="Edit">
                <EditIcon
                  title="Edit configuration"
                  onClick={() =>
                    dispatch(notifyError("Sorry, just proof of concept"))
                  }
                />
              </Tooltip>
              <Tooltip title="Share configuration">
                <ScreenShareIcon
                  title="Edit configuration"
                  onClick={() =>
                    dispatch(notifyError("Sorry, just proof of concept"))
                  }
                />
              </Tooltip>
            </Grid> */}
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

      <Grid
        size="auto"
        sx={{
          justifyContent: "space-between",
          display: "flex",
          width: "auto",
          lenght: "auto",
        }}
      >
        <Tooltip title="Delete">
          <DeleteForeverIcon
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            title="Remove configuration"
            onClick={() => {
              setConfigs(
                configs.filter((a) => a.title !== configuration.title)
              );
              dispatch(notifyInfo("Configuration has been removed!"));
            }}
          />
        </Tooltip>
        <Tooltip title="Edit">
          <EditIcon
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            title="Edit configuration"
            onClick={() =>
              dispatch(notifyError("Sorry, just proof of concept"))
            }
          />
        </Tooltip>
        <Tooltip title="Share configuration">
          <ScreenShareIcon
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            title="Edit configuration"
            onClick={() =>
              dispatch(notifyError("Sorry, just proof of concept"))
            }
          />
        </Tooltip>
      </Grid>
    </Card>
  );
}

export default AlertConfigurationType;
