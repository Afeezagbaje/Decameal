import React from "react";
import { Box, Typography } from "@mui/material";
const MenuContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "18px",
          fontWeight: "700",
          color: "#fff",
          fontSize: "48px",
          fontFamily: "Work Sans",
        }}
      >
        Our Menu
      </Typography>
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          marginBottom: "18px",
          fontWeight: "400",
          color: "#1C1C1C",
          fontSize: "16px",
          fontFamily: "Poppins",
        }}
      >
        Fish is one of the most wholesome foods that man can eat. In fact,
        people have been eating fish throughout human
      </Typography>
      <Box
        sx={{
          width: "120px",
          border: "2px solid #34A853",
          backgroundColor: "#34A853",
          marginBottom: "72px",
        }}
      ></Box>

    </Box>
  );
};

export default MenuContent;
