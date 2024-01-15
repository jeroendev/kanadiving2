import React from "react";
import "./courses.css";
import CourseCard from "./CourseCard";

const TecCourses = () => {
  return (
    <div className="container text-center">
      <div className="mt-4">
        <h1>TEC Diving</h1>
        <h5>Onze Tec opleidingen worden op maat gemaakt</h5>
      </div>

      <div className="text-center">
        <div className="row mb-4">
          <CourseCard
            to="/tecdiving"
            imageSrc="../img/padi-tec-diver.jpg"
            altText="PADI TEC diving"
            title="Technisch duiken TEC"
          />
        </div>
      </div>
    </div>
  );
};

export default TecCourses;
