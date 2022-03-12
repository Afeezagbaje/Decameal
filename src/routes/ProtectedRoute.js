import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getSavedUserToken } from "../utils";
import Sidebar from "../components/sideBar/sidebar";
import { Box } from "@mui/system";

const ProtectedRoute = () => {
  const isAuthenticated = !!getSavedUserToken();
  return isAuthenticated ? (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ width: "100%" }}>
        <Outlet />
      </Box>
    </Box>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
