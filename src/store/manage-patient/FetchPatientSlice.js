import { APIManageUser } from "@/apis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  message: "",
  data: {},
};

export const fetchPatient = createAsyncThunk("GET /patient/id", APIManageUser.getPatient);

export const fetchPatientSlice = createSlice({
  name: "fetchPatient",
  initialState,
  reducers: {
    clearFetchPatientState: (state) => {
      state.status = "idle";
      state.message = "";
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPatient.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPatient.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload?.message
      state.data = action.payload?.data;
    });
    builder.addCase(fetchPatient.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.payload?.message || action.error.message || "Login failed";
    });
  },
});

export const fetchPatientSelector = (state) => state.fetchPatient;
export const { clearFetchPatientState } = fetchPatientSlice.actions;
export const fetchPatientReducer = fetchPatientSlice.reducer;