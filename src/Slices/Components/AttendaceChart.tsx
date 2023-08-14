import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";

interface AttendanceChartProps {
  data: number[];
}
const attendanceData = [95, 88, 92, 87, 93, 96, 90, 85, 91, 89, 94, 92];

const AttendanceChart: React.FC = () => {
  const options = {
    chart: {
      height: 350,
      type: "bar",
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
    <Card>
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
