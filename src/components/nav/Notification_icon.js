import "./Notification_icon.css";

import Box from "@mui/material/Card";
import { Link } from "react-router-dom";
import React from "react";

const NotificationDropDown = () => {
  const handleLogOut = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <Box className="notification-dropdown-menu">
      <Link to="/dashboard">Dashboard </Link>
      <Link to="/profiles">Profile </Link>
      <Link to="/dashboard">Tickets </Link>
      <Link to="/">
        <div onClick={handleLogOut}>Logout</div>{" "}
      </Link>
    </Box>
  );
};

export default NotificationDropDown;
