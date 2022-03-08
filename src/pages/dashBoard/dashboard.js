import "../../components/sideBar/sidebar.css";

import { Box } from "@mui/system";
import Nav from "../../components/nav/Nav";
import React from "react";
import Sidebar from "../../components/sideBar/sidebar";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#8EA739" }}>
      <Nav /> 
      <Box
        style={{
          display: "flex",
          padding: "1em",
        }}
      >
        <Sidebar />
      </Box>
    </div>
  );
};

export default Dashboard;
