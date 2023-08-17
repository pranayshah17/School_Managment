import { Add } from "@mui/icons-material";
import {
  Button,
  Drawer,
  Paper,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Container } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import AddStudent from "./AddStudent";

interface StudentData {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

const columns: GridColDef[] = [
  { field: "username", headerName: "Username", width: 150 },
  { field: "firstname", headerName: "First Name", width: 150 },
  { field: "lastname", headerName: "Last Name", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone", width: 150 },
];

const rows: StudentData[] = [
  {
    id: 11,
    username: "john_doe",
    firstname: "John",
    lastname: "Doe",
    email: "john@example.com",
    phone: "123-456-7890",
  },
  {
    id: 22,
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 22,
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 22,
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 22,
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 22,
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 22,
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 22,
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 22,
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 22,
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 22,
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 22,
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 22,
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 22,
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 22,
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
];

const ScrollableDiv = styled("div")({
  width: "100%",
  margin: "0 auto",
  overflowX: "auto",
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
const StudentsList: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Container
      sx={{
        width: isMobile ? "90vw" : isTablet ? "60vw" : "60vw",
        padding: "0px !important",
        marginBottom: 3,
      }}
    >
      <HoverablePaper elevation={3}>
        <Typography variant="h5" gutterBottom mb={2}>
          Students Details
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={handleDrawerOpen}
            sx={{ float: "right" }}
          >
            Add Student
          </Button>
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
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <AddStudent onClose={handleDrawerClose} />
      </Drawer>
    </Container>
  );
};

export default StudentsList;
