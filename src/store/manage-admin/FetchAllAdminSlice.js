import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIAdmin } from "@/apis";

const initialState = {
  data: [],
  status: "idle",
  message: "",
  pagination: {},
  count_data: 0,
};

export const fetchAllAdmin = createAsyncThunk(
  "fetchAllAdmin",
  async (params, { rejectWithValue }) => {
    try {
      const response = await APIAdmin.getAllAdmin(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAllAdminSlice = createSlice({
  name: "fetchAllAdmin",
  initialState,
  reducers: {
    clearFetchAllAdminState: (state) => {
      state.status = "idle";
      state.message = "";
      state.data = [];
      state.pagination = {};
      state.count_data = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllAdmin.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAllAdmin.fulfilled, (state, action) => {
      state.status = "success";
      state.message = "Success";
      state.data = action.payload.datas;
      state.pagination = {
        current_page: action.payload.current_page,
        total_pages: action.payload.total_pages,
      };
      state.count_data = action.payload.total_data;
    });
    builder.addCase(fetchAllAdmin.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.massage;
    });
  },
});

export const fetchAllAdminSelector = (state) => state.fetchAllAdmin;
export const { clearFetchAllAdminState } = fetchAllAdminSlice.actions;
export const fetchAllAdminReducer = fetchAllAdminSlice.reducer;
