import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  data: any[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  user: any;
  //   selectedYear: number;
}

const initialState: UserState = {
  data: [],
  loading: "idle",
  error: null,
  user: "",
  //   selectedYear: 2023,
};

const AttendaceSlice = createSlice({
  name: "attendace",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },
  reducers: {
    fetchAttendacePending: (state) => {
      state.loading = "pending";
    },
    fetchAttendaceFulfilled: (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    },
    fetchAttendaceRejected: (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    },
  },
});

export const fetchAttendace = () => {
  return async (dispatch: any) => {
    try {
      const authToken = localStorage.getItem("authToken");
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      };

      const response = await axios.get(
        "http://192.168.2.68:3001/dashboard/principal/attendace",
        {
          headers: headers,
        }
      );

      // dispatch(fetchAttendaceFulfilled(response.data));
      return response.data;
    } catch (error: any) {
      console.log("Error response:", error.response);
      dispatch(fetchAttendaceRejected(error.message || "An error occurred"));
      // throw error;
    }
  };
};

export const {
  fetchAttendacePending,
  fetchAttendaceFulfilled,
  fetchAttendaceRejected,
  //   setSelectedYear,
} = AttendaceSlice.actions;

export default AttendaceSlice.reducer;
