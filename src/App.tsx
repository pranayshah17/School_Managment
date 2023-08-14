import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Slices/Components/Dashboard";
import Header from "./Slices/Components/HeaderComponent";
import LeaveApplicationForm from "./Slices/Components/LeavePortal";
import LogOut from "./Slices/Components/LogOut";
import Profile from "./Slices/Components/Profile";
import Settings from "./Slices/Components/Settings";
import Sidebar from "./Slices/Components/Sidebar";
import LoginPage from "./login_signup/LoginPage";
import RegistrationForm from "./login_signup/RegistrationForm";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLeaveSubmit = (leaveDetails: any) => {
    // Implement your leave submission logic here
    console.log("Leave submitted:", leaveDetails);
  };

  const theme = createTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App" style={{ display: "flex" }}>
          <CssBaseline />
          {/* Add ThemeProvider here */}
          <Sidebar />
          <div style={{ flex: 1 }}>
            <Header /> {/* Pass the isOpen prop to the Header component */}
            <div>
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/loginpage" />} // Set LoginPage as the default route
                />
                <Route
                  path="/leaveportal"
                  element={
                    <LeaveApplicationForm onSubmit={handleLeaveSubmit} />
                  }
                />
                <Route
                  path="/registrationpage"
                  element={<RegistrationForm />}
                />
                <Route path="/loginpage" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/logout" element={<LogOut />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
