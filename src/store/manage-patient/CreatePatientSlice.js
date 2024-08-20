import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIManageUser } from "@/apis";

const initialState = {
  status: "idle",
  message: "",
  token: null,
};

// Async thunk untuk membuat pasien
export const createPatient = createAsyncThunk(
  "POST /patient/create",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await APIManageUser.createPatient(data);
      const { token } = response.data;
      if (token) {
        dispatch(setToken(token));
      }

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const createPatientSlice = createSlice({
  name: "createPatient",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("patient_token", action.payload);
    },
    clearToken(state) {
      state.token = null;
      localStorage.removeItem("patient_token");
    },
    clearCreatePatientState(state) {
      state.status = "idle";
      state.message = "";
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createPatient.fulfilled, (state, action) => {
        state.status = "success";
        state.message = action.payload.message;
        const { token } = action.payload.data;
        if (token) {
          state.token = token;
          localStorage.setItem("patient_token", token);
        }
      })
      .addCase(createPatient.rejected, (state, action) => {
        state.status = "failed";
          state.message = action.error.message;
      });
  },
});

export const createPatientSelector = (state) => state.createPatient;
  createPatientSlice.actions;
  export const { setToken, clearToken, clearCreatePatientState } =
    createPatientSlice.actions;
export const createPatientReducer = createPatientSlice.reducer;


