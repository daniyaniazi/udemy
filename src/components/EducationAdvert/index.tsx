import React from "react";
import EducationAdvertCard from "./EducationAdvertCard";
import YtVideo from "./YtVideo";

const EducationAdvert = () => {
  return (
    <div className="education-advertisement__container">
      <div className="education-advertisement-body">
        <YtVideo />
        <EducationAdvertCard />
      </div>
      <hr />
    </div>
  );
};

export default EducationAdvert;
