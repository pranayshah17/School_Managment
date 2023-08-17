import { Container } from "@mui/material";
import React from "react";
import StudentsList from "./StudentLIst";

const ManageStudent: React.FC = () => {
  return (
    <Container
      maxWidth="xl"
      style={{ marginTop: "20px", padding: "0px !important" }}
    >
      <StudentsList />
    </Container>
  );
};

export default ManageStudent;
