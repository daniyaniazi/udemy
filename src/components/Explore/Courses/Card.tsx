import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalCard from "./Modal/ModalCard";

type CardProps = {
  course: {
    id: number;
    name: string;
    author: string;
    is_bestseller: string;
    price: string;
    rating: string;
  };
};

const Card = ({ course }: CardProps) => {
  const [showModal, setshowModal] = useState(false);
  return (
    <Link to={`/course/${course.id}`}>
      <div className="course-card-content">
        <div
          className="course-card"
          onMouseEnter={() => setshowModal(true)}
          onMouseLeave={() => setshowModal(false)}
        >
          <img src="https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg?Expires=1623346117&Signature=Xya~ZIw-29boo9V~rKch4Uqoz3T6OpVBEJIxR3H0B3Gd5vXbkVPfzrwQAHxeUQ~NpTPT7OmjBqOa2k0QtxGTQ-m2heoSSTntF77PKSBtDWKSHDoP-r5SQ2zg8w~4dP3bP5TTG2fuztcMtZ5u6Ue22tcqK~6OIIrN3Sb8QvO4ChfMLCxB3lrv5dMeXdb2bGqHE79StUE1UjMemav5cJDfUmhiIc0BL1G6EkWiWRT6lpI6u2fLNiED~wjOzrsmlX6tB4~GruOxd4cbG7-Kc06D~n09r5119gZIq~eN~q0SpbMWWXViddUWqGUCq0Hg2jnByBwVaFGD8Nnei~ToU~u-yw__&Key-Pair-Id=APKAITJV77WS5ZT7262A"></img>
          <h4 className="course-title">{course.name}</h4>
          <p className="course-author">{course.author}</p>
          <div className="course-rating">
            {course.rating}
            <span>
              <FontAwesomeIcon size="xs" icon={faStar} />
            </span>
          </div>
          <p className="course-price">{course.price}</p>
          {course.is_bestseller === "true" && (
            <div className="badge">Best Sellar</div>
          )}
        </div>
        {showModal && <ModalCard show={showModal} />}
      </div>
    </Link>
  );
};

export default Card;
