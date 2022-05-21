import {
  FETCH_PATIENTS_DATA_ERROR,
  FETCH_PATIENTS_DATA_REQUEST,
  FETCH_PATIENTS_DATA_SUCCESS,
} from "./types";

export function fetchPatientsDataRequest() {
  return {
    type: FETCH_PATIENTS_DATA_REQUEST,
  };
}

export function fetchPatientsDataSuccess(items: any) {
  return {
    type: FETCH_PATIENTS_DATA_SUCCESS,
    items,
  };
}

export function fetchPatientsDataError(error: any) {
  return {
    type: FETCH_PATIENTS_DATA_ERROR,
    payload: { error },
  };
}
