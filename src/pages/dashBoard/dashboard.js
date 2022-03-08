import "../../components/sideBar/sidebar.css";
import { Box } from "@mui/system";
import Nav from "../../components/nav/Nav";
import React from "react";
import Sidebar from "../../components/sideBar/sidebar";
// import MainContent from "../../components/dashboard/mainContent/mainContent";
// import SubscriberNotification from "../../components/dashboard/notification/subscriberNotification";
// import SubscriberProfile from "../../components/dashboard/profile/subscriberProfile";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#8EA739" }}>
      <Nav />
      <Box
        style={{
          display: "flex",
          padding: "1em",
          // backgroundColor: "purple",
        }}
      >
        <Sidebar />
        <Box
          style={{
            width: "72%",
            marginLeft: "2rem",
            // backgroundColor: "yellow",
          }}
        >
          {/* <MainContent /> */}
          {/* <SubscriberNotification /> */}
          {/* <SubscriberProfile /> */}
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
