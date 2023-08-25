import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Container } from "@mui/system";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../Store/Store";
import { deleteTeacher, fetchTeachers } from "./TeacherListSlice";

interface Teacher {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  // ... other fields
}

export const TeacherList: React.FC = () => {
  const dispatch = useAppDispatch();
  const [rows, setRows] = useState<GridRowsProp>([]);
  const [editTeacherData, setEditTeacherData] = useState<Teacher | null>(null);
  const columns: GridColDef[] = [
    {
      field: "sl",
      headerName: "SL No.",
      width: 100,
      renderCell: (params) => rows.indexOf(params.row) + 1,
    },
    { field: "id", headerName: "ID" },
    { field: "firstname", headerName: "First Name" },
    { field: "lastname", headerName: "Last Name" },
    { field: "username", headerName: "Username", width: 180 },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      renderCell: ({ row }) => (
        <div>
          <IconButton onClick={() => handleEdit(row.id)} aria-label="edit">
            <EditIcon />
          </IconButton>

          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const teachers: any[] = useSelector((state: RootState) => state.teacher.data);

  useEffect(() => {
    setRows(teachers);
  }, [teachers]);

  const handleEdit = async (editedTeacher: any) => {
    try {
      // Call your fetch teacher API here
      const response = await axios.get(
        `http://192.168.2.68:3001/user/${editedTeacher}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      if (response.status === 200) {
        // Set the teacher data to be edited
        setEditTeacherData(response.data.data);

        // You can use a state to control the visibility of the form
        // Open the RegistrationForm in edit mode
      }
    } catch (error) {
      console.error("Error fetching teacher:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      // Call your delete API here
      const response = await axios.delete(
        `http://192.168.2.68:3001/user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      if (response.status === 200) {
        // If the API call is successful, dispatch the deleteTeacher action
        dispatch(deleteTeacher(id));
      }
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  return (
    <Container>
      <div style={{ height: 480, width: "100%" }}>
        <h1 style={{ textAlign: "center" }}>Teacher List</h1>
        <DataGrid rows={rows} columns={columns} pagination />
      </div>
    </Container>
  );
};
