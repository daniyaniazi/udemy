import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LinksConatiner from "./LinksContainer";

const ImportantLinks = () => {
  return (
    <div className="important-links__container">
      <div className="important-links-body">
        <div className="important-links-contents">
          <LinksConatiner />
          <button className="btn btn-secondary-outline">
            <FontAwesomeIcon icon={faGlobe} /> English
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportantLinks;
