import React from "react";
import "./courses.css";
import Animation from "../Animation";

const TecCourses = () => {
  return (
    <Animation>
      <div className="container text-center">
        <div className="mt-4">
          <h1>TEC Diving</h1>
          <h5>Onze Tec opleidingen worden op maat gemaakt</h5>
        </div>

        <div className="text-center">
          <div className="mb-5 mt-5">
            <p>
              Onze technische duikopleidingen worden steeds op maat gemaakt na
              afspraak. Wenst u een TEC opleiding te volgen? Contacteer ons en
              we bespreken wat de mogelijkheden/wensen zijn.
            </p>
            <button className="btn btn-danger w-25 mt-4">Contacteer ons</button>
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default TecCourses;
