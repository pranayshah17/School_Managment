import {
  Dashboard,
  ExitToApp,
  Mail,
  Menu,
  Notifications,
  Search as SearchIcon,
  Settings,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box, styled } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { incrementNotifications, setSearchQuery } from "../HeaderSlice";
import {
  DrawerHeader,
  LogoContainer,
  LogoImage,
  LogoText,
  StyledNavLink,
} from "./Sidebar";

const Header: React.FC<any> = ({ menuItems, user }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const { notificationsCount, searchQuery } = useSelector(
    (state: RootState) => state.header
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const handleIncrementNotifications = () => {
    dispatch(incrementNotifications());
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    dispatch(setSearchQuery(query));
  };
  const searchContainerStyles: React.CSSProperties = {
    position: "relative",
    borderRadius: "4px",
    backgroundColor: "#eee",
    marginLeft: "200px",
    width: "40%",
    height: "40px",
  };
  const searchIconStyles: React.CSSProperties = {
    padding: "2px",
    paddingLeft: "10px",
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    color: "black",
  };
  const inputStyles: React.CSSProperties = {
    padding: "10px 10px 10px 40px",
    width: "100%",
    color: "black",
  };
  const iconsContainerStyles: React.CSSProperties = {
    display: "flex",
    gap: "10px",
  };
  const headerStyles: React.CSSProperties = {
    position: "sticky",
    backgroundColor: "black",
    transition: "width 0.2s",
    zIndex: 1,
    display: "flex",
    flexGrow: 1,
  };
  const CustomDrawer = styled(Drawer)(({ theme }) => ({
    width: "400px", // Set the desired width here
    [theme.breakpoints.up("md")]: {
      // Adjust the width for larger screens if needed
      width: "400px",
    },
  }));
  const CustomListItemIcon = styled(ListItemIcon)(() => ({
    justifyContent: "center",
  }));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen); // Toggle the drawer state
  };

  return (
    <AppBar position="static" style={headerStyles}>
      <Toolbar>
        {isMobile && (
          <>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
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
                  ></div>
                </LogoContainer>
              </DrawerHeader>
              <List>
                <ListItem component={StyledNavLink} to="/commondashboard">
                  <ListItemIcon
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Dashboard />
                  </ListItemIcon>
                  <ListItemText primary={"Dashboard"} />
                </ListItem>
                {menuItems.map((item: any) => (
                  <ListItem
                    button
                    key={item.text}
                    component={StyledNavLink}
                    to={item.route}
                  >
                    <CustomListItemIcon>{item.icon}</CustomListItemIcon>

                    <ListItemText primary={isOpen ? item.text : ""} />
                  </ListItem>
                ))}
              </List>
              <List>
                <ListItem component={StyledNavLink} to="/settings">
                  <ListItemIcon
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary={"Settings"} />
                </ListItem>
                <ListItem component={StyledNavLink} to="/logout">
                  <ListItemIcon
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <ExitToApp />
                  </ListItemIcon>
                  <ListItemText primary={"Logout"} />
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
        {!isMobile && !isTablet && (
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        )}
        <div style={searchContainerStyles}>
          <div style={searchIconStyles}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            value={searchQuery}
            onChange={handleSearch}
            style={inputStyles}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div style={{ flexGrow: 1 }} />
        <div style={iconsContainerStyles}>
          {!isMobile && !isTablet && (
            <IconButton color="inherit" onClick={handleIncrementNotifications}>
              <Badge badgeContent={notificationsCount} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          )}
          {!isMobile && !isTablet && (
            <IconButton color="inherit">
              <Badge badgeContent={3} color="error">
                <Mail />
              </Badge>
            </IconButton>
          )}
          <IconButton color="inherit"></IconButton>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "6px",
              cursor: "pointer",
            }}
            onClick={() => setDrawerOpen(true)}
          >
            <Avatar alt="User Profile" src="/path_to_avatar_image.jpg" />
          </div>
          <div
            onClick={() => setDrawerOpen(true)}
            style={{ cursor: "pointer" }}
          >
            {!isMobile && !isTablet && (
              <Typography
                variant="subtitle1"
                style={{ marginTop: "5px", fontWeight: "bold", color: "white" }}
              >
                {user.name}
              </Typography>
            )}
            {!isMobile && !isTablet && (
              <Typography variant="body2" style={{ color: "white" }}>
                {user.role}
              </Typography>
            )}
          </div>
        </div>
      </Toolbar>
      <CustomDrawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        // style={{ width: "500px" }}
      >
        <Box style={{ padding: "16px", width: "300px" }}>
          <Avatar
            alt="User Profile"
            src="/path_to_avatar_image.jpg"
            style={{ width: "100px", height: "100px", margin: "0 auto" }}
          />
          <Typography
            variant="h6"
            style={{ marginTop: "10px", textAlign: "center" }}
          >
            {user.name}
          </Typography>
          <Typography variant="body2" style={{ textAlign: "center" }}>
            {user.role}
          </Typography>
        </Box>
      </CustomDrawer>
    </AppBar>
  );
};

export default Header;
