// import { Dashboard } from "@mui/icons-material";
import { Container, CssBaseline, createTheme } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Dashboard from "./Slices/Components/Dashboard";
import Header from "./Slices/Components/HeaderComponent";
import LogOut from "./Slices/Components/LogOut";
import Parents from "./Slices/Components/Parents";
import Profile from "./Slices/Components/Profile";
import Settings from "./Slices/Components/Settings";
import Sidebar from "./Slices/Components/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const theme = createTheme();
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Header /> {/* Pass the isOpen prop to the Header component */}
        <div style={{ display: "flex" }} />
        <div style={{ display: "flex" }}>
          <ThemeProvider theme={theme}>
            <Sidebar />
          </ThemeProvider>
          <Container
            sx={{
              flexGrow: 1,
              paddingTop: "74px", // Adjust this value to match the header height
              paddingLeft: "200px", // Adjust this value to match the sidebar width
            }}
          >
            <Routes>
              <Route path="/parents" element={<Parents />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<LogOut />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
