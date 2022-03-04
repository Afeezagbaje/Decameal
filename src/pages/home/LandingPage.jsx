import React from "react";
import { Box, Button } from "@mui/material";
import "./Landing.css";

const LandingPage = () => {
  return (
    <Box className="landing-page">
      <Box className="landing-page-content">
        <Box className="landing-page-title">
          <span className="eat">Eat</span> healthy Natural Food
        </Box>
        <Box className="landing-page-message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magnqua.
        </Box>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "#34A853", height: "53px", maxWidth: "185px"}}
          className="submit_button"
        >
          <span className="button-text">Explore Meals</span>
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
