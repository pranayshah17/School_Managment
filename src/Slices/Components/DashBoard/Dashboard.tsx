import { CssBaseline, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import AttendanceChart from "./AttendaceChart";
import GenderChart from "./GenderCharts";
import StudentCountCard from "./StudentCountCard";
import TeacherCountCard from "./TeacherCountCard";
const Dashboard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const attendanceData = [
    { name: "Monday", present: 30, absent: 5, late: 2 },
    { name: "Tuesday", present: 28, absent: 7, late: 3 },
    { name: "Wednesday", present: 32, absent: 3, late: 1 },
    { name: "Thrusday", present: 30, absent: 5, late: 2 },
    { name: "Friday", present: 28, absent: 7, late: 3 },
    { name: "Saturday", present: 32, absent: 3, late: 1 },
    // ... add data for other days
  ];
  const maleCount = 45;
  const femaleCount = 55;
  const teacherCount = 15;
  const studentCount = 300;
  return (
    <div>
      <CssBaseline />
      <Container sx={{ paddingTop: "100px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TeacherCountCard teacherCount={teacherCount} />
          </Grid>
          <Grid item xs={12} md={6}>
            <StudentCountCard studentCount={studentCount} />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenderChart maleCount={maleCount} femaleCount={femaleCount} />
          </Grid>
          <Grid item xs={12} md={6}>
            <AttendanceChart />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
