import { Mail, Notifications, Search as SearchIcon } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { incrementNotifications, setSearchQuery } from "../HeaderSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { notificationsCount, searchQuery } = useSelector(
    (state: RootState) => state.header
  );
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
    position: "fixed",
    backgroundColor: "black",
    transition: "width 0.2s",
    zIndex: 1,
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static" style={headerStyles}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            style={{
              marginLeft: isOpen ? "200px" : "100px",
              transition: "margin 0.2s",
            }}
          >
            Dashboard
          </Typography>
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
            <IconButton color="inherit" onClick={handleIncrementNotifications}>
              <Badge badgeContent={notificationsCount} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={3} color="error">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton color="inherit"></IconButton>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "6px",
              }}
            >
              <Avatar alt="User Profile" src="/path_to_avatar_image.jpg" />
            </div>
            <div>
              <Typography
                variant="subtitle1"
                style={{ marginTop: "5px", fontWeight: "bold", color: "white" }}
              >
                Pranay
              </Typography>
              <Typography variant="body2" style={{ color: "white" }}>
                Admin
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
