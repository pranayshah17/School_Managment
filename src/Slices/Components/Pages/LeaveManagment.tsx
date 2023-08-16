import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import styled from "styled-components";

interface LeaveRequest {
  id: string;
  teacherName: string;
  startDate: string;
  endDate: string;
  status: "Pending" | "Approved" | "Rejected";
  reason: string;
}

interface LeaveRequestData {
  data: LeaveRequest[];
}

const LeaveManagement: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const leaveRequests: LeaveRequestData = {
    data: [
      {
        id: "1",
        teacherName: "Rohan Patel",
        startDate: "2023-08-02",
        endDate: "2023-08-05",
        status: "Pending",
        reason: "Family vacation",
      },

      {
        id: "2",
        teacherName: "Pranay Shah",
        startDate: "2023-08-03",
        endDate: "2023-08-02",
        status: "Pending",
        reason: "Family vacation",
      },

      {
        id: "3",
        teacherName: "Hemant Shah",
        startDate: "2023-08-01",
        endDate: "2023-08-05",
        status: "Pending",
        reason: "Family vacation",
      },

      // ... add more leave requests
    ],
  };

  const ScrollableDiv = styled("div")({
    width: "100%",
    margin: "0 auto",
    overflowX: "auto",
  });

  const columns: GridColDef[] = [
    { field: "teacherName", headerName: "Teacher Name", width: 200 },
    { field: "startDate", headerName: "Start Date", width: 200 },
    { field: "endDate", headerName: "End Date", width: 200 },
    { field: "reason", headerName: "Reason", width: 200 },
    { field: "status", headerName: "Status", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        const row: LeaveRequest = params.row as LeaveRequest;
        return (
          <>
            {row.status === "Pending" && (
              <>
                <button
                  onClick={() => handleApprove(row.id)}
                  style={{
                    marginRight: "8px",
                    // backgroundColor: "green",
                    color: "success",
                  }}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(row.id)}
                  style={{ color: "error" }}
                >
                  Reject
                </button>
              </>
            )}
          </>
        );
      },
    },
  ];
  const handleApprove = (id: string) => {
    // Implement your logic to handle approval
    // You can update the status of the leave request to "Approved"
  };

  const handleReject = (id: string) => {
    // Implement your logic to handle rejection
    // You can update the status of the leave request to "Rejected"
  };

  return (
    <Container
      sx={{ width: isMobile ? "100vw" : "70vw", marginTop: "40px" }}
      maxWidth="xl"
    >
      <Typography variant="h4" gutterBottom>
        Leave Management
      </Typography>

      <ScrollableDiv>
        <DataGrid rows={leaveRequests.data} columns={columns} autoHeight />
      </ScrollableDiv>
    </Container>
  );
};

export default LeaveManagement;
