import React from "react";
import BrandLogo from "../../assets/images/udemy-logo.svg";
import UdemyIcon from "../../svgs/UdemyLogo";

const Brand = () => {
  return (
    <div className="brand__container">
      {/* <UdemyIcon /> */}
      <img src={BrandLogo} width={96} alt="logo" />
    </div>
  );
};

export default Brand;
