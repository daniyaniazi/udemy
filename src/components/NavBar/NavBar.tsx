import React from "react";
import Brand from "./Brand";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="Navbar__container">
      <Brand />
      <SearchBar></SearchBar>
      <Menu />
    </div>
  );
};

export default NavBar;
