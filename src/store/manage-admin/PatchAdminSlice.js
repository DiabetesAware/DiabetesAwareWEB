import { APIAdmin } from "@/apis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  message: "",
};

export const patchAdmin = createAsyncThunk(
  "UPDATE /management-admin/id",
  APIAdmin.patchAdmin
);

export const patchAdminSlice = createSlice({
  name: "patchAdmin",
  initialState,
  reducers: {
    clearPatchAdminState: (state) => {
      state.status = "idle";
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(patchAdmin.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(patchAdmin.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message;
    });
    builder.addCase(patchAdmin.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.message;
    });
  },
});

export const patchAdminSelector = (state) => state.patchAdmin;
export const { clearPatchAdminState } = patchAdminSlice.actions;
export const patchAdminReducer = patchAdminSlice.reducer;