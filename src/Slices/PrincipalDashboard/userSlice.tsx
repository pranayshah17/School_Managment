import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  data: any[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  user: any;
}

const initialState: UserState = {
  data: [],
  loading: "idle",
  error: null,
  user: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    fetchUsersPending: (state) => {
      state.loading = "pending";
    },
    fetchUsersFulfilled: (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    },
    fetchUsersRejected: (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    },
  },
});

export const fetchUsers = () => {
  return async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      };
      const response = await axios.get(
        "http://192.168.2.68:3001/dashboard/principal",
        {
          headers: headers,
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
};

export const { fetchUsersPending, fetchUsersFulfilled, fetchUsersRejected } =
  userSlice.actions;

export default userSlice.reducer;
