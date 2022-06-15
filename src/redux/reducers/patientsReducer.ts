import { initialState } from "../store";

import {
  FETCH_PATIENTS_DATA_ERROR,
  FETCH_PATIENTS_DATA_REQUEST,
  FETCH_PATIENTS_DATA_SUCCESS,
  ADD_PATIENT,
} from "../actions/types";

const patientReducer = (state = initialState.patients, action: any) => {
  switch (action.type) {
    case FETCH_PATIENTS_DATA_REQUEST:
      return {
        ...state,
        errorCode: null,
      };
    case FETCH_PATIENTS_DATA_SUCCESS:
      return {
        ...state,
        patients: action.items,
      };
    case FETCH_PATIENTS_DATA_ERROR:
      return {
        ...state,
        errorCode: action.payload.error,
        patients: [],
      };
    case ADD_PATIENT:
      let updatedState = { ...state };
      let patientsState: any[] = updatedState.patients;
      patientsState.push(action.newPatient);
      return updatedState;
    default:
      return state;
  }
};

export default patientReducer;
