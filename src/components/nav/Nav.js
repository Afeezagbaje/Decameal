import * as React from "react";
import Logo from "../logo/Logo";
import NavElement from "../navElement/NavElement";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import navimage from "../../assets/nav_image.png";
import navnotification from "../../assets/bell_notify.png";
import ProfileDropDown from "./Profile_DropDown";
import NotificationDropDown from "./Notification_icon";
import { NavLink } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import HamburgerMenu from "./HamburgerMenu";
import PropTypes from "prop-types";

const Nav = ({ showNotification, numOfNotification, showAvatar, avatar }) => {
  return (
    <AppBar
      sx={{
        backgroundColor: "#0005",
        border: 0,
        padding: 0,
        margin: 0,
        zIndex: 1,
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
            <Logo />
          </Typography>
          <HamburgerMenu
            showNotification={showNotification}
            numOfNotification={numOfNotification}
            showAvatar={showAvatar}
            avatar={avatar}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Logo />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <MenuItem>
              <Button sx={{ my: 2, color: "white", display: "flex" }}>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <NavElement text="Home" />{" "}
                </NavLink>
                <NavLink to="/meals" style={{ textDecoration: "none" }}>
                  <NavElement text="Meals" />{" "}
                </NavLink>
                <NavLink
                  to="/about"
                  style={{ textDecoration: "none", marginRight: "20px" }}
                >
                  <NavElement text="About Us" />{" "}
                </NavLink>

                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  <div className="dropdown">
                    <img
                      src={navnotification}
                      alt="ww"
                      style={{ marginLeft: "30px", maxWidth: "100%",marginTop:"10px" }}
                    />
                    <div className="dropdown-content">
                      <ProfileDropDown />
                    </div>
                  </div>
                  <div className="dropdown">
                    <img
                      src={navimage}
                      alt="ww"
                      style={{ marginLeft: "40px", borderRadius: "50%" }}
                    />
                    <div className="dropdown-content">
                      <NotificationDropDown />
                    </div>
                  </div>
                </Box>
                <Button
                  style={{ marginLeft: "30px", width: "142px", height: "53px" }}
                  variant="contained"
                  color="success"
                  href="/login"
                >
                  Login
                </Button>
                {showNotification && (
                  <Badge
                    badgeContent={numOfNotification}
                    sx={{
                      marginLeft: "2rem",
                      marginRight: "2rem",
                      color: "white",
                    }}
                  >
                    <NotificationsNoneIcon />
                  </Badge>
                )}
                {showAvatar && <Avatar alt="Active User" src={avatar} />}
                {!showNotification && (
                  <Button
                    style={{
                      marginLeft: "20px",
                      width: "150px",
                      padding: "10px",
                    }}
                    variant="contained"
                    color="success"
                    href="/login"
                  >
                    Login
                  </Button>
                )}
                {showNotification && (
                  <Button
                    style={{
                      marginLeft: "20px",
                      width: "150px",
                      padding: "10px",
                    }}
                    variant="contained"
                    color="success"
                    href="/"
                  >
                    Logout
                  </Button>
                )}
              </Button>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Nav.propTypes = {
  showNotification: PropTypes.bool,
  numOfNotification: PropTypes.number,
  showAvatar: PropTypes.bool,
  avatar: PropTypes.string,
};

export default Nav;
