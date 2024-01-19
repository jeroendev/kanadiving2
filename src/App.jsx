import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarKana from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./index.css";
import BackToTopButton from "./components/backtotop/BackToTopButton";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";
import BeginnerCourses from "./components/courses/BeginnerCourses";
import AdvancedCourses from "./components/courses/AdvancedCourses";
import SpecialityCourses from "./components/courses/SpecialityCourses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseDetails, {
  advancedOWData,
  assistantData,
  bubblemakerData,
  discoverScubaDivingData,
  divemasterData,
  efrData,
  instructorData,
  msdData,
  openWaterDiverData,
  reactivateData,
  rescueData,
  tecData,
  wreckData,
} from "./components/courses/CourseDetails";
import { AnimatePresence } from "framer-motion";
import GoProCourses from "./components/courses/GoProCourses";
import Contact from "./components/contact/Contact";
import Promotions from "./components/promotions/Promotions";
import Team from "./components/team/Team";

const App = () => {
  return (
    <Router>
      <>
        <NavbarKana />
        <main>
          <Home />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/promoties" element={<Promotions />} />
              <Route path="/team" element={<Team />} />
              <Route path="/beginner" element={<BeginnerCourses />} />
              <Route path="/advanced" element={<AdvancedCourses />} />
              <Route path="/gopro" element={<GoProCourses />} />
              <Route path="/speciality" element={<SpecialityCourses />} />
              <Route
                path="/discover"
                element={<CourseDetails {...discoverScubaDivingData} />}
              />
              <Route
                path="/openwater"
                element={<CourseDetails {...openWaterDiverData} />}
              />
              <Route
                path="/bubblemaker"
                element={<CourseDetails {...bubblemakerData} />}
              />
              <Route
                path="/reactivate"
                element={<CourseDetails {...reactivateData} />}
              />
              <Route path="/tec" element={<CourseDetails {...tecData} />} />
              <Route
                path="/aow"
                element={<CourseDetails {...advancedOWData} />}
              />
              <Route
                path="/rescuediver"
                element={<CourseDetails {...rescueData} />}
              />
              <Route path="/efr" element={<CourseDetails {...efrData} />} />
              <Route path="/msd" element={<CourseDetails {...msdData} />} />
              <Route
                path="/divemaster"
                element={<CourseDetails {...divemasterData} />}
              />
              <Route
                path="/assistant"
                element={<CourseDetails {...assistantData} />}
              />
              <Route
                path="/instructor"
                element={<CourseDetails {...instructorData} />}
              />
              <Route
                path="/wreckdiver"
                element={<CourseDetails {...wreckData} />}
              />
            </Routes>
          </AnimatePresence>
          <Footer />
        </main>
        <BackToTopButton />
      </>
    </Router>
  );
};

export default App;
