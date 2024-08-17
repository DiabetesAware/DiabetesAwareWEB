import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";

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

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  // auth reducer
  adminLogin: loginReducer,
  createAdmin: createAdminReducer,

  // admin reducers
  fetchAllAdmin: fetchAllAdminReducer,
  fetchAdmin: fetchAdminReducer,
  patchAdmin: patchAdminReducer,
  deleteAdmin: deleteAdminReducer,

  // gds reducers
  fetchAllGds: fetchAllGdsReducer,
  fetchGds: fetchGdsReducer,
  deleteGds: deleteGdsReducer,
  patchGds: patchGdsReducer,
  createGds: createGdsReducer,

  // patient reducers
  fetchAllPatient: fetchAllPatientReducer,
  fetchPatient: fetchPatientReducer,
  patchPatient: patchPatientReducer,
  deletePatient: deletePatientReducer,
  createPatient: createPatientReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
