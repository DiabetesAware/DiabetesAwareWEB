export {
  createPatient,
  createPatientSelector,
  clearCreatePatientState,
  createPatientReducer,
} from "./CreatePatientSlice";

export {
  fetchAllPatient,
  fetchAllPatientSelector,
  clearFetchAllPatientState,
  fetchAllPatientReducer,
} from "./FetchAllPatientSlice";

export {
  deletePatient,
  deletePatientSelector,
  clearDeletePatientState,
  deletePatientReducer,
} from "./DeletePatientSlice";

export {
  patchPatient,
  patchPatientSelector,
  clearPatchPatientState,
  patchPatientReducer,
} from "./PatchPatientSlice";

export {
  fetchPatient,
  fetchPatientSelector,
  clearFetchPatientState,
  fetchPatientReducer,
} from "./FetchPatientSlice";
