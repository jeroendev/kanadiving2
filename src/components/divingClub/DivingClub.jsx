import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Club = () => {
  // Create a ref for the contact container
  const clubRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Check if the navigation is from a link or direct access to "/contact"
    if (
      (location.state && location.state.scrollToContact) ||
      location.pathname === "/club"
    ) {
      if (clubRef.current) {
        clubRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location.state, location.pathname]);

  return (
    <div className="container pt-4 pb-4" ref={clubRef}>
      <div className=" text-center">
        <h1>Onze Club</h1>
        <h5 className=" mt-2 mb-4">Onderhoud je duikvaardigheden</h5>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className=" col-lg-6 text-center">
          <h3>Word lid van onze duikclub</h3>
          <p>
            Hier vind je binnenkort meer informatie over onze duikclub. <br />
            Wij organiseren iedere dinsdag zwembadtraining in Aquatopia te Aalst
            en gaan op regelmatige basis duiken op verschillende locaties.{" "}
            <br />
            Ons vaste huisrif is gelegen in de Nekker te Mechelen.
          </p>
          <a href="/contact">
            <button className=" btn btn-danger mt-2">Contacteer ons</button>
          </a>
        </div>
        <div className=" col-lg-6">
          <img
            src="../img/padi-duikclub.jpg"
            alt="Afbeelding van de duikclub"
            className=" img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Club;
