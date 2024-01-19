import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Promotions = () => {
  // Create a ref for the promoties container
  const promotionsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Check if the navigation is from a link or direct access to "/promoties"
    if (
      (location.state && location.state.scrollToCourses) ||
      location.pathname === "/promoties"
    ) {
      if (promotionsRef.current) {
        promotionsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location.state, location.pathname]);

  return (
    <div className="container pt-6 pb-6" ref={promotionsRef}>
      <div className=" text-center">
        <h1>Promoties</h1>
        <h5 className=" mt-4 mb-4">Tijdelijke acties</h5>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6">
          <ul>
            <li>
              Tot 31 januari 2024: 50€ korting op de basisopleidingen: Open
              Water, Advanced Open Water en Rescue Diver
            </li>
            <br />
            <li>
              Gratis initiatieduik op 5 en 12 maart 2024 (exlusief inkom
              zwembad)
            </li>
          </ul>
        </div>
        <div className=" col-lg-6 text-center">
          <img
            src="../img/nieuwjaaractie.jpg"
            alt="Nieuwjaarsactie KanaDiving afbeelding"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Promotions;
