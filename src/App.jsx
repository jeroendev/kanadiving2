import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarKana from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./index.css";
import BackToTopButton from "./components/backtotop/BackToTopButton";
import Courses from "./components/courses/Courses";

const App = () => {
  return (
    <>
      <NavbarKana />
      <main>
        <section id="home">
          <Home />
          <Courses />
        </section>
      </main>
      <BackToTopButton />
    </>
  );
};

export default App;
