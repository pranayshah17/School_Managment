import { Card, Paper } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

interface GenderChartProps {
  maleCount: number;
  femaleCount: number;
}

const GenderChart: React.FC<GenderChartProps> = ({
  maleCount,
  femaleCount,
}) => {
  const genderData = [
    { gender: "Male", count: maleCount },
    { gender: "Female", count: femaleCount },
  ];

  const chartOptions = {
    labels: genderData.map((data) => data.gender),
    height: "100%",
    width: "100%",
  };

  const series = genderData.map((data) => data.count);

  return (
    <Card
      style={{
        boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <Paper elevation={2} style={{ padding: "16px", height: "100%" }}>
        <ReactApexChart
          options={chartOptions}
          series={series}
          type="pie"
          width="100%"
          height="310"
        />
      </Paper>
    </Card>
  );
};

export default GenderChart;
