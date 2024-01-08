import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarKana from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./index.css";
import BackToTopButton from "./components/backtotop/BackToTopButton";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <NavbarKana />
      <main>
        <section id="home">
          <Home />
          <Courses />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default App;
