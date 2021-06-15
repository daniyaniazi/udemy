import React from "react";
import BookingLogo from "../../assets/Companies/booking-logo.svg";
import VolksWagenLogo from "../../assets/Companies/volkswagen-logo.svg";
import MercedesLogo from "../../assets/Companies/mercedes-logo-v2.svg";
import AdidasLogo from "../../assets/Companies/adidas-logo.svg";
import EventBriteLogo from "../../assets/Companies/eventbrite-logo.svg";

const TrustedCompanies = () => {
  return (
    <div className="comapnies__container">
      <h2>Trusted by companies of all sizes</h2>
      <div className="companies-logo__conatiner">
        <img src={BookingLogo} width={100} height={100} alt="logo" />
        <img src={VolksWagenLogo} width={40} height={100} alt="logo" />
        <img src={MercedesLogo} width={100} height={100} alt="logo" />
        <img src={AdidasLogo} width={50} height={100} alt="logo" />
        <img src={EventBriteLogo} width={100} height={100} alt="logo" />
      </div>
      <hr />
    </div>
  );
};

export default TrustedCompanies;
