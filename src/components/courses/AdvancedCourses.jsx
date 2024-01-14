import React from "react";
import "./courses.css";
import CourseCard from "./CourseCard";

const AdvancedCourses = () => {
  return (
    <div className="container text-center">
      <div className="mt-4">
        <h1>Vervolg opleidingen</h1>
        <h5>Ga verder op ontdekking!</h5>
      </div>

      <div className="text-center">
        <div className="row mb-4">
          <CourseCard
            to="/aow"
            imageSrc="../img/padi-wreck-diver.jpg"
            altText="PADI Advanced Open Water Diver"
            title="Advanced Open Water Diver"
          />
          <CourseCard
            to="/rescuediver"
            imageSrc="../img/rescue-diver-padi.jpg"
            altText="PADI Rescue Diver"
            title="Rescue Diver"
          />
          <CourseCard
            to="/efr"
            imageSrc="../img/padi-efr.jpg"
            altText="PADI Emergency First Response opleiding"
            title="Emergency First Response"
          />
          <CourseCard
            to="/msd"
            imageSrc="../img/padi-master.jpg"
            altText="PADI Master Scuba Diver"
            title="Master Scuba Diver"
          />
        </div>
      </div>
    </div>
  );
};

export default AdvancedCourses;
