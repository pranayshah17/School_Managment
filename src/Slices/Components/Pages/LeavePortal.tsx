import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const LeaveApplicationForm: React.FC<any> = ({ onSubmit }) => {
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    const leaveDetails = {
      leaveType,
      startDate,
      endDate,
      reason,
    };
    onSubmit(leaveDetails);
    // Clear form fields
    setLeaveType("");
    setStartDate("");
    setEndDate("");
    setReason("");
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: "16px" }}>
        <Typography variant="h6" gutterBottom>
          Apply for Leave
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Leave Type"
                variant="outlined"
                fullWidth
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Start Date"
                type="date"
                variant="outlined"
                fullWidth
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="End Date"
                type="date"
                variant="outlined"
                fullWidth
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Reason"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Apply
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default LeaveApplicationForm;
