import { configureStore } from "@reduxjs/toolkit";

// auth
import { loginReducer, createAdminReducer } from "./auth";

// patient
import {
  fetchAllPatientReducer,
  fetchPatientReducer,
  createPatientReducer,
  patchPatientReducer,
  deletePatientReducer,
} from "./manage-patient";

// admin
import {
  fetchAllAdminReducer,
  fetchAdminReducer,
  patchAdminReducer,
  deleteAdminReducer,
} from "./manage-admin";

// gds
import {
  fetchAllGdsReducer,
  fetchGdsReducer,
  createGdsReducer,
  patchGdsReducer,
  deleteGdsReducer
} from "./manage-gds/";

export const store = configureStore({
  reducer: {
    // auth reducer
    auth: loginReducer,
    createAdmin: createAdminReducer,

    // admin reducer
    fetchAllAdmin: fetchAllAdminReducer,
    fetchAdmin: fetchAdminReducer,
    patchAdmin: patchAdminReducer,
    deleteAdmin: deleteAdminReducer,

    // gds reducer
    fetchAllGds: fetchAllGdsReducer,
    fetchGds: fetchGdsReducer,
    deleteGds: deleteGdsReducer,
    patchGds: patchGdsReducer,
    createGds: createGdsReducer,

    // patient reducer
    fetchAllPatient: fetchAllPatientReducer,
    fetchPatient: fetchPatientReducer,
    patchPatient: patchPatientReducer,
    deletePatient: deletePatientReducer,
    createPatient: createPatientReducer,
  },
});
