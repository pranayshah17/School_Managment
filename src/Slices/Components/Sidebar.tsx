import styled from "@emotion/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SchoolIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../Store/Store";
import { toggleSidebar } from "../SlidebarSlices";

const drawerWidth = 180;
const drawerWidthCollapsed = 85;

export const DrawerHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "10",
  zIndex: 10,
  right: -10,
});

export const LogoImage = styled("img")({
  width: "40px",
  height: "40px",
  paddingTop: "5px",
});

export const LogoText = styled("p")({
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0",
  paddingTop: "5px",
  paddingLeft: "5px",
});
export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  "&.active": {
    backgroundColor: "black", // Change to your desired active background color
    color: "white", // Change to your desired active text color
    "& .MuiListItemIcon-root": {
      color: "white", // Change to your desired active icon color
    },
  },
  "&:hover": {
    backgroundColor: "grey", // Change to your desired hover background color
    color: "white", // Change to your desired hover text color
    "& .MuiListItemIcon-root": {
      color: "inherit", // Change to your desired hover icon color
    },
  },
}));

const Sidebar: React.FC<any> = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const [hideContent, setHideContent] = useState(false);
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
    setHideContent(!hideContent); // Toggle content visibility
  };
  // const [isSidebarOpen, setIsSidebarOpen] = useState(!isSmallScreen);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  if (isSmallScreen) {
    return null; // Don't render anything on small screens
  }

  const StyledDrawer = styled(Drawer)(({ theme }) => ({
    width: isOpen ? drawerWidth : drawerWidthCollapsed,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    transition: "width 2s ease-in-out !important",
    "& .MuiDrawer-paper": {
      width: isOpen ? drawerWidth : drawerWidthCollapsed,
      transition: "width 2s ease-in-out ",
      boxSizing: "border-box",
      overflowX: "hidden",
    },
  }));

  return (
    <ThemeProvider theme={theme}>
      <StyledDrawer
        sx={{
          width: isOpen ? drawerWidth : drawerWidthCollapsed,
          flexShrink: 0,
        }}
        variant="permanent"
        open={isOpen}
        anchor="left"
      >
        <DrawerHeader>
          <LogoContainer>
            <LogoImage src="logo.png" alt="School Logo" />
            {isOpen && <LogoText>School Name</LogoText>}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                right: 12,
                zIndex: 10,
              }}
            >
              <IconButton
                onClick={handleToggleSidebar}
                sx={{
                  background: "gray",
                  height: 25,
                  width: 25,
                  top: 13,
                  position: "fixed",
                  color: "white",
                  "&:hover": {
                    background: "gray",
                  },
                }}
              >
                {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
          </LogoContainer>
        </DrawerHeader>
        <List>
          <ListItem component={StyledNavLink} to="/profile">
            <ListItemIcon style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <AccountCircleIcon />
              </div>
            </ListItemIcon>
            <ListItemText primary={hideContent ? "" : "Profile"} />
          </ListItem>
          <ListItem component={StyledNavLink} to="/dashboard">
            <ListItemIcon style={{ display: "flex", justifyContent: "center" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={hideContent ? "" : "Dashboard"} />
          </ListItem>
          <ListItem component={StyledNavLink} to="/leaveportal">
            <ListItemIcon style={{ display: "flex", justifyContent: "center" }}>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary={hideContent ? "" : "leaveportal"} />
          </ListItem>

          <ListItem component={StyledNavLink} to="/settings">
            <ListItemIcon style={{ display: "flex", justifyContent: "center" }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={hideContent ? "" : "Settings"} />
          </ListItem>
          <ListItem component={StyledNavLink} to="/logout">
            <ListItemIcon style={{ display: "flex", justifyContent: "center" }}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={hideContent ? "" : "Logout"} />
          </ListItem>
          <ListItem component={StyledNavLink} to="/loginpage">
            <ListItemIcon style={{ display: "flex", justifyContent: "center" }}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={hideContent ? "" : "Login"} />
          </ListItem>
        </List>
      </StyledDrawer>
    </ThemeProvider>
  );
};

export default Sidebar;
