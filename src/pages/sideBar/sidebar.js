import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ReactComponent as SpoonLogo } from "./spoon.svg";
import {
  Home,
  AccountCircle,
  Message,
  RoomService,
  ConfirmationNumber,
} from "@mui/icons-material";

const Sidebar = () => {
  const [showdropdown, setShowdropdown] = React.useState(false);
  return (
    <Box className="side-bar">
      <Box className="top-side-bar">
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontWeight: "900",
            fontSize: "36px",
            color: "#FFFFFF",
            marginTop: "35.24px",
          }}
        >
          DecaMea
          <SpoonLogo />
        </Typography>
      </Box>

      <Box className="side-bar-nav">
        <Box
          className="dashboard"
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          <NavLink
            to="/dashboard"
            style={{
              display: "flex",
              width: "100%",
              textDecoration: "none",
              marginTop: "1em",
              marginBottom: "1em",
              color: "#FFFFFF",
              gap: "0.5em",
              padding: ".5em",
              borderRadius: "10px",
            }}
          >
            <Home sx={{ width: "15%" }} />
            <Typography>Dashboard</Typography>
          </NavLink>
        </Box>

        <Box
          className="profile"
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <NavLink
            to="/profile"
            style={{
              display: "flex",
              width: "100%",
              textDecoration: "none",
              marginTop: "1em",
              marginBottom: "1em",
              color: "#FFFFFF",
              gap: "0.5em",
              padding: ".5em",
              borderRadius: "10px",
            }}
          >
            <AccountCircle sx={{ width: "15%" }} />
            <Typography>Your Profile</Typography>
          </NavLink>
        </Box>

        <Box
          className="message"
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            width: "267px",
          }}
        >
          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              setShowdropdown(!showdropdown)}}
            style={{
              display: "flex",
              width: "100%",
              textDecoration: "none",
              marginTop: "1em",
              marginBottom: "1em",
              color: "#FFFFFF",
              gap: "0.5em",
              padding: ".5em",
              borderRadius: "10px",
            }}
          >
            <Message sx={{ width: "15%" }} />
            <Typography className="dropdown-text">
              Messages{" "}
              <span className={showdropdown ? "turn-caret" : ""}>&gt;</span>
            </Typography>
          </NavLink>
        </Box>
        {showdropdown ? (
          <>
            <Box
              className="dropdown"
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <NavLink
                to="/"
                style={{
                  display: "flex",
                  width: "100%",
                  textDecoration: "none",
                  color: "#FFFFFF",
                  gap: "0.5em",
                  padding: ".5em",
                  borderRadius: "10px",
                }}
              >
                <Typography>Inbox</Typography>
              </NavLink>
            </Box>
            <Box
              className="dropdown"
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <NavLink
                to="/"
                style={{
                  display: "flex",
                  width: "100%",
                  textDecoration: "none",
                  color: "#FFFFFF",
                  gap: "0.5em",
                  padding: ".5em",
                  borderRadius: "10px",
                }}
              >
                <Typography>Outbox</Typography>
              </NavLink>
            </Box>
            <Box
              className="dropdown"
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <NavLink
                to="/"
                style={{
                  display: "flex",
                  width: "100%",
                  textDecoration: "none",
                  color: "#FFFFFF",
                  gap: "0.5em",
                  padding: ".5em",
                  borderRadius: "10px",
                }}
              >
                <Typography>Compose</Typography>
              </NavLink>
            </Box>
          </>
        ) : (
          ""
        )}

        <Box
          className="messages"
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <NavLink
            to="/"
            style={{
              display: "flex",
              width: "100%",
              textDecoration: "none",
              marginTop: "1em",
              marginBottom: "1em",
              color: "#FFFFFF",
              gap: "0.5em",
              padding: ".5em",
              borderRadius: "10px",
            }}
          >
            <RoomService sx={{ width: "15%" }} />
            <Typography>Tickets</Typography>
          </NavLink>
        </Box>

        <Box
          className="subscribers"
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <NavLink
            to="/"
            style={{
              display: "flex",
              width: "100%",
              textDecoration: "none",
              marginTop: "1em",
              marginBottom: "1em",
              color: "#FFFFFF",
              gap: "0.5em",
              padding: ".6em .5em",
              borderRadius: "10px",
            }}
          >
            <ConfirmationNumber sx={{ width: "15%" }} />
            <Typography>Subscribers</Typography>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
