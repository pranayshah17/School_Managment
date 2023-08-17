import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import LeaveApplication from "./LeaveApplication";
import LeaveList from "./LeaveList";

const theme = createTheme();
interface Leave {
  startDate: string;
  endDate: string;
  reason: string;
}
const dummyLeaveData = [
  {
    startDate: "2023-08-01",
    endDate: "2023-08-03",
    reason: "Vacation",
  },
  {
    startDate: "2023-08-10",
    endDate: "2023-08-12",
    reason: "Family event",
  },
  {
    startDate: "2023-08-15",
    endDate: "2023-08-17",
    reason: "Sick leave",
  },
  {
    startDate: "2023-08-15",
    endDate: "2023-08-17",
    reason: "Sick leave",
  },
  {
    startDate: "2023-08-15",
    endDate: "2023-08-17",
    reason: "Sick leave",
  },
  {
    startDate: "2023-08-15",
    endDate: "2023-08-17",
    reason: "Sick leave",
  },
];

const LeaveManagementTeacher: React.FC = () => {
  const [leaves, setLeaves] = useState<Leave[]>(dummyLeaveData);

  const handleLeaveSubmit = (
    startDate: string,
    endDate: string,
    reason: string
  ) => {
    const newLeave = { startDate, endDate, reason };
    setLeaves([...leaves, newLeave]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LeaveApplication onSubmit={handleLeaveSubmit} />
      <LeaveList leaves={leaves} />
    </ThemeProvider>
  );
};

export default LeaveManagementTeacher;
