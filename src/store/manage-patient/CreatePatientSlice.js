import { APIManageUser } from "@/apis/";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  message: "",
};

export const createPatient = createAsyncThunk("POST /patient/create", APIManageUser.createPatient);

export const createPatientSlice = createSlice({
  name: "createPatient",
  initialState,
  reducers: {
    clearCreatePatientState: (state) => {
      state.status = "idle";
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPatient.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(createPatient.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message;
    });
    builder.addCase(createPatient.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.message ;
    });
  },
});

export const createPatientSelector = (state) => state.createPatient;
export const { clearCreatePatientState } = createPatientSlice.actions;
export const createPatientReducer = createPatientSlice.reducer;