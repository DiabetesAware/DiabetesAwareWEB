import { APIManageUser } from "@/apis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  message: "",
};

export const patchPatient = createAsyncThunk("PATCH /patient/update", APIManageUser.patchPatient);

export const patchPatientSlice = createSlice({
  name: "patchPatient",
  initialState,
  reducers: {
    clearPatchPatientState: (state) => {
      state.status = "idle";
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(patchPatient.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(patchPatient.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message;
    });
    builder.addCase(patchPatient.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.message;
    });
  },
});

export const patchPatientSelector = (state) => state.patchPatient;
export const { clearPatchPatientState } = patchPatientSlice.actions;
export const patchPatientReducer = patchPatientSlice.reducer;