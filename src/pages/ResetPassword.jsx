import { Box } from "@mui/material";
import React from "react";
import "./reset.css";

const ResetPassword = () => {
  return (
    <div className="container">
      <Box
        className="left-side"
        sx={{ display: { xs: "none", md: "block" }, marginRight: "5px" }}
      >
      </Box>

      <Box className="right-side" sx={{}}>
        <h1 className="title">Reset Password!</h1>
        <div className="form_container">
          <form className="reset-form">
            <div className="password-container">
              <input
                type="password"
                className="password"
                placeholder="Old Password"
              />
              <span className="show_password">show</span>
            </div>
            <div className="password-container">
              <input
                type="password"
                className="password"
                placeholder="New Password"
              />
              <span className="show_password">show</span>
            </div>
            <input
              type="button"
              className="submit_button"
              name="submit"
              value="Reset"
            />
          </form>
        </div>
      </Box>
    </div>
  );
};

export default ResetPassword;
