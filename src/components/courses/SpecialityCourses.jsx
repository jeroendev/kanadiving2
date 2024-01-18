import React from "react";
import "./courses.css";
import CourseCard from "./CourseCard";
import Animation from "../Animation";

const GoProCourses = () => {
  return (
    <Animation>
      <div className="container text-center">
        <div className="mt-4">
          <h1>Speciality's</h1>
          <h5>Breid je kennis verder uit en ga op ontdekking!</h5>
        </div>

        <div className="text-center">
          <div className="row mb-4">
            <CourseCard
              to="/wreckdiver"
              imageSrc="../img/padi-wreck-diver.jpg"
              altText="PADI Wreck Diver"
              title="PADI Wreck Diver"
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
