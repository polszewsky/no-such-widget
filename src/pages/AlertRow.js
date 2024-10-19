import { Alert, Chip, Typography, IconButton, Divider } from "@mui/material";
import { Grid } from "@mui/system";
import React from "react";
import AlertDetails from "./AlertDetails";
import { Search } from "@mui/icons-material";

export default function AlertRow(props) {
  const { alert = {} } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid
        container
        sx={{
          minHeight: "20px",
          //padding: "2px 4px 2px 4px",
          justifyContent: "center",
          alignItems: "top",
        }}
      >
        <Grid
          size={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            sx={{
              justifyContent: "center",
              alignItems: "center",
              //border: "1px solid black",
              paddingTop: "2px",
              paddingBottom: "2px",
            }}
            spacing={0}
          >
            <Grid>
              {/** THI IS TYPE : automtic / manual / external*/}
              <Alert
                severity="success"
                sx={{ paddingLeft: "26px", border: "1px solid #002e3c" }}
              />
            </Grid>
            <Grid sx={{ marginTop: "2px", marginBottom: "2px" }}>
              <Chip color="error" size="small" label="due 4 days" />
              {/* <Typography
                variant="overline"
                sx={{ fontWeight: "bold", fontSize: "8pt", color: "red" }}
              >
                Due in 4 days
              </Typography> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid size={8}>
          <Grid container direction="column">
            <Grid container sx={{ marginBottom: "0px" }}>
              <Grid size={10}>
                {/* <Typography
                  sx={{ fontWeight: "400", fontSize: "8pt", color: "#999" }}
                >
                  Fix term deposits
                </Typography> */}
                {/** THI IS cathegory*/}
                <Chip
                  label="Fix term deposits"
                  size="small"
                  sx={{ borderRadius: "2px" }}
                />
              </Grid>
            </Grid>

            <Grid>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "14pt", color: "#002E3C" }}
              >
                {/** TITLE CARD */}
                Tiltle title great title {alert?.id}
              </Typography>
            </Grid>
            <Grid>
              <Typography
                variant="body2"
                sx={{ fontWeight: "300", fontSize: "10pt", color: "#444" }}
              >
                {/** DESCRIPTION -> cut of after 40/50 letters */}
                Tiltle title great title
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          size={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            direction="column"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid sx={{ marginBottom: "1rem" }}>
              {/** THI IS DATE OF PUBLICATION IF EXSISRS */}
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "8pt", color: "#999" }}
              >
                2024-12-12
              </Typography>
            </Grid>
            <Grid>
              <IconButton
                aria-label="delete"
                color="primary"
                onClick={handleOpen}
              >
                <Search />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider flexItem sx={{ marginBottom: "4px" }} />

      <AlertDetails handleOpen={open} handleClose={handleClose}></AlertDetails>
    </>
  );
}
