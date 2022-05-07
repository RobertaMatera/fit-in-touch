import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/NavigationComponent/NavigationComponent";
import DoctorsPatientsSection from "./components/DoctorsPatient/DoctorsPatientsSectionComponent";
import MainDoctorSection from "./components/MainDoctorSection/MainDoctorSectionComponent";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<MainDoctorSection />}></Route>
        <Route path="/patients" element={<DoctorsPatientsSection />}></Route>
      </Routes>
    </div>
  );
}

export default App;
