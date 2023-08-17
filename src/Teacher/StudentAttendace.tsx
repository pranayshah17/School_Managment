import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useState } from "react";

const students = ["Student 1", "Student 2", "Student 3", "Student 4"];

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const StudentAttendance: React.FC<any> = () => {
  const [attendance, setAttendance] = useState<{ [student: string]: string }>(
    {}
  );
  const [showAttendanceList, setShowAttendanceList] = useState(false);
  const [editMode, setEditMode] = useState<{ [student: string]: boolean }>({});

  const handleAttendanceChange =
    (student: string, status: string) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAttendance((prevAttendance) => ({
        ...prevAttendance,
        [student]: status,
      }));
    };

  const handleEditModeToggle = (student: string) => () => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [student]: !prevEditMode[student],
    }));
  };

  const handleSaveEdit = (student: string) => () => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [student]: false,
    }));
  };

  const handleSubmit = () => {
    const allStudentsSelected = students.every(
      (student) =>
        attendance[student] === "present" || attendance[student] === "absent"
    );

    if (!allStudentsSelected) {
      // Display an alert to inform the user
      alert("Please select a status (Present or Absent) for all students.");
      return;
    }

    console.log("Attendance:", attendance);
    setShowAttendanceList(true);
  };

  return (
    <Container maxWidth="md" style={{ paddingTop: "20px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Student Attendance
        </Typography>
        <FormControl component="fieldset">
          {students.map((student: any) => (
            <Grid container alignItems="center" key={student}>
              <Grid item xs={12} md={4}>
                <Typography>{student}</Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={attendance[student] === "present"}
                      onChange={handleAttendanceChange(student, "present")}
                    />
                  }
                  label="Present"
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={attendance[student] === "absent"}
                      onChange={handleAttendanceChange(student, "absent")}
                    />
                  }
                  label="Absent"
                  sx={{ marginLeft: { xs: "16px", md: "32px" } }}
                />
              </Grid>
            </Grid>
          ))}
          <Box mt={2}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </FormControl>
      </Paper>

      {showAttendanceList && (
        <StyledPaper>
          <Typography variant="h5" gutterBottom>
            Student Attendance List
          </Typography>
          {students.map((student: any) => (
            <Grid container alignItems="center" key={student}>
              <Grid item xs={12} md={4}>
                <Typography>{student}</Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                {editMode[student] ? (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={attendance[student] === "present"}
                        onChange={handleAttendanceChange(student, "present")}
                      />
                    }
                    label="Present"
                  />
                ) : (
                  <Typography>{attendance[student] || "N/A"}</Typography>
                )}
              </Grid>
              <Grid item xs={6} md={4}>
                {editMode[student] ? (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={attendance[student] === "absent"}
                        onChange={handleAttendanceChange(student, "absent")}
                      />
                    }
                    label="Absent"
                  />
                ) : (
                  <Button
                    variant="contained"
                    color={editMode[student] ? "primary" : "info"}
                    onClick={handleEditModeToggle(student)}
                  >
                    {editMode[student] ? "Save" : "Edit"}
                  </Button>
                )}
                {editMode[student] && (
                  <Button
                    onClick={handleSaveEdit(student)}
                    color="success"
                    variant="contained"
                  >
                    Save
                  </Button>
                )}
              </Grid>
            </Grid>
          ))}
        </StyledPaper>
      )}
    </Container>
  );
};

export default StudentAttendance;
