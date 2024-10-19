import React from "react";
import { Typography, Box, Switch, Drawer } from "@mui/material";
import { Grid } from "@mui/system";
import AlertConfigurationType from "./AlertConfigurationType";
import NewAlertForm from "./NewAlertForm";
import { alertConfigurationData } from "../data/AlertConfigurationData";
import { OpenInNewOff } from "@mui/icons-material";

function AlertConfiguration(props) {
  const { open, onClose } = props;

  const [newOpen, setOpen] = React.useState(false);

  const [alertConfigs, setAlertConfigs] = React.useState(
    alertConfigurationData.configurations
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: 550 } }}
    >
      <Grid container>
        <Grid
          size={12}
          sx={{
            padding: "20px",
            backgroundColor: "#002e3c",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: "16pt", color: "#ffd700" }}
          >
            Custom Notifications
          </Typography>
        </Grid>
        <Grid
          container
          spacing={1}
          size={12}
          sx={{
            padding: "20px",
            backgroundColor: "#b5cef777",

            color: "#333",
            "&:hover": {
              color: "#2196F3",
              cursor: "pointer",
            },
          }}
          onClick={() => setOpen(true)}
        >
          <Grid>
            <OpenInNewOff />
          </Grid>
          <Grid>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "12pt", color: "inherit" }}
            >
              Add new Config
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Box>
        <Grid>
          {alertConfigs.map((configuration) => {
            return (
              <AlertConfigurationType
                configuration={configuration}
                configs={alertConfigs}
                setConfigs={setAlertConfigs}
              />
            );
          })}
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>External alerts (News)</Typography>
          <Switch defaultChecked />
        </Grid>
      </Box>

      <NewAlertForm
        handleOpen={newOpen}
        handleClose={() => setOpen(false)}
        configs={alertConfigs}
        setConfigs={setAlertConfigs}
      />
    </Drawer>
  );
}

export default AlertConfiguration;
