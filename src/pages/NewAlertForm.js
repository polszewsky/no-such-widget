import React from "react";
import {
  Drawer,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { Grid } from "@mui/system";
import { useDispatch } from "react-redux";
import { notifySuccess } from "../actualAlert/actualAlertSlice";

function NewAlertForm({ handleOpen, handleClose, configs, setConfigs }) {
  const [title, setTitle] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [type, setType] = React.useState("");
  const [subtype, setSubtype] = React.useState("");
  const [trigger, setTrigger] = React.useState("");
  const [client, setClient] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [url, setUrl] = React.useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <Grid>
        <Drawer
          anchor="right"
          open={handleOpen}
          onClose={handleClose}
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
                padding: 2,
                marginBottom: 2,
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
                New custom notification
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 1,
              }}
            >
              <TextField
                required
                id="outlined-basic"
                label="title"
                variant="outlined"
                sx={{ width: "80%" }}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 1,
              }}
            >
              <FormControl required sx={{ width: "80%" }}>
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={priority}
                  label="Priority"
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <MenuItem value={"urgent"}>urgent</MenuItem>
                  <MenuItem value={"high"}>high</MenuItem>
                  <MenuItem value={"medium"}>medium</MenuItem>
                  <MenuItem value={"minor"}>minor</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 1,
              }}
            >
              <FormControl required sx={{ width: "80%" }}>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="Type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value={"financial"}>financial</MenuItem>
                  <MenuItem value={"transacion approval"}>
                    transacion approval
                  </MenuItem>
                  <MenuItem value={"security"}>security</MenuItem>
                  <MenuItem value={"market alert"}>market alert</MenuItem>
                  <MenuItem value={"compliance"}>compliance</MenuItem>
                  <MenuItem value={"regulatory"}>regulatory</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 1,
              }}
            >
              <FormControl required sx={{ width: "80%" }}>
                <InputLabel id="demo-simple-select-label">Subtype</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={subtype}
                  label="Subtype"
                  onChange={(e) => setSubtype(e.target.value)}
                >
                  <MenuItem value={"loan"}>loan</MenuItem>
                  <MenuItem value={"payment"}>payment</MenuItem>
                  <MenuItem value={"stock change"}>stock change</MenuItem>
                  <MenuItem value={"market alert"}>market alert</MenuItem>
                  <MenuItem value={"compliance"}>compliance</MenuItem>
                  <MenuItem value={"regulatory"}>regulatory</MenuItem>
                  <MenuItem value={"--||--"}>--||--</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 1,
              }}
            >
              <TextField
                id="outlined-basic"
                label="trigger condition"
                variant="outlined"
                sx={{ width: "80%" }}
                onChange={(e) => setTrigger(e.target.value)}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 1,
              }}
            >
              <TextField
                id="outlined-basic"
                label="Client"
                variant="outlined"
                sx={{ width: "80%" }}
                onChange={(e) => setClient(e.target.value)}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 1,
              }}
            >
              <Textarea
                placeholder="Description..."
                minRows={2}
                sx={{ width: "80%" }}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 1,
                marginBottom: 2,
              }}
            >
              <Textarea
                placeholder="URL"
                minRows={2}
                sx={{ width: "80%" }}
                onChange={(e) => setUrl(e.target.value)}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                padding: 1,
              }}
            >
              <Button
                disabled={!title || !priority || !type | !subtype}
                variant="contained"
                sx={{
                  color: "#002e3c",
                  backgroundColor: "#ffd700",
                  fontWeight: "bold",
                  minWidth: 100,
                }}
                onClick={() => {
                  setConfigs([
                    ...configs,
                    {
                      title: title,
                      priority: priority,
                      type: type,
                      subtype: subtype,
                      trigger: trigger,
                      client: client,
                      description: description,
                      url: url,
                    },
                  ]);
                  handleClose();
                  dispatch(
                    notifySuccess("New configuration has been created!")
                  );
                }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: "#002e3c",
                  backgroundColor: "#ffd700",
                  fontWeight: "bold",
                  minWidth: 100,
                }}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Grid>
          </Box>
        </Drawer>
      </Grid>
    </div>
  );
}

export default NewAlertForm;
