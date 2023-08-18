import { Card, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

interface ScheduleDetails {
  className: string;
  time: string;
  date: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  // maxWidth: 1070,
  // marginLeft: "70px",
  borderRadius: theme.spacing(2),
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "boxShadow 0.3s",
  "&:hover": {
    boxShadow: "0 0px 25px rgba(0, 0, 0, 0.2)",
  },
  backgroundColor: "#f4f4f4",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // padding: "10px",
  justifyContent: "center",
  // flex: 1,
}));

const StyledTypography = styled(Typography)({
  position: "sticky",

  top: 0,
  backgroundColor: "#f4f4f4", // White background for sticky header
  color: "#333333", // Set the background color as needed
  zIndex: 1, // Ensure the typography remains on top
  padding: "10px",
});

const ScrollableContent = styled("div")({
  overflowY: "auto",
  maxHeight: "320px", // Set the maximum height for the scrollable content
});
const StudentSchedule: React.FC = () => {
  const dummySchedules: ScheduleDetails[] = [
    {
      className: "Math",
      time: "10:00 AM",
      date: "2023-08-20",
    },
    {
      className: "Science",
      time: "2:30 PM",
      date: "2023-08-21",
    },
    {
      className: "History",
      time: "9:15 AM",
      date: "2023-08-22",
    },
    {
      className: "History",
      time: "9:15 AM",
      date: "2023-08-22",
    },
    {
      className: "History",
      time: "9:15 AM",
      date: "2023-08-22",
    },
    {
      className: "History",
      time: "9:15 AM",
      date: "2023-08-22",
    },
  ];

  return (
    <Container component="main" style={{ paddingTop: "50px" }}>
      <StyledCard elevation={3}>
        <div>
          <StyledTypography
            // component="h1"
            variant="h5"
            style={{ textAlign: "center", paddingBottom: "20px" }}
          >
            Student Schedule
          </StyledTypography>
          <ScrollableContent>
            <Grid container spacing={2}>
              {dummySchedules.map((schedule, index) => (
                <Grid item xs={12} key={index}>
                  <Typography variant="subtitle1">
                    <strong>Class Name:</strong> {schedule.className}
                  </Typography>
                  <Typography variant="subtitle1">
                    <strong>Time:</strong> {schedule.time}
                  </Typography>
                  <Typography variant="subtitle1">
                    <strong>Date:</strong> {schedule.date}
                  </Typography>
                  <hr />
                </Grid>
              ))}
            </Grid>
          </ScrollableContent>
          <style>
            {`
          ::-webkit-scrollbar {
            width: 8px;
            height:8px
          }
          ::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 6px;
          }
          ::-webkit-scrollbar-track {
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 6px;
          }
        `}
          </style>
        </div>
      </StyledCard>
    </Container>
  );
};

export default StudentSchedule;
