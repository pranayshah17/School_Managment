import { Container, Grid } from "@mui/material";
import React from "react";
import UpcomingHolidays from "../TeacherDashBoard.tsx/UpcomingHolidays";
import StudentProfile from "./StudentProfile";
import StudentSchedule from "./StudentSchedule";

const StudentDashBoard: React.FC = () => {
  return (
    <>
      <Container sx={{ paddingTop: "20px" }}>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: "center", display: "flex" }}
        >
          <Grid item xs={12} sm={12} lg={6}>
            <StudentProfile />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <UpcomingHolidays />
          </Grid>
          <StudentSchedule />
        </Grid>
      </Container>
    </>
  );
};

export default StudentDashBoard;
