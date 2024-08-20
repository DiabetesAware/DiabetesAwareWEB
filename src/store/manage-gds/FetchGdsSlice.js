import { APIGulaDarah } from "@/apis/APIGulaDarah";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  message: "",
  data: {},
};

export const fetchGds= createAsyncThunk("GET /gds/id", APIGulaDarah.getGds);

export const fetchGdsSlice = createSlice({
  name: "fetchGds",
  initialState,
  reducers: {
    clearFetchGdsState: (state) => {
      state.status = "idle";
      state.message = "";
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGds.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchGds.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload?.message;
      state.data = action.payload?.data;
    });
    builder.addCase(fetchGds.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.message;
    });
  },
});

export const fetchGdsSelector = (state) => state.fetchGds;
export const { clearFetchGdsState } = fetchGdsSlice.actions;
export const fetchGdsReducer = fetchGdsSlice.reducer;