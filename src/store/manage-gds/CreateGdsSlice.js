import { APIGulaDarah } from "@/apis/APIGulaDarah";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  message: "",
  data: {},
};

export const createGds = createAsyncThunk("POST /gds/create-gds", APIGulaDarah.createGds);

export const createGdsSlice = createSlice({
  name: "createGds",
  initialState,
  reducers: {
    clearCreateGdsState: (state) => {
      state.status = "idle";
      state.message = "";
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createGds.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(createGds.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message;
      state.data = action.payload.data;
    });
    builder.addCase(createGds.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.message
    });
  },
});

export const createGdsSelector = (state) => state.createGds;
export const { clearCreateGdsState } = createGdsSlice.actions;
export const createGdsReducer = createGdsSlice.reducer;