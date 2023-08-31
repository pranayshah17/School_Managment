import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Teacher {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
}

interface UserState {
  data: Teacher[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: any;
}

const initialState: UserState = {
  data: [],
  loading: "idle",
  error: null,
};

const TeacherListSlice = createSlice({
  name: "teacher",
  initialState: initialState,
  reducers: {
    deleteTeacher: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(
        (teacher) => teacher.id !== action.payload
      );
    },
    editTeacher: (state, action: PayloadAction<Teacher>) => {
      const editedTeacher = action.payload;
      const index = state.data.findIndex(
        (teacher) => teacher.id === editedTeacher.id
      );
      if (index !== -1) {
        state.data[index] = editedTeacher;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});

export const fetchTeachers = createAsyncThunk(
  "teacher/fetchTeachers",
  async (_, { rejectWithValue }) => {
    try {
      const authToken = localStorage.getItem("authToken");
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      };

      const response = await axios.get("http://192.168.2.68:3001/user", {
        headers: headers,
      });

      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTeacherList = createAsyncThunk(
  "teacher/deleteTeachers",
  async (teacherId: string, { rejectWithValue }) => {
    try {
      const authToken = localStorage.getItem("authToken");
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      };

      const response = await axios.delete(
        `http://192.168.2.68:3001/user/${teacherId}`,
        {
          headers: headers,
        }
      );

      return teacherId;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const editTeacher = createAsyncThunk(
  "teacher/editTeacher",
  async (
    { teacherId, updatedData }: { teacherId: any; updatedData: any },
    { rejectWithValue }
  ) => {
    try {
      const authToken = localStorage.getItem("authToken");
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      };

      const response = await axios.put(
        `http://192.168.2.68:3001/user/${teacherId}`,
        updatedData,
        {
          headers: headers,
        }
      );

      return response.data.updatedTeacher;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const { deleteTeacher } = TeacherListSlice.actions;

export default TeacherListSlice.reducer;
