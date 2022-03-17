import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Nav from "../nav/Nav";
import Sidebar from "../sideBar/sidebar";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import { useMediaQuery } from "@mui/material";
import { userProfile } from "../../store/slices/userProfileSlice";

const DashboardLayer = ({ children }) => {
  const dispatch = useAppDispatch();
  const isTabletView = useMediaQuery("(max-width:900px)");
  const [showSidebar, setShowSidebar] = useState(false);
  const userProfileData = useAppSelector((store) => store.userProfile);
  const { data } = userProfileData;
  const userData = data.data;
  const image =
    userData && userData
      ? userData.avatar
      : "https://res.cloudinary.com/decameal/image/upload/v1646843048/DecaMealAvatar/avatar_lhnohu.jpg";

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: "#8EA739", minHeight: "120vh" }}>
      <Nav
        showNotification={true}
        numOfNotification={3}
        showAvatar={true}
        avatar={image}
      />
      <Box
        style={{
          display: "flex",
          padding: "1em",
        }}
      >
        {isTabletView && (
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => setShowSidebar(!showSidebar)}
            color="inherit"
            sx={{
              position: "absolute",
              left: "10px",
              top: "10px",
              zIndex: "100",
            }}
          >
            <ViewSidebarOutlinedIcon sx={{ color: "white" }} />
          </IconButton>
        )}
        {!isTabletView && <Sidebar />}
        {showSidebar && isTabletView && (
          <>
            <Sidebar
              styling={{ position: "absolute", top: "10px", width: "250px" }}
            />
          </>
        )}
        <Box
          style={{
            width: isTabletView ? "100%" : "72%",
            marginLeft: "2rem",
          }}
        >
          {children}
        </Box>
      </Box>
    </div>
  );
};

export default DashboardLayer;
