import React from "react";
import { Container, Grid } from "@mui/material";
import Cards from "../../../components/Cards/Cards";
import Pasta from "../../../assets/img/pasta.png";
import FruitSalad from "../../../assets/img/fruit-salad.png";
import Cereal from "../../../assets/img/cereal.png";
import Orange from "../../../assets/img/orange.png";
import Spinach from "../../../assets/img/spinach.png";
import Samosa from "../../../assets/img/samosa.png";
import Onion from "../../../assets/img/onionsalad.png";
import WeirdFood from "../../../assets/img/weirdfood.png"
const MenuCards = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={Pasta}
        title="Spicey meatballs"
        body="Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque"
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={FruitSalad}
        title="Spicey meatballs"
        body="Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque"
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={Cereal}
        title="Spicey meatballs"
        body="Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque"
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={Orange}
        title="Spicey meatballs"
        body="Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque"
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={Spinach}
        title="Spicey meatballs"
        body="Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque"
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={Samosa}
        title="Spicey meatballs"
        body="Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque"
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={Onion}
        title="Spicey meatballs"
        body="Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque"
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={WeirdFood}
        title="Spicey meatballs"
        body="Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque"
      />
      </Grid>
      </Grid>
    </Container>
  );
};

export default MenuCards;
