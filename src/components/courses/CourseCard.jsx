import React from "react";
import { Link } from "react-router-dom";
import "./courses.css";

const CourseCard = ({ to, imageSrc, altText, title }) => {
  return (
    <div className="col-md-4">
      <Link to={to} className="card-link">
        <div className="card bg-primary text-white mb-3">
          <img src={imageSrc} className="card-img" alt={altText} />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="card-body text-center">
              <h5 className="card-title">{title}</h5>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
