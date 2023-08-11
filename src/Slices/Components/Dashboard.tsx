import { Paper } from "@mui/material";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  // ... (your existing code)

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
    <Paper elevation={2} style={{ padding: "16px" }}>
      <div style={{ marginTop: "16px" }}>
        <BarChart width={550} height={300} data={attendanceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="present" stackId="attendance" fill="#82ca9d" />
          <Bar dataKey="absent" stackId="attendance" fill="#8884d8" />
          <Bar dataKey="late" stackId="attendance" fill="#ffc658" />
        </BarChart>
      </div>
    </Paper>
  );
};

export default Dashboard;
