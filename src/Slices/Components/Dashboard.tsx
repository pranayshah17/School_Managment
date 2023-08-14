import { Card, Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";
import AttendanceChart from "./AttendaceChart";
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

  const barChartWidth = isSmallScreen ? 300 : 550;
  const barChartHeight = isSmallScreen ? 250 : 300;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <Paper elevation={2} style={{ padding: "16px" }}>
              <div style={{ marginTop: "16px" }}>
                <BarChart
                  width={barChartWidth}
                  height={barChartHeight}
                  data={attendanceData}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  {/* <Tooltip /> */}
                  <Legend />
                  <Bar dataKey="present" stackId="attendance" fill="#82ca9d" />
                  <Bar dataKey="absent" stackId="attendance" fill="#8884d8" />
                  <Bar dataKey="late" stackId="attendance" fill="#ffc658" />
                </BarChart>
              </div>
            </Paper>
          </Card>
        </Grid>
        <Grid item xs={12} md={isTablet ? 12 : 6}>
          <Card>
            <AttendanceChart />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
