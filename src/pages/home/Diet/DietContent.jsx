import React from "react";
import { Box, Typography } from "@mui/material";
import DietButton from "./DietButton";
const DietContent = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Work Sans",
          fontWeight: "700",
          color: "white",
          fontSize: { xs: "25px", md: "34px" },
          textAlign: { xs: "center", md:"left" },
        }}
      >
        Diet Tips for the Day
      </Typography>
      <Box
        sx={{
          width: "120px",
          border: "2px solid #34A853",
          backgroundColor: "#34A853",
          marginTop: "18px",
          marginLeft: {xs:'30%', md:'0'}
        }}
      ></Box>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "Poppins",
          fontWeight: "400",
          color: "#1C1C1C",
          textAlign: {xs:"center", md: "left"},
          marginTop: {xs: "34px"}
        }}
      >
        Fish is one of the most wholesome foods that man can eat. In fact,
        people have been eating fish throughout human history. These days, many
        cooks yearn Fish is one of the most wholesome foods that man can eat. In
        fact,
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "Poppins",
          fontWeight: "400",
          color: "#1C1C1C",
          textAlign: {xs:"center", md: "left"},
          marginTop: {xs: "34px"}
        }}
      >
        Fish is one of the most wholesome foods that man can eat. In fact,
        people have been eating fish throughout human history. These days, many
        cooks yearn Fish is
      </Typography>
      <Box sx={{ display: { xs:"flex", md:"block"}, justifyContent: "center" }}>
      <DietButton />
      </Box>
    </Box>
  );
};

export default DietContent;
