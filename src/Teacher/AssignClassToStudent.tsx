import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { Box, Container, styled } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  selectedStudent: Yup.string().required("Student is required"),
  selectedClass: Yup.number().required("Class is required"),
  selectedGrade: Yup.string().required("Grade is required"),
});

const ErrorText = styled(Box)(({ theme }) => ({
  color: "red",
  marginTop: theme.spacing(1),
}));

// Component definition
const AssignClassToStudent: React.FC = () => {
  const dummyStudents = [
    { name: "John Smith" },
    { name: "Jane Doe" },
    { name: "Michael Johnson" },
    { name: "Emily Williams" },
  ];

  const handleSubmit = (values: {
    selectedStudent: string;
    selectedClass: number | "";
    selectedGrade: string | "";
  }) => {
    console.log(
      `Assigning ${values.selectedStudent} to class ${values.selectedClass} with grade ${values.selectedGrade}`
    );
  };

  return (
    <Container sx={{ marginTop: "30px" }} component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: "25px" }}>
        <Typography variant="h6" align="center" gutterBottom>
          Assign Class to Student
        </Typography>
        <Formik
          initialValues={{
            selectedStudent: "",
            selectedClass: "",
            selectedGrade: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Student</InputLabel>
                    <Field
                      name="selectedStudent"
                      as={Select}
                      value={values.selectedStudent}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <MenuItem value="">Select a student</MenuItem>
                      {dummyStudents.map((student, index) => (
                        <MenuItem key={index} value={student.name}>
                          {student.name}
                        </MenuItem>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="selectedStudent"
                      component={ErrorText}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Class</InputLabel>
                    <Field
                      name="selectedClass"
                      as={Select}
                      value={values.selectedClass}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <MenuItem value="">Select a class</MenuItem>
                      {Array.from({ length: 12 }, (_, i) => (
                        <MenuItem key={i + 1} value={i + 1}>
                          {i + 1}
                        </MenuItem>
                      ))}
                    </Field>
                    <ErrorMessage name="selectedClass" component={ErrorText} />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Grade</InputLabel>
                    <Field
                      name="selectedGrade"
                      as={Select}
                      value={values.selectedGrade}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <MenuItem value="">Select a grade</MenuItem>
                      <MenuItem value="A">A</MenuItem>
                      <MenuItem value="B">B</MenuItem>
                      <MenuItem value="C">C</MenuItem>
                    </Field>
                    <ErrorMessage name="selectedGrade" component={ErrorText} />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Assign
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default AssignClassToStudent;
