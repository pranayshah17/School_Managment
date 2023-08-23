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
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },
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

// const authToken = localStorage.getItem("authToken");
// const headers = {
//   Authorization: `Bearer ${authToken}`,
//   "Content-Type": "application/json", // You can set other headers as needed
// };

export const fetchUsers = () => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchUsersPending());

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

      dispatch(fetchUsersFulfilled(response.data));
    } catch (error: any) {
      dispatch(fetchUsersRejected(error.message || "An error occurred"));
    }
  };
};

export const { fetchUsersPending, fetchUsersFulfilled, fetchUsersRejected } =
  userSlice.actions;

export default userSlice.reducer;
