import { Box } from "@mui/system";
import React from "react";
import "../../components/sideBar/sidebar.css";
import Sidebar from "../../components/sideBar/sidebar";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#8EA739" }}>
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
