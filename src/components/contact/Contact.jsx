import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  // Create a ref for the contact container
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Check if the navigation is from a link or direct access to "/contact"
    if (
      (location.state && location.state.scrollToContact) ||
      location.pathname === "/contact"
    ) {
      if (contactRef.current) {
        contactRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location.state, location.pathname]);

  return (
    <div className="container p-lg-5 pb-lg-5" ref={contactRef}>
      <div className=" text-center mb-4">
        <h1>Contacteer ons</h1>
      </div>
      <div className="row justify-content-center">
        <div className=" col-md-6">
          <form className="contact__form">
            <div className="contact__form-div mb-3">
              <label className="contact__form-tag small">Naam</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Naam"
                required
              />
            </div>

            <div className="contact__form-div mb-3">
              <label className="contact__form-tag small">E-mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="E-mail adres"
                required
              />
            </div>

            <div className="contact__form-div mb-3">
              <label className="contact__form-tag small">Telefoonnummer</label>
              <input
                type="text"
                name="phone"
                className="contact__form-input"
                placeholder="Onderwerp"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area mb-3">
              <label className="contact__form-tag small" required>
                Bericht
              </label>
              <textarea
                type="text"
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Je vraag"
                required
              ></textarea>
            </div>

            <button type="" className="btn btn-danger">
              Verzenden <i className="bx bx-send"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
