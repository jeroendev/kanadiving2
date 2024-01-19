import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Team = () => {
  // Create a ref for the team container
  const teamRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Check if the navigation is from a link or direct access to "/team"
    if (
      (location.state && location.state.scrollToCourses) ||
      location.pathname === "/team"
    ) {
      if (teamRef.current) {
        teamRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location.state, location.pathname]);

  return (
    <div className=" container pt-5 pb-5" ref={teamRef}>
      <div className=" text-center">
        <h1>Over ons</h1>
        <h5 className=" mt-2 mb-4">Maak kennis met ons team</h5>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-8 order-lg-1 order-2">
          <h3>Karl Schelfhout</h3>
          <h5 className=" mt-2 mb-4">Oprichter en echtgenoot van Nancy</h5>
          <p>
            Brevet : Instructor Padi ( AOWSI ) padi nummer 458116. <br />
            <br />
            Waarom duiken : Aangespoord door jeugdvrienden die zich hadden
            aangesloten bij een duikclub, was ik als 18-jarige meteen verkocht
            om ook te gaan duiken. Maar doordat ik kort nadien als zelfstandige
            begon is dit door tijdgebrek verwatert. Jaren later op een reis naar
            het buitenland, wilde ik een initiatie duik doen, maar het mocht
            terug niet zijn. Zat met een verkoudheid, en dan is het ten
            stelligste af te raden om te duiken, dus kon de duik terug niet
            doorgaan. Heb daar dan een snorkeltocht gedaan met mijn echtgenote
            en daar, ter plaatse, ging voor mij een totaal andere wereld open.
            De pracht onder het water is niet te beschrijven, iets dat je
            gewoonweg zelf moet ervaren om het te geloven!! Maar…derde keer
            goede keer… Bij thuiskomst heb ik mij direct ingeschreven in een
            plaatselijke duikschool en heb mij dit nog geen moment beklaagd. De
            rust en schoonheid die de onderwaterwereld mij brengt is met niks te
            evenaren. Ons doel is om jullie dit ook te kunnen laten beleven en
            dit op jullie beurt te kunnen doorgeven aan anderen, want het
            onderwaterleven is iets dat we moeten koesteren en respect voor
            hebben!!! Tot gauw???? <br />
            <br /> gr Karl
          </p>
        </div>
        <div className=" col-lg-4 order-lg-2 order-1 text-center mb-3">
          <img
            src="../img/karl.jpg"
            alt="Foto van Karl Schelfhout"
            className=" img-fluid w-50"
          />
        </div>
      </div>
      <div className="row justify-content-center align-items-center mt-5">
        <div className=" col-lg-4 text-center mb-3">
          <img
            src="../img/nancy.jpg"
            alt="Foto van Nancy Kerckaert"
            className=" img-fluid w-50"
          />
        </div>
        <div className="col-lg-8">
          <h3>Nancy Kerckaert</h3>
          <h5 className=" mt-2 mb-4">Oprichter en echtgenote van Karl</h5>
          <p>
            Brevet : Assistent Instructor Padi ( AI ) padi nummer 514744. <br />
            <br />
            Waarom duiken : Tijdens mijn jeugd heb ik problemen gehad met de
            longen en had zelfs al schrik om nog maar een snorkel in mijn mond
            te steken. Maar na mijn man vol enthousiasme over zijn
            duikbelevenissen te horen vertellen, besloot ik mij over mijn vrees
            heen te zetten en ook een initiatie duik te doen. Dankzij een
            ervaren instructeur( in feite meer dan 1😊 ) die mij direct
            geruststelde in het water was ik volledig verkocht. Het is
            onbeschrijfelijk wat de onderwaterwereld doet ….de absolute rust, de
            puurheid, de fauna en flora gewoonweg adembenemend. De eerste
            afdaling vergeet ik nooit, een volledige andere wereld , was zo
            overweldigend dat ik direct terug naar boven kwam om even te
            bekomen…. Maar nadien, tja gewoonweg verslaafd nu, heb er geen
            andere uitleg voor 😊 Tip: laat een ziekte u niet tegenhouden om het
            onderwaterleven te ontdekken… Tot gauw???? <br />
            <br />
            gr Nancy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
