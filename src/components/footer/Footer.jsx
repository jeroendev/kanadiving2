import React from "react";

const Footer = () => {
  return (
    <footer className="text-white text-center">
      <div className="container py-4">
        <hr />
        <div className="row">
          <div className="col-md-4">
            <img
              src="../img/cropped-cropped-padi-5-star.jpg"
              alt="PADI 5 star dive center logo"
              className="img-fluid"
              style={{ maxHeight: "8rem" }}
            />
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
            <p>Rek. nr: BE13 7370 3447 3439</p>
            <p>BTW-nummer: 0480.433.971</p>
          </div>
          <div className="col-md-4">
            <p>
              <i class="bx bx-phone-call"></i> Karl: +32 476 99 22 14
            </p>
            <p>
              <i class="bx bx-phone-call"></i> Nancy: +32 477 34 52 83
            </p>
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
