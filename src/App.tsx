import { AddBox, Dashboard, Event, Settings } from "@mui/icons-material";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./Slices/Components/HeaderComponent";
import LeaveManagement from "./Slices/Components/Pages/LeaveManagment";
import LeaveApplicationForm from "./Slices/Components/Pages/LeavePortal";
import LogOut from "./Slices/Components/Pages/LogOut";
import Profile from "./Slices/Components/Pages/Profile";
import TeacherForm from "./Slices/Components/Pages/TeacherForm";
import TeacherSchedules from "./Slices/Components/Pages/TeacherSchedules";
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
  const handleTeacherFormSubmit = (data: any) => {
    // Implement your teacher form submission logic here
    console.log("Teacher form submitted:", data);
  };

  const theme = createTheme();

  const menuItems = [
    {
      icon: <Dashboard />,
      text: "Dashboard",
      route: "/dashboard",
    },
    {
      icon: <Event />,
      text: "Leave Management",
      route: "/leavemanagement",
    },
    {
      icon: <AddBox />,
      text: "Leave Management",
      route: "/leavemanagement",
    },
    {
      icon: <AddBox />,
      text: "Leave Management",
      route: "/leavemanagement",
    },
  ];
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App" style={{ display: "flex" }}>
          <CssBaseline />
          <Sidebar />
          <div style={{ flex: 1 }}>
            <Header />
            <div>
              <Routes>
                <Route path="/" element={<Navigate to="/loginpage" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/leaveportal"
                  element={
                    <LeaveApplicationForm onSubmit={handleLeaveSubmit} />
                  }
                />
                <Route
                  path="/teacherform"
                  element={<TeacherForm onSubmit={handleTeacherFormSubmit} />}
                />
                <Route path="/leavemanagement" element={<LeaveManagement />} />
                <Route
                  path="/teacherschedules"
                  element={<TeacherSchedules />}
                />
                <Route path="/settings" element={<Settings />} />
                <Route path="/logout" element={<LogOut />} />
                <Route
                  path="/registrationpage"
                  element={<RegistrationForm />}
                />
                <Route path="/loginpage" element={<LoginPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
