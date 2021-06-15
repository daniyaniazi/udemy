import React from "react";
import { Link } from "react-router-dom";

type LinkProp = {
  links: string[];
};

const Links = ({ links }: LinkProp) => {
  return (
    <div className="link-body">
      {links.map((link) => (
        <Link to={`${link}`} key={link}>
          {link}
        </Link>
      ))}
    </div>
  );
};

export default Links;
