import React from "react";
import {
  Typography,
  Box,
  Container,
  Switch,
  IconButton,
  Drawer,
} from "@mui/material";
import { Grid } from "@mui/system";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AlertConfigurationType from "./AlertConfigurationType";
import NewAlertForm from "./NewAlertForm";
import { alertConfigurationData } from "../data/AlertConfigurationData";

function AlertConfiguration(props) {
  const { open, onClose } = props;

  const [newOpen, setOpen] = React.useState(false);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: 1000 } }}
    >
      <Box>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#778899",
            borderRadius: "4px 4px 0px 0px",
            padding: 1,
          }}
        >
          <Typography
            sx={{ variant: "title", fontSize: 30, fontFamily: "bold" }}
          >
            Custom notifications
          </Typography>
          <IconButton
            title="Add new custom alert"
            onClick={() => setOpen(true)}
          >
            <AddCircleOutlineIcon style={{ fontSize: 48 }} />
          </IconButton>
          <NewAlertForm
            handleOpen={newOpen}
            handleClose={() => setOpen(false)}
          ></NewAlertForm>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#f2f2f2",
            borderRadius: "4px 4px 0px 0px",
            padding: 2,
          }}
        >
          <Grid size="auto">
            <Typography>Title</Typography>
          </Grid>
          <Grid size="auto">
            <Typography>Priority</Typography>
          </Grid>
          <Grid size="auto">
            <Typography>Type</Typography>
          </Grid>
          <Grid size="auto">
            <Typography>Subtype</Typography>
          </Grid>
          <Grid size="auto">
            <Typography>TriggerCondition</Typography>
          </Grid>
          <Grid size="auto">
            <Typography>Description</Typography>
          </Grid>
        </Grid>
        <Grid>
          {alertConfigurationData.configurations.map((configuration) => {
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
