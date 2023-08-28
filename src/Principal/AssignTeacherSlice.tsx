import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  data: any[];
  assignClassLoading: boolean;
  assignClassSuccess: boolean;
  assignClassError: string | null;
}

const initialState: UserState = {
  data: [],
  assignClassLoading: false,
  assignClassSuccess: false,
  assignClassError: null,
};

const AssignTeacherSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    AssignStart: (state) => {
      state.assignClassLoading = true;
    },
    AssignSuccess: (state, action) => {
      state.assignClassLoading = false;
      state.assignClassSuccess = true;
      state.data = action.payload;
    },
    AssignFailure: (state, action: PayloadAction<string>) => {
      state.assignClassLoading = false;
      state.assignClassSuccess = false;
      state.assignClassError = action.payload;
    },
  },
});

export const { AssignStart, AssignSuccess, AssignFailure } =
  AssignTeacherSlice.actions;

export default AssignTeacherSlice.reducer;
