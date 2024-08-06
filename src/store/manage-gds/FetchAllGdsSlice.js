import { APIGulaDarah } from "@/apis/APIGulaDarah";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
  message: "",
  pagination: {},
  count_data: 0,
};

export const fetchAllGds = createAsyncThunk("GET /gds", APIGulaDarah.getAllGds);

export const fetchAllGdsSlice = createSlice({
  name: "fetchAllGds",
  initialState,
  reducers: {
    clearFetchAllGdsState: (state) => {
      state.status = "idle";
      state.message = "";
      state.data = [];
      state.pagination = {};
      state.count_data = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllGds.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAllGds.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message;
      state.data = action.payload.datas;
      state.pagination = {
        current_page: action.payload.current_page,
        total_pages: action.payload.total_pages,
      };
      state.count_data = action.payload.total_data;
    });
    builder.addCase(fetchAllGds.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.message;
    });
  },
});

export const fetchAllGdsSelector = (state) => state.fetchAllGds;
export const { clearFetchAllGdsState } = fetchAllGdsSlice.actions;
export const fetchAllGdsReducer = fetchAllGdsSlice.reducer;
