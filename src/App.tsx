import { AddBox, Event, Schedule, SchoolOutlined } from "@mui/icons-material";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import CommonDashboard from "./CommonDashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Header from "./Slices/Components/HeaderComponent";
import LeaveManagement from "./Slices/Components/Pages/LeaveManagment";
import LeaveApplicationForm from "./Slices/Components/Pages/LeavePortal";
import LogOut from "./Slices/Components/Pages/LogOut";
import SettingsPage from "./Slices/Components/Pages/Settings";
import TeacherForm from "./Slices/Components/Pages/TeacherForm";
import TeacherSchedules from "./Slices/Components/Pages/TeacherSchedules";
import Sidebar from "./Slices/Components/Sidebar";
import StudentLeavePortal from "./Student/StudentLeavePortal";
import AddSchedule from "./Teacher/AddSchedule";
import AssignClassToStudent from "./Teacher/AssignClassToStudent";
import LeaveManagementTeacher from "./Teacher/LeaveManagementTeacher";
import ManageStudent from "./Teacher/ManageStudent";
import StudentAttendance from "./Teacher/StudentAttendace";
import LoginPage from "./login_signup/LoginPage";
import RegistrationForm from "./login_signup/RegistrationForm";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [userinfo, setUserinfo] = useState(null); // Change to initial user state

  const location = useLocation();

  const isLoginPage = location.pathname.startsWith("/login");
  const isRegistrationPage = location.pathname.startsWith("/registrationpage");

  const handleLogin = (userData: any) => {
    setUserinfo(userData);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("authToken"); // Remove token from localStorage
      setUserinfo(null); // Clear user info
      // navigate("/loginpage"); // Navigate to login page
    }
  };

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { role } = useSelector((state: any) => state.auth);

  const user = {
    name: "John Doe",
    role: role,
    avatarUrl: "userlogo.jpg", // Replace with actual avatar URL
  };

  // const isLoggedIn = !!userinfo;

  // If not logged in, show the login page
  // if (!isLoggedIn) {
  //   return <LoginPage handleLogin={handleLogin} />;
  // }
  interface MenuItem {
    icon: React.ReactNode;
    text: string;
    route: string;
  }
  const theme = createTheme();
  let menuItems: MenuItem[] = [];

  if (user.role === "Principal") {
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
  } else if (user.role === "Teacher") {
    menuItems = [
      {
        icon: <Schedule />,
        text: "Add Schedule",
        route: "/addSchedule",
      },
      {
        icon: <SchoolOutlined />,
        text: "Assign Class",
        route: "/assignclasstostudent",
      },
      {
        icon: <SchoolOutlined />,
        text: "Manage Student",
        route: "/managestudent",
      },
      {
        icon: <Event />,
        text: "Leave Portal",
        route: "/leavemanagementteacher",
      },
      {
        icon: <Event />,
        text: "student Attendance",
        route: "/studentattendance",
      },
    ];
  } else if (user.role === "Student") {
    menuItems = [
      {
        icon: <Event />,
        text: "Leave Portal",
        route: "/StudentLeavePortal",
      },
    ];
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App" style={{ display: "flex" }}>
          <CssBaseline />
          {!isLoginPage && !isRegistrationPage && (
            <>
              <Sidebar menuItems={menuItems} />
            </>
          )}
          <div style={{ flex: 1 }}>
            <Header user={user} menuItems={menuItems} />
            <div>
              {/* <Layout user={user} menuItems={menuItems}> */}
              <Routes>
                <Route
                  path="/commondashboard/*"
                  element={
                    <PrivateRoute>
                      <CommonDashboard role={user.role} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/leaveportal/*"
                  element={
                    <PrivateRoute>
                      <LeaveApplicationForm />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/teacherform/*"
                  element={
                    <PrivateRoute>
                      <TeacherForm />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/leavemanagement/*"
                  element={
                    <PrivateRoute>
                      <LeaveManagement />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/assignclasstostudent/*"
                  element={<AssignClassToStudent />}
                />
                <Route
                  path="/teacherschedules/*"
                  element={
                    <PrivateRoute>
                      <TeacherSchedules />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/settingspage/*"
                  element={
                    <PrivateRoute>
                      <SettingsPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/logout/*"
                  element={
                    <PrivateRoute>
                      <LogOut handleLogout={handleLogout} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/registrationpage/*"
                  element={<RegistrationForm />}
                />
                <Route
                  path="/loginpage"
                  element={<LoginPage handleLogin={handleLogin} />}
                />
                <Route
                  path="/addschedule/*"
                  element={
                    <PrivateRoute>
                      <AddSchedule />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/managestudent/*"
                  element={
                    <PrivateRoute>
                      <ManageStudent />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/StudentLeavePortal/*"
                  element={
                    <PrivateRoute>
                      <StudentLeavePortal />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/leavemanagementteacher/*"
                  element={
                    <PrivateRoute>
                      <LeaveManagementTeacher />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/studentattendance/*"
                  element={
                    <PrivateRoute>
                      <StudentAttendance />
                    </PrivateRoute>
                  }
                />
              </Routes>
              {/* </Layout> */}
            </div>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
