import React from "react";
import Logo from "../../assets/images/logo-coral.svg";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer__conatiner">
      <img src={Logo} width={96} />
      <div className="copyright-text">
        <span>&#169;</span>
        <span> {year} Udemy, Inc.</span>
      </div>
    </div>
  );
};

export default Footer;
