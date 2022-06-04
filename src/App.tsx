import "./App.scss";
import "react-big-calendar/lib/sass/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/NavigationComponent/NavigationComponent";
import DoctorsPatientsSection from "./components/DoctorsPatient/DoctorsPatientsSectionComponent";
import MainDoctorSection from "./components/MainDoctorSection/MainDoctorSectionComponent";
import Footer from "./components/Footer/FooterComponent";
import PatientDetails from "./components/PatientDetails/PatientDetailsComponent";
import AddPatient from "./components/AddPatient/AddPatientComponent";
import AllPatientInfo from "./components/PatientDetails/AllPatientInfoComponent";
import PatientHistory from "./components/PatientHistory/PatientHistoryComponent";
import DietBoard from "./components/DietBoard/DietBoardComponent";
import LastDiet from "./components/LastDiet/LastDietComponent";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPatientsAction } from "./redux/services/patients";
import ScrollToTop from "./components/ScrollToTopComponent";

function App() {
  const patientsList: any = useSelector((state: any) => {
    return state.patients.patients;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatientsAction());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <div>
          <header>
            <Navigation />
          </header>
          <Routes>
            <Route path="/" element={<MainDoctorSection />} />
            <Route
              path="/patients"
              element={<DoctorsPatientsSection patients={patientsList} />}
            />
            <Route
              path="/patients/:id"
              element={<PatientDetails patientData={patientsList} />}
            />
            <Route path="/add-patient" element={<AddPatient />} />
            <Route
              path="/patients/:id/info"
              element={<AllPatientInfo patientInfoProps={patientsList} />}
            />
            <Route path="/patient/:id/history" element={<PatientHistory />} />
            <Route path="/patient/:id/diet-board" element={<DietBoard />} />
            <Route path="/patient/:id/last-diet" element={<LastDiet />} />
          </Routes>
          <footer>
            <Footer />
          </footer>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
