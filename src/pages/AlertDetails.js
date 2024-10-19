import React from "react";
import { Typography, Button, Drawer, Box, Chip, Avatar } from "@mui/material";
import { Grid } from "@mui/system";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";

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
    <Drawer
      open={handleOpen}
      onClose={handleClose}
      anchor="right"
      PaperProps={{ sx: { width: 600 } }}
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
            Guarantee for the new Berlin Warehouse Loan
          </Typography>
        </Grid>
        <Grid
          container
          spacing={1}
          size={12}
          sx={{
            padding: "20px",
            backgroundColor: "#b5cef777",
          }}
        >
          <Grid>
            <OpenInNewIcon />
          </Grid>
          <Grid>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "12pt", color: "#333" }}
            >
              Go to the document
            </Typography>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Timeline position="left">
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                09:30 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Due date</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                09:30 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Created</TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
        <Grid
          size={12}
          container
          spacing={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid>
            <Chip
              sx={{
                backgroundColor: "green",
                fontSize: "14pt",
                padding: "1rem",
              }}
              avatar={
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  alt="Natacha"
                  src="https://avatar.iran.liara.run/public/45"
                />
              }
              label="Mark Spielberg"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <Chip
              sx={{ backgroundColor: "red", fontSize: "14pt", padding: "1rem" }}
              avatar={
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  alt="Natacha"
                  src="https://avatar.iran.liara.run/public/48"
                />
              }
              label="Tom Spencer"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid size={10} offset={{ md: 1 }} sx={{ marginTop: "1rem" }}>
          <Typography>
            <Typography variant="body1" align="justify">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui dolorem ipsum, quia dolor sit, amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt, ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit, qui in ea
              voluptate velit esse, quam nihil molestiae consequatur, vel illum,
              qui dolorem eum fugiat, quo voluptas nulla pariatur?
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Drawer>
  );
}
