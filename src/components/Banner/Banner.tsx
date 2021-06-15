import React from "react";
import BannerDispaly from "../../assets/images/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div className="banner__container">
      <img src={BannerDispaly} />
      <div className="banner-content__container">
        <div className="banner-content-card">
          <h1>Dream up</h1>
          <p className="banner-text">
            Ambition accepted. Learn the latest skills to reach your
            professional goals.
          </p>
          <div className="course-search-bar__conatiner">
            <input
              type="text"
              placeholder="What do you want to learn"
              className="search-bar-input"
            ></input>
            <div>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
