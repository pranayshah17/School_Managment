import { Paper, styled, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

interface LeaveListProps {
  leaves: { startDate: string; endDate: string; reason: string }[];
}

const LeaveList: React.FC<LeaveListProps> = ({ leaves }) => {
  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
    { field: "reason", headerName: "Reason", flex: 2 },
  ];

  const rows = leaves.map((leave, index) => ({
    id: index,
    startDate: leave.startDate,
    endDate: leave.endDate,
    reason: leave.reason,
  }));

  // Calculate the maximum height for the DataGrid based on screen height
  const screenHeight = window.innerHeight;
  const maxTableHeight = screenHeight * 0.3; // Adjust the multiplier as needed
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const ScrollableDiv = styled("div")({
    width: "100%",
    margin: "0 auto",
    overflowX: "auto",
    height: maxTableHeight,
  });
  const HoverablePaper = styled(Paper)({
    padding: 10,
    width: "100%",
    transition: "boxShadow 0.3s",
    "&:hover": {
      boxShadow: "0 0px 25px rgba(0, 0, 0, 0.2)",
    },
  });
  const StyledDataGrid = styled(DataGrid)({
    "& .MuiDataGrid-cell:focus": {
      outline: "none", // Remove the outline border on cell focus
    },
  });
  return (
    <Container
      sx={{
        width: isMobile ? "90vw" : isTablet ? "60vw" : "60vw",
        padding: "0px !important",
        marginBottom: 3,
        marginTop: "24px",
      }}
    >
      <Paper
        elevation={3}
        style={{
          width: "100%",
          maxWidth: "100%",
          marginBottom: "20px",
          height: "auto",
        }}
      >
        {/* <div style={{ height: maxTableHeight, width: "100%" }}> */}
        <ScrollableDiv>
          <DataGrid
            columns={columns}
            rows={rows}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </ScrollableDiv>
        {/* </div> */}
      </Paper>
    </Container>
  );
};

export default LeaveList;
