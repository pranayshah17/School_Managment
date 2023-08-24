import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useAppDispatch } from "../../Store/Store";
import { fetchAttendace } from "./AttendanceSlice";

interface AttendanceData {
  [year: number]: number[];
}

const attendanceData: AttendanceData = {
  2021: [95, 88, 92, 87, 93, 96, 90, 85, 91, 89, 94, 92],
  // Add data for other years
};

const AttendanceChart: React.FC = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAttendace());
  }, [dispatch])

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const [selectedYear, setSelectedYear] = useState<any>(2021);

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
      data: attendanceData[selectedYear],
    },
  ];

  const handleYearChange = (event: SelectChangeEvent<number | string>) => {
    setSelectedYear(event.target.value);
  };

  return (
    <Card
      style={{
        boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        width: isTablet ? "80%" : "auto",
        position: "relative",
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
        <FormControl
          style={{
            position: "absolute",
            top: "20px", // Adjust this value as needed
            right: "20px", // Adjust this value as needed
          }}
        >
          <div style={{ marginRight: "30px", paddingTop: "10px" }}>
            <InputLabel>Select Year</InputLabel>
            <Select
              sx={{ width: "120px", height: "40px" }}
              value={selectedYear}
              onChange={handleYearChange}
            >
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2024}>2024</MenuItem>
              <MenuItem value={2025}>2025</MenuItem>
              {/* Add menu items for other years */}
            </Select>
          </div>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default AttendanceChart;
