import { Container, Grid } from "@mui/system";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredNotifications } from "../slices/notificationsList";
import Widget from "./Widget";

function HomePage() {
  const dispatch = useDispatch();
  const { type } = useSelector((store) => store.filter.filters);

  useEffect(() => {
    dispatch(getFilteredNotifications(type));
  }, [dispatch, type]);

  return (
    <Fragment>
      <Container fixed sx={{ marginTop: "20vh" }}>
        <Grid
          container
          spacing={2}
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <Grid size={8}>
            <Widget />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default HomePage;
