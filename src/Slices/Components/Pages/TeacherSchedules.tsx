import { styled, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

interface TeacherSchedule {
  id: number;
  teacherId: number;
  teacherName: string;
  schedules: string[];
}

interface TeacherSchedulesProps {
  data: TeacherSchedule[];
}

const dummySchedules: TeacherSchedulesProps = {
  data: [
    {
      id: 1,
      teacherId: 101,
      teacherName: "John Doe",
      schedules: ["Monday 9:00 AM - 11:00 AM", "Wednesday 10:00 AM - 12:00 PM"],
    },
    {
      id: 2,
      teacherId: 102,
      teacherName: "Jane Smith",
      schedules: ["Tuesday 1:00 PM - 3:00 PM", "Thursday 2:00 PM - 4:00 PM"],
    },
    {
      id: 3,
      teacherId: 103,
      teacherName: "Michael Johnson",
      schedules: ["Monday 2:00 PM - 4:00 PM", "Wednesday 3:00 PM - 5:00 PM"],
    },
    // Add more dummy data as needed
  ],
};
const ScrollableDiv = styled("div")({
  width: "100%",
  margin: "0 auto",
  overflowX: "auto",
});

const TeacherSchedules: React.FC<any> = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "teacherId", headerName: "Teacher ID", width: 120 },
    { field: "teacherName", headerName: "Teacher Name", width: 200 },
    {
      field: "schedules",
      headerName: "Schedules",
      width: 300,
      valueGetter: (params) =>
        params.row.schedules ? params.row.schedules.join(", ") : "",
    },
  ];

  return (
    <Container
      sx={{ width: isMobile ? "100vw" : "70vw", marginTop: "40px" }}
      maxWidth="xl"
    >
      <ScrollableDiv>
        <DataGrid rows={dummySchedules.data} columns={columns} />
      </ScrollableDiv>
    </Container>
  );
};

export default TeacherSchedules;
