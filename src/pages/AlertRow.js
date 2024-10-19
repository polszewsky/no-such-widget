import { Alert, Chip, Typography, Button } from "@mui/material";
import { Grid } from "@mui/system";
import React from "react";
import InfoIcon from '@mui/icons-material/Info';
import AlertDetails from "./AlertDetails";

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
          minHeight: "25px",
          padding: "2px 4px 2px 4px",
          justifyContent: "center",
          alignItems: "center",
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
            }}
            spacing={1}
          >
            <Grid
              item
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/** THI IS TYPE : automtic / manual / external*/}
              <Alert severity="success" sx={{ paddingLeft: "26px" }} />
            </Grid>
            <Grid
              item
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Chip
                color="error"
                size="small"
                label="due 4 days"
                variant="outlined"
                //sx={{ borderRadius: "2px" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={10}>
          <Grid container direction="column">
            <Grid container sx={{ marginBottom: "-12px" }}>
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
              <Grid>
                {/** THI IS DATE OF PUBLICATION IF EXSISRS */}
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", fontSize: "8pt", color: "#999" }}
                >
                  2024-12-12
                </Typography>
                <Button onClick={handleOpen} variant="contained">
                  DEtails
                </Button>
              </Grid>
            </Grid>

            <Grid>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "14pt", color: "#555" }}
              >
                {/** TITLE CARD */}
                Tiltle title great title
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
      </Grid>
      <hr style={{ borderColor: "#fff" }} />
      
      <AlertDetails handleOpen={open} handleClose={handleClose}></AlertDetails>
    </>
  );
}
