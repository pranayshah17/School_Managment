import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface LeaveApplicationProps {
  onSubmit: (startDate: string, endDate: string, reason: string) => void;
}

const LeaveApplication: React.FC<LeaveApplicationProps> = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    onSubmit(startDate, endDate, reason);
    setStartDate("");
    setEndDate("");
    setReason("");
  };

  return (
    <Container maxWidth="sm" sx={{ paddingTop: "30px" }}>
      <Paper elevation={3} style={{ padding: "25px" }}>
        <Typography variant="h5" gutterBottom>
          Apply Leave
        </Typography>
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Reason"
          multiline
          rows={4}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LeaveApplication;
