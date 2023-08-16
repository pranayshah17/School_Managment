import React from "react";
import PrincipalDashboardPage from "./Slices/Components/DashBoard/PrincipalDashboard";
import StudentDashBoard from "./StudentDashBoard/StudentDashBoard";
import TeacherDasboard from "./TeacherDashBoard.tsx/TeacherDasboard";

const CommonDashboard: React.FC<{ role: string }> = ({ role }) => {
  return (
    <div>
      {role === "principal" && <PrincipalDashboardPage />}
      {role === "teacher" && <TeacherDasboard />}
      {role === "student" && <StudentDashBoard />}
    </div>
  );
};

export default CommonDashboard;
