import React from "react";
import Instructor from "../../../assets/courses/Women.jpg";
import CardContainer from "./CardContainer";
const CourseContainer = () => {
  return (
    <>
      <div className="course__block">
        <div className="course__conatiner">
          <div className="course-description">
            <h2>Expand your career opportunities with Python</h2>
            <p>
              Whether you work in machine learning or finance, or are pursuing a
              career in web development or data science, Python is one of the
              most important skills you can learn. Python's simple syntax is
              especially suited for desktop, web, and business...
            </p>
            <button className="btn btn-primary-outline">Explore Python</button>
          </div>
          <div>
            <img src={Instructor} alt="instructor" />
          </div>
        </div>
        <div>
          <CardContainer />
        </div>
      </div>
    </>
  );
};

export default CourseContainer;
