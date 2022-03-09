import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login, loginSuccess } from "../../store/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  }); // {email: ol@gmail.com, password: pfsf}

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginURL = "http://0.0.0.0:8000/api/v1/auth/login/";
    try {
      const reqBody = {
        email: loginCredentials.email,
        password: loginCredentials.password,
      };
      const response = await axios.post(loginURL, reqBody);
      console.log(response);
      localStorage.setItem("decameal_token", response.data.data.token);
      loginSuccess({ token: response.data.data.token, data: [reqBody] });
      navigate("/");
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const dispatch = useAppDispatch();

  const handleCredentialChange = (e) => {
    setLoginCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (auth && auth.token) {
      window.location = "/";
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    dispatch(login(loginCredentials));
  };

  return (
    <Box className="lg-container">
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
          <form className="login_form" onSubmit={handleLogin}>
            <Box className="password_container">
              <TextField
                fullWidth
                variant="outlined"
                type={"text"}
                className="input_email"
                placeholder="Email"
                name="email"
                onChange={handleCredentialChange}
              />
            </Box>
            <Box className="password_container">
              <TextField
                fullWidth
                variant="outlined"
                type={passwordShown ? "text" : "password"}
                className="input_password"
                placeholder="Password"
                name="password"
                onChange={handleCredentialChange}
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
              disabled={auth.loading}
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
