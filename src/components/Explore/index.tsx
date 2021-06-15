import React from "react";
import CourseContainer from "./Courses";
import NavCategory from "./NavCategory";

const Explore = () => {
  return (
    <div className="explore__container">
      <h2>The world's largest selection of courses</h2>
      <p className="grey-text">
        Choose from 155,000 online video courses with new additions published
        every month
      </p>
      <NavCategory />
      <CourseContainer />
    </div>
  );
};

export default Explore;
