import { Dispatch } from "redux";
import {
  fetchPatientsDataError,
  fetchPatientsDataRequest,
  fetchPatientsDataSuccess,
} from "../actions";
import PatientsDataService from "./patientsService";

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
