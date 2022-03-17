import React from "react";
import Box from "@mui/material/Card";
import { Link } from "react-router-dom";
import "./Profile_DropDown.css";

const ProfileDropDown = () => {
  return (
    <Box className="Profile-dropdown-menu">
      <Link to="/dashboard/notifications">6 Notifications </Link>
      <Link to="/dashboard/notifications">Frank Maduka <p>Your dinner has been served</p> </Link>
      <Link to="/dashboard/notifications">Frank Maduka <p>Your dinner has been served</p> </Link>
      <Link to="/dashboard/notifications">Frank Maduka <p>Your dinner has been served</p> </Link>
    </Box>
  );
};

export default ProfileDropDown;
