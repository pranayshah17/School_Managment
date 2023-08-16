import { List, ListItem, ListItemText, Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled(Paper)`
  height: 320px;
  overflow-y: auto;
  flex: 1;
`;

interface Holiday {
  id: number;
  name: string;
  date: string;
}

interface Props {
  holidays: Holiday[];
}

const UpcomingHoliday: React.FC<Props> = ({ holidays }) => {
  return (
    <Container>
      <h3 style={{ paddingLeft: "18px" }}>UpComing Holidays</h3>
      <List>
        {holidays.map((holiday) => (
          <ListItem key={holiday.id}>
            <ListItemText primary={holiday.name} secondary={holiday.date} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default UpcomingHoliday;
