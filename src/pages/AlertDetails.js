import React from "react";
import { Typography, Button, Modal, Box } from "@mui/material";
import { Grid } from "@mui/system";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const styleModal = {
  position: "absolute",
  top: 0,
  right: 0,
  width: 500,
  height: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const styleBottonButton = {
  bottom: 100,
  right: 50,
  width: 200,
  height: 40,
  position: "absolute",
  backgroundColor: "#663399",
  color: "white",
};

export default function AlertDetails({ handleOpen, handleClose }) {
  return (
    <div>
      <Grid>
        <Modal
          open={handleOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <Grid>
              <Typography sx={{ fontStyle: "italic", color: "red" }}>
                Document needs your approval
              </Typography>
            </Grid>
            <Grid
              size={12}
              spacing={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
              paddingBottom={5}
            >
              <PriorityHighIcon
                size={4}
                style={{ fontSize: 64 }}
              ></PriorityHighIcon>
              <Typography size={8} sx={{ fontStyle: "bold", fontSize: 36 }}>
                Guarantee for the new Berlin Warehouse Loan
              </Typography>
            </Grid>
            <Grid container size={12} display="flex">
              <Grid size={1}>
                <CalendarMonthIcon></CalendarMonthIcon>
              </Grid>
              <Grid size={2}>
                <Typography>Created</Typography>
              </Grid>
              <Grid size={2}>
                <Typography>18.10.2024</Typography>
              </Grid>
            </Grid>
            <Grid container display="flex" paddingBottom={5}>
              <Grid size={1}>
                <CalendarMonthIcon></CalendarMonthIcon>
              </Grid>
              <Grid size={2}>
                <Typography>Due date</Typography>
              </Grid>
              <Grid size={2}>
                <Typography>29.10.2024</Typography>
              </Grid>
            </Grid>
            <Grid container display="flex" paddingBottom={3}>
              <Grid size={6}>
                <Typography>Mark Spielberg</Typography>
              </Grid>
              <Grid size={6}>
                <Button sx={{ backgroundColor: "#DDA0DD", color: "white" }}>
                  Approved
                </Button>
              </Grid>
            </Grid>
            <Grid container display="flex" paddingBottom={3}>
              <Grid size={6}>
                <Typography>Tom Spencer</Typography>
              </Grid>
              <Grid size={6}>
                <Button sx={{ backgroundColor: "#663399", color: "white" }}>
                  Awaits Approval
                </Button>
              </Grid>
            </Grid>
            <Grid container display="flex">
              <Typography sx={{ fontSize: 24 }}>Description</Typography>
            </Grid>
            <Grid container display="flex">
              <Typography>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia
                voluptas sit, aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos, qui ratione voluptatem sequi
                nesciunt, neque porro quisquam est, qui dolorem ipsum, quia
                dolor sit, amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt, ut labore et dolore magnam
                aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit, qui in ea voluptate velit esse, quam nihil
                molestiae consequatur, vel illum, qui dolorem eum fugiat, quo
                voluptas nulla pariatur?
              </Typography>
            </Grid>
            <Grid container display="flex">
              <Button sx={styleBottonButton}>Go to document</Button>
            </Grid>
          </Box>
        </Modal>
      </Grid>
    </div>
  );
}
