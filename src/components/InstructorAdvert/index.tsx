import React from "react";
import InstructorImg from "../../assets/images/promo-teacher.jpg";
import InstructorCard from "./InstructorCard";

const InstructorAdvertisement = () => {
  return (
    <div className="instructor-advertisement__conatiner">
      <div className="instructor-advertisement-body">
        <img src={InstructorImg} alt="instructor" />
        <div className="instructor-advertisement-content">
          <InstructorCard />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default InstructorAdvertisement;
