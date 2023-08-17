import { Container, Grid } from "@mui/material";
import React from "react";
import UpcomingHoliday from "./HoliodayData"; // Adjust the import path
import MySchedules from "./MySchedule";
import TeacherProfile from "./TeacherProfile";

const TeacherDashboard: React.FC = () => {
  return (
    <Container sx={{ paddingTop: "20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={6}>
          <TeacherProfile />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <UpcomingHoliday />
        </Grid>
      </Grid>
      <MySchedules />
    </Container>
  );
};

export default TeacherDashboard;
