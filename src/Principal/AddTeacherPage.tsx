import { Grid } from "@mui/material";
import React from "react";
import { TeacherList } from "../Slices/PrincipalDashboard/TeacherLIst";
import RegistrationForm from "../login_signup/RegistrationForm";

const AddTeacherPage: React.FC = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    mobile: "",
    role: "",
  };

  return (
    <div>
      <Grid container spacing={1}>
        <RegistrationForm initialValues={initialValues} isEditing={false} />

        <TeacherList />
      </Grid>
    </div>
  );
};

export default AddTeacherPage;
