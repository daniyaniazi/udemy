import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link to="/business"> Udemy for Business</Link>
      </li>
      <li>
        <Link to="/instructor">Teach on Udemy</Link>
      </li>
      <li>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </li>

      <Link to="/login">
        <button className="btn btn-primary">Log in</button>
      </Link>
      <Link to="/signup">
        <button className="btn btn-primary-outline">signup</button>
      </Link>
      <li>
        <Link to="/location">
          <div className="icon-bordered">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
