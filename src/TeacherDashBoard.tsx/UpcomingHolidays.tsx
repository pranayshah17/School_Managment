import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Container } from "@mui/system";
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
  backgroundColor: "#f4f4f4",

  top: 0,
  zIndex: 1, // Ensure the typography remains on top
  padding: "10px",
});

const ScrollableContent = styled("div")({
  overflowY: "auto",
  maxHeight: "250px", // Set the maximum height for the scrollable content
});
const UpcomingHolidays: React.FC = () => {
  const StyledCard = styled(List)(({ theme }) => ({
    // padding: 20,
    // maxHeight: 330,
    // overflow: "auto",
    boxShadow: "0 0px 5px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    transition: "boxShadow 0.3s",
    "&:hover": {
      boxShadow: "0 0px 25px rgba(0, 0, 0, 0.2)",
    },
  }));
  return (
    <Container>
      <StyledCard sx={{ padding: "0px 18px !important" }}>
        <StyledTypography variant="h6" gutterBottom>
          Upcoming Holidays
        </StyledTypography>
        <ScrollableContent>
          {upcomingHolidays.map((holiday) => (
            <ListItem key={holiday.id}>
              <ListItemText primary={holiday.name} secondary={holiday.date} />
            </ListItem>
          ))}
        </ScrollableContent>
        {/* <style>
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
        </style> */}
      </StyledCard>
    </Container>
  );
};

export default UpcomingHolidays;
