import React from "react";
import InstructorImg from "../../assets/images/bussiness-advert.jpg";
import BussinessCard from "./BussinessAdvertCard";

const BussinessAdvertisement = () => {
  return (
    <div className="bussiness-advertisement__conatiner">
      <div className="bussiness-advertisement-body">
        <img src={InstructorImg} alt="instructor" />
        <div className="bussiness-advertisement-content">
          <BussinessCard />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default BussinessAdvertisement;
