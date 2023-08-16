import { AddBox, Event, Schedule } from "@mui/icons-material";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CommonDashboard from "./CommonDashboard";
import Header from "./Slices/Components/HeaderComponent";
import LeaveManagement from "./Slices/Components/Pages/LeaveManagment";
import LeaveApplicationForm from "./Slices/Components/Pages/LeavePortal";
import LogOut from "./Slices/Components/Pages/LogOut";
import Profile from "./Slices/Components/Pages/Profile";
import Settings from "./Slices/Components/Pages/Settings";
import TeacherForm from "./Slices/Components/Pages/TeacherForm";
import TeacherSchedules from "./Slices/Components/Pages/TeacherSchedules";
import Sidebar from "./Slices/Components/Sidebar";
import AddSchedule from "./Teacher/AddSchedule";
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

  const user = {
    name: "John Doe",
    role: "teacher",
    avatarUrl: "userlogo.jpg", // Replace with actual avatar URL
  };

  interface MenuItem {
    icon: React.ReactNode;
    text: string;
    route: string;
  }
  const theme = createTheme();
  let menuItems: MenuItem[] = [];

  if (user.role === "principal") {
    menuItems = [
      {
        icon: <Event />,
        text: "Leave Management",
        route: "/leavemanagement",
      },
      {
        icon: <AddBox />,
        text: "Add Teacher",
        route: "/teacherform",
      },
      {
        icon: <EventNoteIcon />,
        text: "Teacher Schedules",
        route: "/teacherschedules",
      },
    ];
  } else if (user.role === "teacher") {
    menuItems = [
      {
        icon: <Schedule />,
        text: "Add Schedule",
        route: "/addSchedule",
      },
    ];
  } else if (user.role === "student") {
    menuItems = [];
  }
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App" style={{ display: "flex" }}>
          <CssBaseline />
          <Sidebar menuItems={menuItems} />
          <div style={{ flex: 1 }}>
            <Header user={user} menuItems={menuItems} />
            <div>
              <Routes>
                <Route path="/" element={<Navigate to="/loginpage" />} />
                <Route
                  path="/commondashboard"
                  element={<CommonDashboard role={user.role} />}
                />
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
                <Route path="/addschedule" element={<AddSchedule />} />
              </Routes>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
