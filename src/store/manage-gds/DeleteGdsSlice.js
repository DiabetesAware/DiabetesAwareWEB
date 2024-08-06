import { APIGulaDarah } from "@/apis/APIGulaDarah";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  message: "",
};

export const deleteGds = createAsyncThunk("DELETE /gds/delete-gds", APIGulaDarah.deleteGds);

export const deleteGdsSlice = createSlice({
  name: "deleteGds",
  initialState,
  reducers: {
    clearDeleteGdsState: (state) => {
      state.status = "idle";
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteGds.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteGds.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message;
      state.data = action.payload.data;
    });
    builder.addCase(deleteGds.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.message;
    });
  },
});

export const deleteGdsSelector = (state) => state.deleteGds;
export const { clearDeleteGdsState } = deleteGdsSlice.actions;
export const deleteGdsReducer = deleteGdsSlice.reducer;