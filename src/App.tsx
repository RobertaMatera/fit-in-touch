import "./App.scss";
import "react-big-calendar/lib/sass/styles.scss";
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<MainDoctorSection />} />
        <Route path="/patients" element={<DoctorsPatientsSection />} />
        <Route path="/patients/id" element={<PatientDetails />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/patients/id/info" element={<AllPatientInfo />} />
        <Route path="/patient/id/history" element={<PatientHistory />} />
        <Route path="/patient/id/diet-board" element={<DietBoard />} />
        <Route path="/patient/id/last-diet" element={<LastDiet />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
