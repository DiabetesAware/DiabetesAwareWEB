import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIAuth } from "@/apis/";

const initialState = {
  status: "idle",
  message: "",
};

export const createAdmin = createAsyncThunk("POST /auth/register-admin", APIAuth.createAdmin);

const createAdminSlice = createSlice({
  name: "createAdmin",
  initialState,
  reducers: {
    clearCreateAdminState: (state) => {
      state.status = "idle";
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAdmin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createAdmin.fulfilled, (state, action) => {
        state.status = "success";
        state.message = action.payload.message;
      })
      .addCase(createAdmin.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
      });
  },
});

export const createAdminSelector = (state) => state.createAdmin;
export const { clearCreateAdminState } = createAdminSlice.actions;
export const createAdminReducer = createAdminSlice.reducer;
