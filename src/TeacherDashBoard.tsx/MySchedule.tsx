import {
  Paper,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Container } from "@mui/system";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Teacher {
  id: number;
  name: string;
  schedule: string;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "Teacher ID", width: 300 },
  { field: "name", headerName: "Teacher Name", width: 300 },
  { field: "schedule", headerName: "Schedule", width: 300 },
];

const rows: Teacher[] = [
  { id: 1, name: "John Doe", schedule: "Mon, Wed, Fri - 9:00 AM to 12:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },
  { id: 2, name: "Jane Smith", schedule: "Tue, Thu - 1:00 PM to 4:00 PM" },

  // Add more rows here as needed
];

const ScrollableDiv = styled("div")({
  width: "100%",
  margin: "0 auto",
  overflowX: "auto",
  height: "400px",
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

const MySchedule: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      sx={{
        width: isMobile ? "90vw" : isTablet ? "60vw" : "60vw",
        padding: "0px !important",
        marginBottom: 3,
      }}
    >
      <HoverablePaper elevation={3}>
        <Typography variant="h5" gutterBottom>
          My Schedules
        </Typography>

        <ScrollableDiv>
          <StyledDataGrid
            rows={rows}
            columns={columns}
            autoHeight={false}
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
      </HoverablePaper>
    </Container>
  );
};

export default MySchedule;
