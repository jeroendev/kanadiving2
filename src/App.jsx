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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseDetails, {
  discoverScubaDivingData,
  openWaterDiverData,
} from "./components/courses/CourseDetails";

const App = () => {
  return (
    <Router>
      <>
        <NavbarKana />
        <main>
          <section id="home">
            <Home />
          </section>
          <Routes>
            <Route path="/" element={<Courses />} />
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
          </Routes>
          <Footer />
        </main>
        <BackToTopButton />
      </>
    </Router>
  );
};

export default App;
