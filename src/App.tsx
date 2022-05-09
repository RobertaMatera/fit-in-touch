import "./App.scss";
import "react-big-calendar/lib/sass/styles.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/NavigationComponent/NavigationComponent";
import DoctorsPatientsSection from "./components/DoctorsPatient/DoctorsPatientsSectionComponent";
import MainDoctorSection from "./components/MainDoctorSection/MainDoctorSectionComponent";
import Footer from "./components/Footer/FooterComponent";
import PatientDetails from "./components/PatientDetails/PatientDetailsComponent";

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
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
