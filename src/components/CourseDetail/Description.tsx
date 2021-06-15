import { faHeart, faShare, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type DescriptionProp = {
  currentCourse: {
    name: String;
    author: String;
    is_bestseller: String;
    total_students: String;
  }[];
};

const Description = ({ currentCourse }: DescriptionProp) => {
  return (
    <div className="course-detail__container">
      <div className="content">
        <div className="description">
          <h1>{currentCourse[0].name}</h1>
          <p>
            Learn Python like a Professional Start from the basics and go all
            the way to creating your own applications and games
          </p>
          <div className="details">
            {currentCourse[0].is_bestseller == "true" && (
              <div className="badge">Best Sellar</div>
            )}
            <div className="course-rating">
              <span>
                <FontAwesomeIcon size="xs" icon={faStar} />
              </span>
              <span>(344,444 ratings)</span>
            </div>
            <span>{currentCourse[0].total_students} students</span>
          </div>
          <div>Created by {currentCourse[0].author}</div>
          <div className="btn-container">
            <div className="icon-btn">
              <button className="btn btn-dark">Whislits</button>
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="icon-btn">
              <button className="btn btn-dark">Share</button>
              <FontAwesomeIcon icon={faShare} />
            </div>
            <div className="icon-btn">
              <button className="btn btn-dark">Gift this course</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
