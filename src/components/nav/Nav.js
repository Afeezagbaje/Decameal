import * as React from "react";
import Logo from "../logo/Logo";
import NavElement from "../navElement/NavElement";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { NavLink } from "react-router-dom";

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#0005",
        border: 0,
        padding: 0,
        margin: 0,
      }}
      elevation={0}
      position="fixed"
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Logo textColor="white" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  textAlign="center"
                >
                  <NavLink to="/" style={{ textDecoration: "none" }}>
                    <NavElement text="Home" />{" "}
                  </NavLink>
                  <NavLink to="/meals" style={{ textDecoration: "none" }}>
                    <NavElement text="Meals" />{" "}
                  </NavLink>
                  <NavLink to="/about" style={{ textDecoration: "none" }}>
                    <NavElement text="About Us" />{" "}
                  </NavLink>
                  <Button variant="contained" href="/login">
                    Login
                  </Button>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Logo />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Button sx={{ my: 2, color: "white", display: "flex" }}>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <NavElement text="Home" />{" "}
                </NavLink>
                <NavLink to="/meals" style={{ textDecoration: "none" }}>
                  <NavElement text="Meals" />{" "}
                </NavLink>
                <NavLink to="/about" style={{ textDecoration: "none" }}>
                  <NavElement text="About Us" />{" "}
                </NavLink>
                <Button
                  style={{ marginLeft: "20px", width: "142px", height: "53px" }}
                  variant="contained"
                  color="success"
                  href="/login"
                >
                  Login
                </Button>
              </Button>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
