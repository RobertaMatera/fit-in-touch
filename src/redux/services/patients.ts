import { Dispatch } from "redux";
import {
  addPatient,
  fetchPatientsDataError,
  fetchPatientsDataRequest,
  fetchPatientsDataSuccess,
} from "../actions";
import PatientsDataService from "./patientsService";

const createNewPatient = async (newPatient: any) => {
  console.log("create", newPatient);
  try {
    let response = await PatientsDataService.createPatient(newPatient);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    let errorMessage = "Failed in posting new patient";
    console.log(errorMessage);
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
};

export const getPatientsAction = () => {
  return async (dispatch: Dispatch) => {
    try {
      let { data: response } = await PatientsDataService.getAllPatients();
      dispatch(fetchPatientsDataRequest());
      if (response) {
        dispatch(fetchPatientsDataSuccess(response));
      } else {
        dispatch(fetchPatientsDataError(response));
      }
    } catch (error) {
      let errorMessage = "Failed in fetching patients";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    }
  };
};

export const addPatientAction = (newPatient: any) => {
  debugger;
  return async (dispatch: Dispatch, getState: any) => {
    let currentState = getState().patients.patients;
    let isThereNewPatient = currentState.findIndex(
      (item: any) => item.contactInfo.mail === newPatient.contactInfo[0].mail
    );
    if (isThereNewPatient === -1) {
      const currentStateLength = currentState.length;
      console.log("currentStateLength", currentStateLength);
      let newId = currentStateLength + 1;
      newPatient.id = newId;
      let newPatientAdded = await createNewPatient(newPatient);
      //alert("user added correctly");
      dispatch(addPatient(newPatientAdded));
    } else {
      alert("this user already exist");
    }
  };
};
