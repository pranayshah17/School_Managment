import React from "react";
import PrincipalDashboardPage from "./Slices/PrincipalDashboard/PrincipalDashboard";
import StudentDashBoard from "./StudentDashBoard/StudentDashBoard";
import TeacherDasboard from "./TeacherDashBoard.tsx/TeacherDasboard";

const CommonDashboard: React.FC<{ role: string }> = ({ role }) => {
  return (
    <div>
      {role === "Principal" && <PrincipalDashboardPage />}
      {role === "Teacher" && <TeacherDasboard />}
      {role === "Student" && <StudentDashBoard />}
    </div>
  );
};

export default CommonDashboard;
