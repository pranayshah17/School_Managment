import { Container, Grid } from "@mui/material";
import React from "react";
import MySchedules from "./MySchedule";
import TeacherProfile from "./TeacherProfile";
import UpcomingHoliday from "./UpcomingHolidays"; // Adjust the import path

const TeacherDashboard: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default TeacherDashboard;
