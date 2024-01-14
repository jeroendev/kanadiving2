import React from "react";
import { Link } from "react-router-dom";
import "./courses.css";

const BeginnerCourses = () => {
  return (
    <div className="container text-center">
      <div className=" mt-4">
        <h1>Basis opleidingen</h1>
        <h5>Start je avontuur!</h5>
      </div>

      <div className=" text-center">
        <div className="row mb-4">
          <div className="col-md-4">
            <Link to="/openwater" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../img/Basisopleidingen-OWD.jpg"
                  className="card-img"
                  alt="PADI Open Water Diver"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">Open Water Diver</h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/discover" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../img/padi-discover.jpg"
                  className="card-img"
                  alt="PADI Discover Scuba Diving"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">Discover Scuba Diving</h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/bubblemaker" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../img/padi-bubble.jpg"
                  className="card-img"
                  alt="PADI Bubblemaker opleiding"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">Bubblemaker</h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <Link to="/reactivate" className="card-link">
              <div className="card bg-primary text-white mb-3">
                <img
                  src="../img/padi-reactivate.jpg"
                  className="card-img"
                  alt="PADI Reactivate"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="card-body text-center">
                    <h5 className="card-title">Reactivate</h5>
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

export default BeginnerCourses;
