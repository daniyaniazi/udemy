import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="search-bar__conatiner">
      <div>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        type="text"
        placeholder="search for anything"
        className="search-bar-input"
      ></input>
    </div>
  );
};

export default SearchBar;
