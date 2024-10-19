import React from "react";
import { Typography, Box, Switch, IconButton, Drawer } from "@mui/material";
import { Grid } from "@mui/system";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AlertConfigurationType from "./AlertConfigurationType";
import NewAlertForm from "./NewAlertForm";
import { alertConfigurationData } from "../data/AlertConfigurationData";

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
            Custom notifications
          </Typography>
          <IconButton
            title="Add new custom alert"
            onClick={() => setOpen(true)}
          >
            <AddCircleOutlineIcon style={{ fontSize: 38, color: "#ffd700" }} />
          </IconButton>
          <NewAlertForm
            handleOpen={newOpen}
            handleClose={() => setOpen(false)}
            configs={alertConfigs}
            setConfigs={setAlertConfigs}
          ></NewAlertForm>
        </Grid>
        <Grid>
          {alertConfigs.map((configuration) => {
            return (
              <AlertConfigurationType
                configuration={configuration}
              ></AlertConfigurationType>
            );
          })}
        </Grid>
        <hr />
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
    </Drawer>
  );
}

export default AlertConfiguration;
