import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

interface TeacherFormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  mobileNumber: string;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile Number is required"),
});

const ErrorText = styled(Box)(({ theme }) => ({
  color: "red",
  marginTop: theme.spacing(1),
}));
const TeacherForm: React.FC<any> = ({ onSubmit }) => {
  const initialValues: TeacherFormData = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    mobileNumber: "",
  };

  const handleFormSubmit = (values: TeacherFormData) => {
    onSubmit(values);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ paddingTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" align="center" sx={{ paddingBottom: "20px" }}>
          Add Teacher
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  type="text"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  as={TextField}
                />
                <ErrorMessage name="firstName">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  type="text"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  as={TextField}
                />
                <ErrorMessage name="lastName">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Grid>
              <Grid item xs={12}>
                <Field
                  type="text"
                  name="username"
                  label="Username"
                  fullWidth
                  as={TextField}
                />
                <ErrorMessage name="username">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Grid>
              <Grid item xs={12}>
                <Field
                  type="email"
                  name="email"
                  label="Email"
                  fullWidth
                  as={TextField}
                />
                <ErrorMessage name="email">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Grid>
              <Grid item xs={12}>
                <Field
                  type="password"
                  name="password"
                  label="Password"
                  fullWidth
                  as={TextField}
                />
                <ErrorMessage name="password">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Grid>
              <Grid item xs={12}>
                <Field
                  type="text"
                  name="mobileNumber"
                  label="Mobile Number"
                  fullWidth
                  as={TextField}
                />
                <ErrorMessage name="mobileNumber">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "18px" }}
            >
              Add Teacher
            </Button>
          </Form>
        </Formik>
      </Paper>
    </Container>
  );
};

export default TeacherForm;
