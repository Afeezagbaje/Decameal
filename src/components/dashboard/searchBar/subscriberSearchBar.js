// import { Box } from "@mui/system";
import { Box } from "@material-ui/core";
import React from "react";
import Search from "./searchIcon.svg";
import "./subscriberSearchBar.css"

const DashboardSearchBar = () => {
  return (
    <>
      <Box
        className="search-box"
        style={{
          borderRadius: "5px",
          width: "716px",
          height: "42px",
          backgroundColor: "#fff",
        }}
      >
        <Box className="inside-search-box">
          <Box className="search-box-left">
            <img
              src={Search}
              alt="search"
              style={{
                width: "20.26px",
                height: "18px",
                color: "#00000066",
                paddingLeft: "52px",
                paddingTop: "12px",
                paddingBottom: "12px",
              }}
            />
          </Box>
          <Box
            className="search-box-right"
            style={{
              fontSize: "16px",
              fontFamily: "poppins",
              color: "#6A6A6A",
              lineHeight: "24px",
              width: "362.5px",
              height: "24px",
              paddingRight: "274.48px",
              paddingTop: "9px",
              paddingBottom: "9px",
            }}
          >
            <input
              type="text"
              placeholder="Search meals, messages and timetable."
            ></input>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DashboardSearchBar;
