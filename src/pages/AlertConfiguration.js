import React from "react";
import {
  Typography,
  Box,
  Container,
  Switch,
  IconButton,
  Drawer,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AlertConfigurationType from "./AlertConfigurationType";
import NewAlertForm from "./NewAlertForm";

// const styleModal = {
//   position: "absolute",
//   top: 0,
//   right: 0,
//   width: 500,
//   height: "100%",
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

function AlertConfiguration(props) {
  const alerts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const { open, onClose } = props;

  const [newOpen, setOpen] = React.useState(false);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}
            PaperProps={{sx: { width: 500 }}}>
      <Box>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ variant: "title" }}>
            Configuration of alerts
          </Typography>
          <IconButton
            title="Add new custom alert"
            onClick={() => setOpen(true)}
          >
            <AddCircleIcon fontSize="large" />
          </IconButton>
          <NewAlertForm
            handleOpen={newOpen}
            handleClose={() => setOpen(false)}
          ></NewAlertForm>
        </Container>
        <hr />
        <Container>
          {alerts.map((alert) => {
            return (
              <AlertConfigurationType number={alert}></AlertConfigurationType>
            );
          })}
        </Container>
        <hr />
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>External alerts (News)</Typography>
          <Switch defaultChecked />
        </Container>
      </Box>
    </Drawer>
  );
}

export default AlertConfiguration;
