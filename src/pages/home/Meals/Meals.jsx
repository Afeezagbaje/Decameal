import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import Afang from "../../../assets/img/Afang.png";
import Cards from "../../../components/cards/Cards";
import Egusi from "../../../assets/img/Egusi.png";
import ExploreButton from "./ExploreButton";
import Jollof_image from "../../../assets/img/chicken.png";
import React from "react";

const Meals = () => {
  return (

    <Paper
      elevation={0}
      square
      sx={{ background: "linear-gradient(180deg, #34A853 0%, #92A738 100%)" }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{
          textAlign: "center",
          marginBottom: "81px",
          fontWeight: "700",
          paddingTop: "144px",
          color: "white",
          fontFamily: "Poppins",
        }}
      >
        Meals for your satisfaction
      </Typography>
      <Container>
        <Grid container spacing={12}>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              image={Jollof_image}
              title="Jollof Rice"
              body="Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              image={Egusi}
              title="Egusi Soup & Eba"
              body="Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              image={Afang}
              title="Afang & Semo"
              body="Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque"
            />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ExploreButton />
      </Box>
    </Paper>
  );
};

export default Meals;
