import { Grid } from "@mui/material";
import React from "react";
import { TeacherList } from "../Slices/PrincipalDashboard/TeacherLIst";

const AddTeacherPage: React.FC = () => {
  return (
    <div>
      <Grid container spacing={1}>
        {/* <RegistrationForm /> */}

        <TeacherList />
      </Grid>
    </div>
  );
};

export default AddTeacherPage;