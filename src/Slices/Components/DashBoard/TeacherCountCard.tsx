import { Card, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../Store/Store";

const TeacherCountCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const users: any = useSelector((state: RootState) => state.user.data);
  const teacherCount = users.data.teacher;
  return (
    <Card style={{ boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.1)" }}>
      <Paper
        elevation={2}
        style={{
          padding: "16px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div style={{ width: "100%" }}>
          <Typography variant="h6" align="center">
            Teachers
          </Typography>
        </div>
        <div>
          <Typography variant="h4" align="center" style={{ color: "#3f51b5" }}>
            {teacherCount}
          </Typography>
        </div>
      </Paper>
    </Card>
  );
};

export default TeacherCountCard;
