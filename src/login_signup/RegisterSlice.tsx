import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  registrationLoading: boolean;
  registrationSuccess: boolean;
  registrationError: string | null;
}

const initialState: UserState = {
  registrationLoading: false,
  registrationSuccess: false,
  registrationError: null,
};

const RegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registrationStart: (state) => {
      state.registrationLoading = true;
      state.registrationSuccess = false;
      state.registrationError = null;
    },
    registrationSuccess: (state) => {
      state.registrationLoading = false;
      state.registrationSuccess = true;
      state.registrationError = null;
    },
    registrationFailure: (state, action: PayloadAction<string>) => {
      state.registrationLoading = false;
      state.registrationSuccess = false;
      state.registrationError = action.payload;
    },
  },
});

export const { registrationStart, registrationSuccess, registrationFailure } =
  RegisterSlice.actions;

export default RegisterSlice.reducer;
