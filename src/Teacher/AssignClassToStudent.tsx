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
import styled from "@mui/material/styles/styled";
import { Container } from "@mui/system";
import React, { useState } from "react";

interface Student {
  name: string;
}

type Grade = "A" | "B" | "C";

const dummyStudents: Student[] = [
  { name: "John Smith" },
  { name: "Jane Doe" },
  { name: "Michael Johnson" },
  { name: "Emily Williams" },
];

const FormContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
  maxWidth: 400,
  width: "100%",
}));

const AssignClassToStudent: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedClass, setSelectedClass] = useState<number | "">("");
  const [selectedGrade, setSelectedGrade] = useState<Grade | "">("");

  const handleStudentChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedStudent(event.target.value as string);
  };

  const handleClassChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedClass(event.target.value as number);
  };

  const handleGradeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedGrade(event.target.value as Grade);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform the assignment logic here
    console.log(
      `Assigning ${selectedStudent} to class ${selectedClass} with grade ${selectedGrade}`
    );
    // Reset the form
    setSelectedStudent("");
    setSelectedClass("");
    setSelectedGrade("");
  };

  return (
    <Container sx={{ marginTop: "30px" }} component="main" maxWidth="xs">
      <FormContainer elevation={3}>
        <Typography variant="h6" align="center" gutterBottom>
          Assign Class to Student
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Student</InputLabel>
                <Select value={selectedStudent}>
                  <MenuItem value="">Select a student</MenuItem>
                  {dummyStudents.map((student, index) => (
                    <MenuItem key={index} value={student.name}>
                      {student.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Class</InputLabel>
                <Select value={selectedClass}>
                  <MenuItem value="">Select a class</MenuItem>
                  {Array.from({ length: 12 }, (_, i) => (
                    <MenuItem key={i + 1} value={i + 1}>
                      {i + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Grade</InputLabel>
                <Select value={selectedGrade}>
                  <MenuItem value="">Select a grade</MenuItem>
                  <MenuItem value="A">A</MenuItem>
                  <MenuItem value="B">B</MenuItem>
                  <MenuItem value="C">C</MenuItem>
                </Select>
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
        </form>
      </FormContainer>
    </Container>
  );
};

export default AssignClassToStudent;
