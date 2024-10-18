import { Container, Grid } from "@mui/system";
import React, { Fragment } from "react";
import Widget from "./Widget";

function HomePage() {
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
