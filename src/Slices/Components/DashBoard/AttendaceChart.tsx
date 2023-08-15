import {
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";

interface AttendanceChartProps {
  data: number[];
}
const attendanceData = [95, 88, 92, 87, 93, 96, 90, 85, 91, 89, 94, 92];

const AttendanceChart: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const options = {
    chart: {
      height: 350,
      type: "bar",
      // width: isTablet ? "70%" : "auto", // Set default width to 100%
      events: {
        dataPointSelection: (event: any, chartContext: any, config: any) => {
          // Handle data point selection event if needed
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  const series = [
    {
      name: "Attendance",
      data: attendanceData,
    },
  ];

  return (
    <Card
      style={{
        boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        width: isTablet ? "80%" : "auto",
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Yearly Attendance
        </Typography>
        <Chart
          options={options as any}
          series={series}
          type="bar"
          height={250}
        />
      </CardContent>
    </Card>
  );
};

export default AttendanceChart;
