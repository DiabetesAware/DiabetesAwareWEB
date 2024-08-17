import { APIGulaDarah } from "@/apis/APIGulaDarah";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  message: "",
};

export const patchGds = createAsyncThunk("GET /gds/id", APIGulaDarah.patchGds);

export const patchGdsSlice = createSlice({
  name: "patchGds",
  initialState,
  reducers: {
    clearPatchGdsState: (state) => {
      state.data = {};
      state.status = "idle";
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(patchGds.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(patchGds.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload?.message;
    });
    builder.addCase(patchGds.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.message;
    });
  },
});

export const patchGdsSelector = (state) => state.patchGds;
export const { clearPatchGdsState } = patchGdsSlice.actions;
export const patchGdsReducer = patchGdsSlice.reducer;