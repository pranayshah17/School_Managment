import { AddBox, Event, Schedule, SchoolOutlined } from "@mui/icons-material";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonDashboard from "./CommonDashboard";
import AddTeacherPage from "./Principal/AddTeacherPage";
import AssignTeacher from "./Principal/AssignTeacher";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Header from "./Slices/Components/HeaderComponent";
import LeaveManagement from "./Slices/Components/Pages/LeaveManagment";
import LeaveApplicationForm from "./Slices/Components/Pages/LeavePortal";
import LogOut from "./Slices/Components/Pages/LogOut";
import SettingsPage from "./Slices/Components/Pages/Settings";
import TeacherSchedules from "./Slices/Components/Pages/TeacherSchedules";
import Sidebar from "./Slices/Components/Sidebar";
import { RootState } from "./Store/Store";
import StudentLeavePortal from "./Student/StudentLeavePortal";
import AddSchedule from "./Teacher/AddSchedule";
import AssignClassToStudent from "./Teacher/AssignClassToStudent";
import LeaveManagementTeacher from "./Teacher/LeaveManagementTeacher";
import ManageStudent from "./Teacher/ManageStudent";
import StudentAttendance from "./Teacher/StudentAttendace";
import LoginPage from "./login_signup/LoginPage";
import RegistrationForm from "./login_signup/RegistrationForm";

interface Teacher {
  id: number;
  firstname: string;
  lastname: string;
  // ... other properties
}

interface TeacherState {
  data: Teacher[];
  // ... other state properties
}

function App() {
  const teacherList = useSelector((state: RootState) => state.teacher.data);
  const [isOpen, setIsOpen] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const authToken = localStorage.getItem("authToken");
    return !!authToken; // Convert to boolean
  });

  const handleLogin = (userData: any) => {
    setUserinfo(userData);
    setIsAuthenticated(true);
    setLoginSuccess(true);
    localStorage.setItem("authToken", userData.token);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("authToken"); // Remove token from localStorage
      setUserinfo(null); // Clear user info
      setIsAuthenticated(false); // Navigate to login page
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
        route: "/addteacherpage",
      },
      {
        icon: <EventNoteIcon />,
        text: "Teacher Schedules",
        route: "/teacherschedules",
      },
      {
        icon: <EventNoteIcon />,
        text: "Assign Teacher",
        route: "/assignteacher",
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

  const authenticatedRoutes = isAuthenticated ? (
    <>
      <Route
        path="/commondashboard"
        element={
          <PrivateRoute>
            <CommonDashboard role={user.role} />
          </PrivateRoute>
        }
      />
      {/* Other authenticated routes */}
    </>
  ) : (
    <Route path="/*" element={<LoginPage handleLogin={handleLogin} />} />
  );
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App" style={{ display: "flex" }}>
          <CssBaseline />

          {isAuthenticated && <Sidebar menuItems={menuItems} />}
          <div style={{ flex: 1 }}>
            {isAuthenticated && <Header user={user} menuItems={menuItems} />}
            <div>
              <Routes>
                <Route
                  path="/commondashboard"
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
                  path="/addteacherpage/*"
                  element={
                    <PrivateRoute>
                      <AddTeacherPage />
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
                  path="/assignteacher/*"
                  element={
                    <PrivateRoute>
                      <AssignTeacher teacherList={teacherList} />
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

                <Route
                  path="/loginpage"
                  element={<LoginPage handleLogin={handleLogin} />}
                />
                <Route
                  path="/registrationpage"
                  element={<RegistrationForm />}
                />
              </Routes>
            </div>
          </div>
        </div>

        {/* <>
            <Routes>
              <Route
                path="/loginpage"
                element={<LoginPage handleLogin={handleLogin} />}
              />
              <Route path="/registrationpage" element={<RegistrationForm />} />
              <Route path="/" element={<RedirectedToLogin />} />
            </Routes>
          </> */}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
