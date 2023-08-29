import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../Store/Store";
import { setEditData } from "./EditTeacherAssignSlice";

interface AssignedData {
  id: number;
  className: string;
  grade: string;
  classTeacher: number;
  slNo: number; // Assuming classTeacher is an ID pointing to a teacher
}

interface Teacher {
  id: number;
  firstname: string;
  // ... other properties
}

const TeacherAssignTable = () => {
  const dispatch = useAppDispatch();
  const [assignedData, setAssignedData] = useState<AssignedData[]>([]);
  const [teacherList, setTeacherList] = useState<Teacher[]>([]);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState<number | null>(null);

  console.log(teacherList, "teeeeeeeeeee");

  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem("authToken");
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      };
      try {
        const response = await axios.get("http://192.168.2.68:3001/class", {
          headers: headers,
        });
        const dataWithSerialNumbers = response.data.data.map(
          (item: AssignedData, index: number) => ({
            ...item,
            slNo: index + 1,
          })
        );
        setAssignedData(dataWithSerialNumbers);
      } catch (error) {
        console.error("Error fetching assigned data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem("authToken");
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      };

      try {
        const response = await axios.get("http://192.168.2.68:3001/user", {
          headers: headers,
        });
        console.log(response.data.data);
        setTeacherList(response.data.data);
      } catch (error) {
        console.error("Error fetching assigned data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (idToDelete: number) => {
    setDeleteItemId(idToDelete);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = async () => {
    if (deleteItemId !== null) {
      const authToken = localStorage.getItem("authToken");
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      };

      try {
        await axios.delete(`http://192.168.2.68:3001/class/${deleteItemId}`, {
          headers: headers,
        });

        // Update the state to remove the deleted row
        setAssignedData((prevData) =>
          prevData.filter((row) => row.id !== deleteItemId)
        );
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }

    setShowDeleteDialog(false);
    setDeleteItemId(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
    setDeleteItemId(null);
  };
  useEffect(() => {}, [dispatch]);
  const handleEdit = (rowData: any) => {
    dispatch(setEditData(rowData)); // Set the edit data in Redux store
  };

  const columns: GridColDef[] = [
    { field: "slNo", headerName: "Sl No", width: 100 },
    { field: "className", headerName: "Class Name", width: 150 },
    { field: "grade", headerName: "Grade", width: 120 },
    {
      field: "classTeacher",
      headerName: "Class Teacher",
      width: 180,
      renderCell: (params) => {
        const teacher = teacherList.find(
          (teacher) => teacher.id === params.value
        );
        const teacherName = teacher ? teacher.firstname : "-";
        return teacherName;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <div>
          <IconButton
            onClick={() => {
              // Handle edit action here
              handleEdit(params.row);
              console.log(`Edit clicked for row with ID ${params.id}`);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              handleDelete(params.id as number);
              console.log(`Delete clicked for row with ID ${params.id}`);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={assignedData}
        columns={columns}
        // pageSize={10}
      />
      <Dialog open={showDeleteDialog} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TeacherAssignTable;
