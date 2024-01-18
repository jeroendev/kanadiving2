import React from "react";
import "./courses.css";
import CourseCard from "./CourseCard";
import Animation from "../Animation";

const GoProCourses = () => {
  return (
    <Animation>
      <div className="container text-center">
        <div className="mt-4">
          <h1>Go Pro</h1>
          <h5>Deel je kennis en passie voor het duiken!</h5>
        </div>

        <div className="text-center">
          <div className="row mb-4">
            <CourseCard
              to="/divemaster"
              imageSrc="../img/padi-duikclub.jpg"
              altText="PADI Divemaster"
              title="PADI Divemaster"
            />
            <CourseCard
              to="/assistant"
              imageSrc="../img/padi-assistant-instructor.jpg"
              altText="PADI Assistant Instructor"
              title="PADI Assistant Instructor"
            />
            <CourseCard
              to="/instructor"
              imageSrc="../img/padi-open-water-instructor.jpg"
              altText="PADI Open Water Scuba Instructor"
              title="PADI Open Water Scuba Instructor"
            />
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default GoProCourses;
