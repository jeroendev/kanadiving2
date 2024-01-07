import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarKana from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./index.css";
import BackToTopButton from "./components/backtotop/BackToTopButton";

const App = () => {
  return (
    <>
      <NavbarKana />
      <main>
        <section id="home">
          <Home />
        </section>
      </main>
      <BackToTopButton />
    </>
  );
};

export default App;
