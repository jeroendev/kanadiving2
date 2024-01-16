import React from "react";
import "./courses.css";
import CourseCard from "./CourseCard";
import Animation from "../Animation";

const BeginnerCourses = () => {
  return (
    <Animation>
      <div className="container text-center">
        <div className="mt-4">
          <h1>Basis opleidingen</h1>
          <h5>Start je avontuur!</h5>
        </div>

        <div className="text-center">
          <div className="row mb-4">
            <CourseCard
              to="/openwater"
              imageSrc="../img/Basisopleidingen-OWD.jpg"
              altText="PADI Open Water Diver"
              title="Open Water Diver"
            />
            <CourseCard
              to="/discover"
              imageSrc="../img/padi-discover.jpg"
              altText="PADI Discover Scuba Diving"
              title="Discover Scuba Diving"
            />
            <CourseCard
              to="/bubblemaker"
              imageSrc="../img/padi-bubble.jpg"
              altText="PADI Bubblemaker opleiding"
              title="Bubblemaker"
            />
            <CourseCard
              to="/reactivate"
              imageSrc="../img/padi-reactivate.jpg"
              altText="PADI Reactivate"
              title="Reactivate"
            />
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default BeginnerCourses;
