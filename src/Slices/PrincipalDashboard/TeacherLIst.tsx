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
}

export const TeacherList: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.teacher.loading);
  const teachers: any[] = useSelector((state: RootState) => state.teacher.data);

  const dispatch = useAppDispatch();

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

  useEffect(() => {
    console.log(teachers);
    if (teachers && teachers.length > 0) {
      setRows(teachers);
    }
  }, [teachers]);

  const [rows, setRows] = useState<GridRowsProp>([]);
  console.log(rows);

  async function handleEdit(editedTeacher: any): Promise<void> {
    try {
      const response = await axios.get(
        `http://192.168.2.68:3001/user/${editedTeacher}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      if (response.status === 200) {
        setEditTeacherData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching teacher:", error);
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://192.168.2.68:3001/user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      if (response.status === 200) {
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
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <DataGrid rows={rows} columns={columns} pagination />
        )}
      </div>
    </Container>
  );
};
