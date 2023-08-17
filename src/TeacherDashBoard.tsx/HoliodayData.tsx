import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { styled } from "styled-components";

interface Holiday {
  id: number;
  name: string;
  date: string;
}

const upcomingHolidays: Holiday[] = [
  { id: 1, name: "RakshaBandhan", date: "August 31" },
  { id: 1, name: "RakshaBandhan", date: "August 31" },
  { id: 1, name: "RakshaBandhan", date: "August 31" },
  { id: 1, name: "RakshaBandhan", date: "August 31" },
  { id: 1, name: "RakshaBandhan", date: "August 31" },
  { id: 1, name: "RakshaBandhan", date: "August 31" },
  { id: 1, name: "RakshaBandhan", date: "August 31" },
  { id: 1, name: "RakshaBandhan", date: "August 31" },
  { id: 1, name: "RakshaBandhan", date: "August 31" },
  { id: 1, name: "RakshaBandhan", date: "August 31" },
  { id: 1, name: "RakshaBandhan", date: "August 31" },
  { id: 1, name: "RakshaBandhan", date: "August 31" },
  // Add more holidays here
];

const StyledTypography = styled(Typography)({
  position: "sticky",

  top: 0,
  backgroundColor: "white", // Set the background color as needed
  zIndex: 1, // Ensure the typography remains on top
  padding: "10px",
});

const UpcomingHolidays: React.FC = () => {
  const StyledList = styled(List)(({ theme }) => ({
    padding: 20,
    maxHeight: 330,
    overflow: "auto",
    boxShadow: "0 0px 5px rgba(0, 0, 0, 0.1)",
    transition: "boxShadow 0.3s",
    "&:hover": {
      boxShadow: "0 0px 25px rgba(0, 0, 0, 0.2)",
    },
  }));
  return (
    <StyledList sx={{ padding: "0px 20px !important" }}>
      <StyledTypography variant="h6" gutterBottom>
        Upcoming Holidays
      </StyledTypography>
      <div style={{ overflowY: "auto" }}>
        {upcomingHolidays.map((holiday) => (
          <ListItem key={holiday.id}>
            <ListItemText primary={holiday.name} secondary={holiday.date} />
          </ListItem>
        ))}
      </div>
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
    </StyledList>
  );
};

export default UpcomingHolidays;
