import { Container, Grid } from "@mui/material";

import Cards from "../../../components/Cards/Cards";
import Cereal from "../../../assets/img/cereal.png";
import FruitSalad from "../../../assets/img/fruit-salad.png";
import Onion from "../../../assets/img/onionsalad.png";
import Orange from "../../../assets/img/orange.png";
import Pasta from "../../../assets/img/pasta.png";
import React from "react";
import Samosa from "../../../assets/img/samosa.png";
import Spinach from "../../../assets/img/spinach.png";
import WeirdFood from "../../../assets/img/weirdfood.png"

const MenuCards = () => {
  return (
    <Container>
      <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={Pasta}
        title="Pasta"
        body="Pasta is a type of food typically made from an unleavened dough of wheat."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={FruitSalad}
        title="Fruit Salad"
        body="Fruit salad is a dish consisting of various kinds of fruit, sometimes served in a liquid."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={Cereal}
        title="Cereal"
        body="A cereal is any grass cultivated for the edible components of its grain."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={Orange}
        title="Orange"
        body="An orange is a fruit of various citrus species in the family Rutaceae."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={Spinach}
        title="Spinach"
        body="Spinach is a leafy green flowering plant native to central and western Asia."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={Samosa}
        title="Samosa"
        body="A samosa is a fried or baked pastry with a savory filling, including ingredients."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={Onion}
        title="Onion"
        body="The onion, also known as the bulb onion or common onion, is a vegetable."
      />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Cards
        image={WeirdFood}
        title="Spicey meatballs"
        body="They're made with lean beef, flavored with garlic and Sriracha, baked."
      />
      </Grid>
      </Grid>
    </Container>
  );
};

export default MenuCards;
