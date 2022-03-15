import React from "react";
import { Box, Typography } from "@mui/material";
import ChefOne from "../../../assets/img/chef_1.png";
import ChefTwo from "../../../assets/img/chef_2.png";
import ChefThree from "../../../assets/img/chef_3.png";

// import { width } from "@mui/system";

const Footer = () => {
  return (
    <Box
      className="footerContainer"
      style={{
        backgroundColor: "#fff",
        height: "159px",
        borderRadius: "5px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ textAlign: "center", paddingTop: "14px", fontFamily: "poppins" }}
      >
        Staffs on Duty
      </Typography>

      <Box
        className="staffProfile"
        style={{
          display: "flex",
          gap: "32px",
          padding: "11px 52px",
        }}
      >
        <Box
          style={{
            display: "flex",
            gap: "28px",
          }}
        >
          <Box
            style={{
              height: "100px",
            }}
          >
            <img
              src={ChefOne}
              alt=""
              style={{
                width: "102px",
                height: "100%",
                display: "inline",
              }}
            />
          </Box>
          <Box style={{ paddingRight: "30px" }}>
            <Typography style={{ textAlign: "left" }}>Frank Maduka</Typography>
            <Typography style={{ textAlign: "left" }}>Head Chef</Typography>
            <Typography style={{ textAlign: "left", fontSize: "10px" }}>
              Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque
            </Typography>
          </Box>
        </Box>{" "}
        <Box
          style={{
            display: "flex",
            gap: "28px",
          }}
        >
          <Box
            style={{
              height: "100px",
            }}
          >
            <img
              src={ChefTwo}
              alt=""
              style={{
                width: "102px",
                height: "100%",
                display: "inline",
              }}
            />
          </Box>
          <Box style={{ paddingRight: "30px" }}>
            <Typography style={{ textAlign: "left" }}>Mba Azuka</Typography>
            <Typography style={{ textAlign: "left" }}>Chef</Typography>
            <Typography style={{ textAlign: "left", fontSize: "10px" }}>
              Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque
            </Typography>
          </Box>
        </Box>{" "}
        <Box
          style={{
            display: "flex",
            gap: "28px",
          }}
        >
          <Box
            style={{
              height: "100px",
            }}
          >
            <img
              src={ChefThree}
              alt=""
              style={{
                width: "102px",
                height: "100%",
                display: "inline",
              }}
            />
          </Box>
          <Box style={{ paddingRight: "30px" }}>
            <Typography style={{ textAlign: "left" }}>Ike Sunday</Typography>
            <Typography style={{ textAlign: "left" }}>Chef</Typography>
            <Typography style={{ textAlign: "left", fontSize: "10px" }}>
              Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
