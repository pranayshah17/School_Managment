// EditDataSlice.ts

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editData: null,
};

const editTeacherAssignSlice = createSlice({
  name: "editData",
  initialState,
  reducers: {
    setEditData: (state, action) => {
      state.editData = action.payload;
    },
  },
});

export const { setEditData } = editTeacherAssignSlice.actions;
export const selectEditData = (state: any) => state.editData.editData;
export default editTeacherAssignSlice.reducer;
