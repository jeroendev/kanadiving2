import React from "react";
import "./courses.css";

const Courses = () => {
  return (
    <div className="container courses__container">
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
            <a href="#beginner" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../../src/assets/Basisopleidingen-OWD.jpg"
                  className="card-img"
                  alt="PADI Basis opleidingen"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">Basis opleidingen</h5>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#advanced" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../../src/assets/rescue-diver-padi.jpg"
                  className="card-img"
                  alt="PADI Advanced opleidingen"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">Vervolg opleidingen</h5>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#speciality" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../../src/assets/padi-wreck-diver.jpg"
                  className="card-img"
                  alt="PADI Speciality opleidingen"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">Speciality's</h5>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a href="#tec" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../../src/assets/padi-tec-diver.jpg"
                  className="card-img"
                  alt="PADI TEC diver opleidingen"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">TEC opleidingen</h5>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#gopro" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../../src/assets/padi-gopro.jpg"
                  className="card-img"
                  alt="PADI TEC diver opleidingen"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">Go Pro opleidingen</h5>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#club" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../../src/assets/padi-duikclub.jpg"
                  className="card-img"
                  alt="PADI duikclub KanaDiving"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">Duikclub</h5>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
