import { Badge, Button, IconButton, Paper, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import React from "react";

import SettingsIcon from "@mui/icons-material/Settings";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { FilterAlt } from "@mui/icons-material";
import AlertConfiguration from "./AlertConfiguration";
import WidgetFilterModal from "../modals/WidgetFilterModal";
import AlertRow from "./AlertRow";
import { useSelector } from "react-redux";

export default function Widget() {
  const { filteredNotifications = [] } = useSelector(
    (store) => store.notificationsList
  );

  //configuration
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  //filters
  const [filterOpen, setFilterOpen] = React.useState(false);
  const toggleFilter = (newOpen) => () => {
    setFilterOpen(newOpen);
  };

  return (
    <>
      <Paper elevation={3}>
        <Grid
          container
          sx={{
            backgroundColor: "#f2f2f2",
            borderRadius: "4px 4px 0px 0px",
            padding: 1,
            marginBottom: "5px",
          }} //6042F7
        >
          <Grid size={6} p={1}>
            <Badge
              badgeContent={filteredNotifications.length ?? 0}
              color="primary"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#666" }}>
                Notifications
              </Typography>
            </Badge>
          </Grid>
          {/* <Grid size={4} p={1}>
          <Button variant="contained" color="error">
            {alerts.length} new alerts
          </Button>
        </Grid> */}
          <Grid
            size="grow"
            sx={{
              textAlign: "right",
              fontWeight: "bold",
              color: "#328050",
            }}
            p={1}
          >
            <Button
              startIcon={<DoneAllIcon />}
              color="#328050"
              size="small"
              variant="text"
            >
              Mark all as read
            </Button>
          </Grid>
          <Grid p={0} sx={{ textAlign: "right" }}>
            <IconButton onClick={toggleFilter(true)}>
              <FilterAlt title="Filters configuration" aria-label="filters" />
            </IconButton>
            <IconButton
              onClick={toggleDrawer(true)}
              title="Alerts configuration"
              aria-label="settings"
            >
              <SettingsIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Paper elevation={3} sx={{ overflow: "auto", maxHeight: "500px" }}>
          {filteredNotifications.map((noty, index) => (
            <AlertRow key={index} notification={noty} />
          ))}
        </Paper>
        <Grid sx={{ minHeight: "2px" }} />
      </Paper>

      <WidgetFilterModal open={filterOpen} onClose={toggleFilter(false)} />
      <AlertConfiguration open={open} onClose={toggleDrawer(false)} />
    </>
  );
}
