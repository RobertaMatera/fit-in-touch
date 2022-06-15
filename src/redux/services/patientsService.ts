import http from "../../http-common";

class PatientsDataService {
  getAllPatients() {
    return http.get("/patients");
  }
  createPatient(newPatient: any) {
    return http.post("/patients", newPatient);
  }
  removePatient(id: number) {
    return http.delete(`/patients/${id}`);
  }
  editPatient(id: number, patientsToEdit: any) {
    return http.put(`/patients/${id}`, patientsToEdit);
  }
}

export default new PatientsDataService();
