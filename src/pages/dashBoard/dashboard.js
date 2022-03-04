import { Box } from "@mui/system";
import React from "react";
import Content from "./content";
import "../sideBar/sidebar.css";
import Sidebar from "../sideBar/sidebar";


const Dashboard = () => {
  return (
    <Box
      style={{
        display: "flex",
        padding: "1em"
      }}
    >
      <Sidebar />
      <Box
        style={{
          width: "calc(100% - 320px)",
        }}
      >
        <Content />
      </Box>
    </Box>
  );
};

export default Dashboard;
