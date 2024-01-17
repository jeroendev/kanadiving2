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
import TecCourses from "./components/courses/TecCourses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseDetails, {
  advancedOWData,
  bubblemakerData,
  discoverScubaDivingData,
  efrData,
  msdData,
  openWaterDiverData,
  reactivateData,
  rescueData,
  tecData,
} from "./components/courses/CourseDetails";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <Router>
      <>
        <NavbarKana />
        <main>
          <section id="home">
            <Home />
          </section>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Courses />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/beginner" element={<BeginnerCourses />} />
              <Route path="/advanced" element={<AdvancedCourses />} />
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
