import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface ScheduleDetails {
  className: string;
  time: string;
  date: string;
}

const AddSchedule: React.FC<any> = () => {
  const [className, setClassName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const scheduleDetails: ScheduleDetails = {
      className,
      time,
      date,
    };
    // onSubmit(scheduleDetails);
    setClassName("");
    setTime("");
    setDate("");
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
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Class Name"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="Time"
                  label="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="date"
                  label="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: "16px" }}
            >
              Add Schedule
            </Button>
          </form>
        </div>
      </Paper>
    </Container>
  );
};

export default AddSchedule;
