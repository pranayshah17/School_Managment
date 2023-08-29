import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Teacher {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
}
interface UserState {
  data: any[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  teacher: any;
}

const initialState: UserState = {
  data: [] as Teacher[],
  loading: "idle",
  error: null,
  teacher: "",
};

const TeacherListSlice = createSlice({
  name: "teacher",
  initialState: initialState,

  reducers: {
    fetchTeachersPending: (state) => {
      state.loading = "pending";
    },
    fetchTeachersFulfilled: (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    },
    fetchTeachersRejected: (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    },
    deleteTeacher: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(
        (teacher) => teacher.id !== action.payload
      );
    },
  },
});

export const fetchTeachers = () => {
  return async (dispatch: any) => {
    try {
      const authToken = localStorage.getItem("authToken");
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      };

      const response = await axios.get("http://192.168.2.68:3001/user", {
        headers: headers,
      });

      // dispatch(fetchTeachersFulfilled(response.data.data));
      console.log("=========>", response.data.data);
      return response.data.data;
    } catch (error: any) {
      throw error;
    }
  };
};

export const {
  fetchTeachersPending,
  fetchTeachersFulfilled,
  fetchTeachersRejected,
  deleteTeacher,
} = TeacherListSlice.actions;

export default TeacherListSlice.reducer;
