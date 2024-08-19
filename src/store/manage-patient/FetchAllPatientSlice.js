import { APIManageUser } from "@/apis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
  message: "",
  pagination: {},
  count_data: 0,
};

export const fetchAllPatient = createAsyncThunk(
  "GET /patient/",
  async (params, { rejectWithValue }) => {
    try {
      const response = await APIManageUser.getAllPatient(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAllPatientSlice = createSlice({
  name: "fetchAllPatient",
  initialState,
  reducers: {
    clearFetchAllPatientState: (state) => {
      state.status = "idle";
      state.message = "";
      state.data = [];
      state.pagination = {};
      state.count_data = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPatient.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAllPatient.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message;
      state.data = action.payload.datas;
      state.pagination = {
        current_page: action.payload.current_page,
        total_pages: action.payload.total_pages,
      };
      state.count_data = action.payload.total_data;
    });
    builder.addCase(fetchAllPatient.rejected, (state, action) => {
      state.status = "failed";
      state.message = action.error.message;
    });
  },
});

export const fetchAllPatientSelector = (state) => state.fetchAllPatient;
export const { clearFetchAllPatientState } = fetchAllPatientSlice.actions;
export const fetchAllPatientReducer = fetchAllPatientSlice.reducer;
