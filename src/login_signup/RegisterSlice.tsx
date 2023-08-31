import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  data: any[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  data: [],
  loading: "idle",
  error: null,
};

const RegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const registerUser = createAsyncThunk(
  "registerUser",
  async (formData: any) => {
    try {
      const authToken = localStorage.getItem("authToken");
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      };
      const response = await axios.post(
        "http://192.168.2.68:3001/auth/signup",
        formData,
        {
          headers: headers,
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export default RegisterSlice.reducer;
