import {
  Button,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Grid } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterActiveType } from "../slices/filterSlice";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";

export default function WidgetFilterModal(props) {
  const { open, onClose } = props;
  const dispatch = useDispatch();

  const { filters } = useSelector((store) => store.filter);

  useEffect(() => {
    loadDataOnlyOnce(filters);
  }, [open, filters]);

  const loadDataOnlyOnce = (filters) => {
    setValue(filters.type);
  };

  const [tempActive, setValue] = React.useState("active");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const submit = () => {
    dispatch(updateFilterActiveType({ type: tempActive }));

    onClose();
  };

  //LIST STORTING

  // const [selectedIndex, setSelectedIndex] = React.useState(1);

  //   const handleListItemClick = (event, index) => {
  //     setSelectedIndex(index);
  //   };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: 500 } }}
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
            Filters & Groups
          </Typography>
        </Grid>

        <Grid size={10} offset={{ md: 1 }} sx={{ marginTop: "1rem" }}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Notifications
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={tempActive}
              onChange={handleChange}
            >
              <FormControlLabel
                value="active"
                control={<Radio />}
                label="Active"
              />
              <FormControlLabel
                value="archived"
                control={<Radio />}
                label="Archived"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid size={12}>
          <Grid
            container
            sx={{
              justifyContent: "right",
              alignItems: "flex-end",

              marginRight: "1rem",
            }}
          >
            <Grid size={"auto"}>
              <Button variant="contained" onClick={() => submit()}>
                Filter
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/** END OF ACTIVE FILTERS */}

        <Grid size={12}>
          <Grid
            container
            sx={{
              justifyContent: "center",
              alignItems: "flex-end",

              marginRight: "1rem",
              marginTop: "0.5rem",
            }}
          >
            <Grid size={10}>
              <Divider />
            </Grid>
          </Grid>
        </Grid>

        <Grid size={10} offset={{ md: 1 }} sx={{ marginTop: "1rem" }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: "1.4375em",
              letterSspacing: "0.00938em",
              color: "#0009",
              fontFamily: "Roboto, Helvetica, Arial sans-serif",
            }}
          >
            Sort by
          </Typography>

          <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton
              selected={filters.sort.type === true}
              // onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText primary="Category" />
              <ListItemIcon>
                <DriveFileMoveIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              selected={filters.sort.category === true}
              //onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemText primary="Type" />
              <ListItemIcon>
                <MergeTypeIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              selected={filters.sort.dueDate === true}
              //onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Due days" />
              <ListItemIcon>
                <TrendingDownIcon />
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Grid>
        <Grid size={12}>
          <Grid
            container
            sx={{
              justifyContent: "right",
              alignItems: "flex-end",

              marginRight: "1rem",
            }}
          >
            <Grid size={"auto"}>
              <Button
                variant="contained"
                onClick={() => alert("Sorry. Just proof of concept :)")}
              >
                Sort
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
}
