import { Close } from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

interface StudentFormData {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  role: string;
  password: string;
}
// Validation schema using Yup
const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Phone is required"),
  password: Yup.string().required("Password is required"),
});

const ErrorText = styled(Box)(({ theme }) => ({
  color: "red",
  marginTop: theme.spacing(1),
}));
// Component definition
const AddStudent: React.FC<{ onClose: () => void }> = (props) => {
  const { onClose } = props;

  const handleSubmit = (values: StudentFormData) => {
    console.log("Form data:", values);
    // Perform an action to add the student using the form data
    // For example, you can make an API request to your backend here
    // Reset the form after submission
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 2 }}>
      <Typography variant="h5" gutterBottom>
        Add Student
        <IconButton
          edge="end"
          color="inherit"
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", top: 10, right: 15 }}
        >
          <Close />
        </IconButton>
      </Typography>

      <Formik
        initialValues={{
          username: "",
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          role: "Student", // Default role is set to 'Student'
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  name="firstname"
                  label="First Name"
                  as={TextField}
                  // required
                  fullWidth
                />
                <ErrorMessage name="firstname">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="lastname"
                  label="Last Name"
                  as={TextField}
                  // required
                  fullWidth
                />
                <ErrorMessage name="lastname">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="username"
                  label="Username"
                  as={TextField}
                  // required
                  fullWidth
                />
                <ErrorMessage name="username">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="email"
                  label="Email"
                  type="email"
                  as={TextField}
                  // required
                  fullWidth
                />
                <ErrorMessage name="email">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="phone"
                  label="Phone"
                  type="tel"
                  as={TextField}
                  // required
                  fullWidth
                />
                <ErrorMessage name="phone">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="role"
                  label="Role"
                  as={TextField}
                  // required
                  fullWidth
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="password"
                  label="Password"
                  type="password"
                  as={TextField}
                  // required
                  fullWidth
                />
                <ErrorMessage name="password">
                  {(msg) => <ErrorText>{msg}</ErrorText>}
                </ErrorMessage>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddStudent;
