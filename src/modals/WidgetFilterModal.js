import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function WidgetFilterModal(props) {
  const { open, onClose } = props;

  const { type } = useSelector((store) => store.filter);

  //const { type } = useSelector((state) => state.filterSlice);

  const [active, setActive] = React.useState("");

  const handleChange = (event) => {
    setActive(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth={"true"} maxWidth={"md"}>
      <DialogTitle>Filter</DialogTitle>
      <DialogContent sx={{ paddingTop: "1rem" }}>
        <FormControl fullWidth sx={{ marginTop: "1rem" }}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={active}
            label="Status"
            onChange={handleChange}
            //selected={type ? type : ""}
          >
            <MenuItem value={"active"}>Active</MenuItem>
            <MenuItem value={"archived"}>Archived</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginTop: "1rem" }}>
          <InputLabel id="demo-simple-select-label">Active</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={active}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"active"}>Active</MenuItem>
            <MenuItem value={"archived"}>Archived</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginTop: "1rem" }}>
          <InputLabel id="demo-simple-select-label">Active</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={active}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"active"}>Active</MenuItem>
            <MenuItem value={"archived"}>Archived</MenuItem>
          </Select>
        </FormControl>

        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button type="submit" variant="contained">
          Filter
        </Button>
      </DialogActions>
    </Dialog>
  );
}
