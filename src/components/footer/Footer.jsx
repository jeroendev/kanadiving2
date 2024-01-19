import React from "react";

const Footer = () => {
  return (
    <footer className="text-white text-center">
      <div className="container py-4">
        <hr />
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <a href="https://www.padi.com/dive-center/belgium/kana-diving/">
              <img
                src="../img/cropped-cropped-padi-5-star.jpg"
                alt="PADI 5 star dive center logo"
                className="img-fluid mt-2 mb-2"
                style={{ maxHeight: "8rem" }}
              />
            </a>
          </div>
          <div className="col-md-4">
            <p>
              <a
                className=" link-light"
                href="mailto:kanadivingschool@gmail.com"
              >
                <i class="bx bx-envelope"></i> Kanadivingschool@gmail.com
              </a>
            </p>
            <p>
              <i className="bx bx-phone-call"></i> Karl:
              <a
                href="tel:+32477345283"
                className="text-decoration-none text-white"
              >
                {" "}
                +32 476 99 22 14
              </a>
            </p>
            <p>
              <i className="bx bx-phone-call"></i> Nancy:
              <a
                href="tel:+32477345283"
                className="text-decoration-none text-white"
              >
                {" "}
                +32 477 34 52 83
              </a>
            </p>
            <p>
              <i className="bx bx-location-plus"></i>{" "}
              <a
                href="https://www.google.com/maps?q=Jagershoek+95,+Erembodegem"
                target="_blank"
                className="text-decoration-none text-white"
              >
                Jagershoek 95, 9320 Erembodegem
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <a href="https://www.daneurope.org/nl/home">
              <img
                src="../img/DAN-logo.jpg"
                alt="Diver Alert Network Europe logo"
                className=" img-fluid mt-2 mb-2"
                style={{ maxHeight: "8rem" }}
              />
            </a>
          </div>
        </div>
        <hr className="mt-4" />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Kanadiving. Alle rechten
            voorbehouden.
          </p>
          <p>Gemaakt door: J-DEV</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
