import "./Notification_icon.css";

import Box from "@mui/material/Card";
import { Link } from "react-router-dom";
import React from "react";

const NotificationDropDown = () => {
  return (
    <Box className="notification-dropdown-menu">
      <Link to="/dashboard">Dashboard </Link>
      <Link to="/profiles">Profile </Link>
      <Link to="/tickets">Tickets </Link>
      <Link to="/logout">Logout </Link>
    </Box>
  );
};

export default NotificationDropDown;
