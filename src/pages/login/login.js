import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <Box className="container">
      <Box
        className="bg_container"
        sx={{ display: { xs: "none", md: "block" }, marginRight: "5px" }}
      ></Box>
      <Box className="input_container">
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "3rem", fontWeight: "600" }}
        >
          Welcome!
        </Typography>
        <Box className="form_container">
          <form className="login_form">
            <Box className="password_container">
              <TextField
                fullWidth
                variant="outlined"
                type={"text"}
                className="input_email"
                placeholder="Email"
              />
            </Box>
            <Box className="password_container">
              <TextField
                fullWidth
                variant="outlined"
                type={passwordShown ? "text" : "password"}
                className="input_password"
                placeholder="Password"
              />
              <span
                onClick={() => setPasswordShown(!passwordShown)}
                className="show_password"
              >
                {passwordShown ? "Hide" : "Show"}
              </span>
            </Box>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#1c1c1c",
                height: "60px",
                maxWidth: "500px",
              }}
              className="submit_button"
            >
              Sign in
            </Button>

            <p className="forgot_password">
              <Link className="forgot-password-link" to="/forgot-password">
                Forgot Password?{" "}
              </Link>
            </p>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
