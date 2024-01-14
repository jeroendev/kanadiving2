import React from "react";
import { Link } from "react-router-dom";
import "./courses.css";

const Courses = () => {
  return (
    <div className="container courses__container" id="courses">
      <div className=" text-center">
        <h1>Opleidingen</h1>
        <h5 className=" mt-2 mb-4">
          Wij voorzien de cursussen in zwembad Aquatopia Aalst, De Nekker in
          Mechelen of de Put van Ekeren.
        </h5>
      </div>
      <div className=" text-center">
        <div className="row mb-4">
          <div className="col-md-4">
            <Link to="/beginner" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../img/Basisopleidingen-OWD.jpg"
                  className="card-img"
                  alt="PADI Basis opleidingen"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">Basis opleidingen</h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/advanced" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../img/rescue-diver-padi.jpg"
                  className="card-img"
                  alt="PADI Advanced opleidingen"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">Vervolg opleidingen</h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/speciality" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../img/padi-wreck-diver.jpg"
                  className="card-img"
                  alt="PADI Speciality opleidingen"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">Speciality's</h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <Link to="/tec" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../img/padi-tec-diver.jpg"
                  className="card-img"
                  alt="PADI TEC diver opleidingen"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">TEC opleidingen</h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/gopro" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../img/padi-gopro.jpg"
                  className="card-img"
                  alt="PADI TEC diver opleidingen"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">Go Pro opleidingen</h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/club" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../img/padi-duikclub.jpg"
                  className="card-img"
                  alt="PADI duikclub KanaDiving"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">Duikclub</h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
