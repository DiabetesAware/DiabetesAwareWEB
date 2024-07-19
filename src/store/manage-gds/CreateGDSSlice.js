import { APIGulaDarah } from "@/apis/APIGulaDarah";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  message: "",
  data: {},
};

export const FetchAllGDSSlice = createAsyncThunk("/auth/login-admin", APIGulaDarah.getAllBlood);

export const GdsSlice = createSlice({
  name: "FetchAllGDSSlice",
  initialState,
  reducers: {
    clearAuthState: (state) => {
      state.status = "idle";
      state.message = "";
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(adminLogin.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(adminLogin.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload?.message || "Login successful";
      state.data = action.payload?.data || {};
    });
    builder.addCase(adminLogin.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.payload?.message || action.error.message || "Login failed";
    });
  },
});

export const adminLoginSelector = (state) => state.auth;
export const { clearAuthState } = GdsSlice.actions;
export const GdsReducer = GdsSlice.reducer;