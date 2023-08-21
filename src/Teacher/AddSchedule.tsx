import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

interface ScheduleDetails {
  className: string;
  time: string;
  date: string;
}
// Validation schema using Yup
const validationSchema = Yup.object().shape({
  className: Yup.string().required("Class Name is required"),
  time: Yup.string().required("Time is required"),
  date: Yup.string().required("Date is required"),
});

const ErrorText = styled(Box)(({ theme }) => ({
  color: "red",
  marginTop: theme.spacing(1),
}));
// Component definition
const AddSchedule: React.FC<any> = () => {
  const handleSubmit = (values: ScheduleDetails) => {
    console.log(values);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ paddingTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "25px" }}>
        <CssBaseline />
        <div>
          <Typography
            component="h1"
            variant="h5"
            style={{ textAlign: "center", paddingBottom: "20px" }}
          >
            Add Schedule
          </Typography>
          <Formik
            initialValues={{
              className: "",
              time: "",
              date: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      // required
                      fullWidth
                      label="Class Name"
                      name="className"
                    />
                    <ErrorMessage name="className">
                      {(msg) => <ErrorText>{msg}</ErrorText>}
                    </ErrorMessage>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      // required
                      fullWidth
                      type="time"
                      label="Time"
                      name="time"
                      InputLabelProps={{ shrink: true }}
                    />
                    <ErrorMessage name="time">
                      {(msg) => <ErrorText>{msg}</ErrorText>}
                    </ErrorMessage>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      // required
                      fullWidth
                      type="date"
                      label="Date"
                      name="date"
                      InputLabelProps={{ shrink: true }}
                    />
                    <ErrorMessage name="date">
                      {(msg) => <ErrorText>{msg}</ErrorText>}
                    </ErrorMessage>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  // fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "16px" }}
                  disabled={isSubmitting}
                >
                  Add Schedule
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Paper>
    </Container>
  );
};

export default AddSchedule;
