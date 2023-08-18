import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Container,
  FormHelperText,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";

interface LeaveDetails {
  startDate: string;
  endDate: string;
  reason: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
}));

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const StyledList = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

const StudentLeavePortal: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [leaveList, setLeaveList] = useState<LeaveDetails[]>([]);
  const [formError, setFormError] = useState("");

  const handleApply = () => {
    if (!startDate || !endDate || !reason) {
      setFormError("All fields are required");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      setFormError("End date must be after start date");
      return;
    }

    const newLeave: LeaveDetails = {
      startDate,
      endDate,
      reason,
    };
    setLeaveList([...leaveList, newLeave]);
    setStartDate("");
    setEndDate("");
    setReason("");
    setFormError("");
  };

  const handleEdit = (index: number) => {
    const editedLeave = leaveList[index];
    setStartDate(editedLeave.startDate);
    setEndDate(editedLeave.endDate);
    setReason(editedLeave.reason);
    const updatedLeaveList = leaveList.filter((_, i) => i !== index);
    setLeaveList(updatedLeaveList);
  };

  const handleDelete = (index: number) => {
    const updatedLeaveList = leaveList.filter((_, i) => i !== index);
    setLeaveList(updatedLeaveList);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ paddingTop: "50px" }}>
      <StyledPaper elevation={3}>
        <Typography
          component="h1"
          variant="h5"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          Leave Application
        </Typography>
        <StyledForm>
          <TextField
            variant="outlined"
            required
            fullWidth
            type="date"
            label="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            type="date"
            label="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            label="Reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          {formError && <FormHelperText error>{formError}</FormHelperText>}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "16px" }}
            onClick={handleApply}
          >
            Apply Leave
          </Button>
        </StyledForm>
      </StyledPaper>

      {leaveList.length > 0 && (
        <StyledList>
          <Typography
            variant="h6"
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Applied Leave Requests
          </Typography>
          {leaveList.map((leave, index) => (
            <StyledListItem key={index}>
              <ListItemText
                primary={`Start Date: ${leave.startDate} | End Date: ${leave.endDate}`}
                secondary={`Reason: ${leave.reason}`}
              />
              <ListItemSecondaryAction>
                <StyledIconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => handleEdit(index)}
                  sx={{ position: "absolute", right: "30px", top: "60%" }}
                >
                  <EditIcon />
                </StyledIconButton>
                <StyledIconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(index)}
                  sx={{ position: "absolute", right: "0px", top: "60%" }}
                >
                  <DeleteIcon />
                </StyledIconButton>
              </ListItemSecondaryAction>
            </StyledListItem>
          ))}
        </StyledList>
      )}
    </Container>
  );
};

export default StudentLeavePortal;
