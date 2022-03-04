import React from "react";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Cards.css";

const Cards = () => {
  return (
    <Box className="Meal">
      <Card sx={{ maxWidth: 277, height: 320 }}>
        <CardMedia
          component="img"
          height="174.98px"
          image="../assets/img/oha.png"
          alt="Oha Soup"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            Oha Soup
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See details</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Cards;


