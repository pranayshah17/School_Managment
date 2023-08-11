import styled from "@emotion/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../Store/Store";
import { toggleSidebar } from "../SlidebarSlices";

const DrawerHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "10",
  zIndex: 10,
  right: -10,
});

const LogoImage = styled("img")({
  width: "40px",
  height: "40px",
  paddingTop: "5px",
});

const LogoText = styled("p")({
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0",
  paddingTop: "5px",
  paddingLeft: "5px",
});

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const [hideContent, setHideContent] = useState(false);
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
    setHideContent(!hideContent); // Toggle content visibility
  };
  return (
    <Drawer variant="permanent" open={isOpen}>
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
        <ListItem component={NavLink} to="/profile">
          <ListItemIcon style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AccountCircleIcon />
            </div>
          </ListItemIcon>
          <ListItemText primary={hideContent ? "" : "Profile"} />
        </ListItem>
        <ListItem component={NavLink} to="/dashboard">
          <ListItemIcon style={{ display: "flex", justifyContent: "center" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={hideContent ? "" : "Dashboard"} />
        </ListItem>
        <ListItem component={NavLink} to="/parents">
          <ListItemIcon style={{ display: "flex", justifyContent: "center" }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary={hideContent ? "" : "Parents"} />
        </ListItem>
      </List>
      <List>
        <ListItem component={NavLink} to="/settings">
          <ListItemIcon style={{ display: "flex", justifyContent: "center" }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={hideContent ? "" : "Settings"} />
        </ListItem>
        <ListItem component={NavLink} to="/logout">
          <ListItemIcon style={{ display: "flex", justifyContent: "center" }}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={hideContent ? "" : "Logout"} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
