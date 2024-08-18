import { APIManageUser } from "@/apis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  message: "",
};

export const deletePatient = createAsyncThunk(
  "patients/delete",
  async (id) => {
    const response = await APIManageUser.deletePatient(id);
    return response.data;
  }
);


export const deletePatientSlice = createSlice({
  name: "deletePatient",
  initialState,
  reducers: {
    clearDeletePatientState: (state) => {
      state.status = "idle";
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deletePatient.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deletePatient.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message;
    });
    builder.addCase(deletePatient.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.message;
    });
  },
});

export const deletePatientSelector = (state) => state.deletePatient;
export const { clearDeletePatientState } = deletePatientSlice.actions;
export const deletePatientReducer = deletePatientSlice.reducer;