import { CssBaseline, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../Store/Store";
import GenderChart from "../Components/DashBoard/GenderCharts";
import StudentCountCard from "../Components/DashBoard/StudentCountCard";
import TeacherCountCard from "../Components/DashBoard/TeacherCountCard";
import AttendanceChart from "./AttendaceChart";
import { fetchUsers } from "./userSlice";
const PrincipalDashboardPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const users: any = useSelector((state: RootState) => state.user.data);

  console.log(users);
  const malePercentage = users.data.malePercentage;
  const femalePercentage = users.data.femalePercentage;
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

  return (
    <div>
      <CssBaseline />
      <Container sx={{ paddingTop: "100px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TeacherCountCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <StudentCountCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenderChart
              maleCount={malePercentage}
              femaleCount={femalePercentage}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AttendanceChart />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PrincipalDashboardPage;
