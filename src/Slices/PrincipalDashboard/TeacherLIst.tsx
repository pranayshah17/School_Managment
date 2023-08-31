import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Container } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../Store/Store";
import RegistrationForm from "../../login_signup/RegistrationForm";
import { deleteTeacherList, fetchTeachers } from "./TeacherListSlice";

const TeacherList = () => {
  const dispatch = useAppDispatch();
  const teacherData = useSelector((state: RootState) => state.teacher.data);
  const loading = useSelector((state: RootState) => state.teacher.loading);

  const [editData, setEditData] = useState<any>({
    isEditing: false,
    initialValues: {},
  });

  const handleDelete = (teacherId: string) => {
    dispatch(deleteTeacherList(teacherId));
  };

  const handleEdit = (teacher: any) => {
    setEditData({ isEditing: true, initialValues: teacher });
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "firstname", headerName: "First Name", width: 150 },
    { field: "lastname", headerName: "Last Name", width: 150 },
    { field: "username", headerName: "Username", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <div>
          {/* Edit icon */}
          <IconButton
            color="primary"
            aria-label="Edit"
            onClick={() => handleEdit(params.row)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => handleDelete(params.row.id)}
            color="secondary"
            aria-label="Delete"
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  if (loading === "pending") {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <RegistrationForm
        initialValues={editData.initialValues}
        isEditing={editData.isEditing}
        setEditeData={setEditData}
        editeData={editData}
        teacherId={editData.id}
      />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={teacherData || []} columns={columns} />
      </div>
    </Container>
  );
};

export default TeacherList;
