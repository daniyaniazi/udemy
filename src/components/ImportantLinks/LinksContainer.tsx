import React from "react";
import Links from "./Links";
const linksArr = [
  [
    "udemy for bussiness",
    "Teach on udemy",
    "Get the app",
    "About us",
    "Contact us",
  ],
  ["Carrer", "Blog", "Help and support", "Affiliate"],
  ["Terms", "Privacy policy", "Sites"],
];
const LinksConatiner = () => (
  <div className="links__container">
    {linksArr.map((links, index) => (
      <Links links={links} key={index} />
    ))}
  </div>
);
export default LinksConatiner;
