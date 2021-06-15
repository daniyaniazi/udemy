import { faCheck, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const ModalCard = ({ show }) => {
  const modalRef = useRef(null);
  const [isLeft, setIsLeft] = useState(false);
  const [showModal, setshowModal] = useState(show);
  useEffect(() => {
    const domNode = ReactDOM.findDOMNode(modalRef.current);
    const modalObj = domNode.getBoundingClientRect();

    if (modalObj.x > 850) {
      setIsLeft(true);
    }
  }, []);

  return (
    <div
      style={{ animation: `${showModal ? "fadeIn" : "fadeOut"} 1s` }}
      className={
        isLeft
          ? `modal-card-conatiner-left modal-card-conatiner`
          : ` modal-card-conatiner-right modal-card-conatiner`
      }
      ref={modalRef}
    >
      <h3>Course Title</h3>
      <span className="modal-course-date">
        Updated on <span>12/3/2012</span>
      </span>
      <p className="modal-course-detail">
        <span>23.5 Total Hours</span>.<span>All levels</span>.
        <span>Subtitles</span>
      </p>
      <div className="modal-course-description">
        <p>
          learn to create Machine Learning Algorithms in Python and R from two
          Data Science experts. Code templates included.
        </p>
        <ul className="modal-course-features">
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Use Python for Data Science and Machine Learning
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} /> Use Spark for Big Data Analysis
          </li>
        </ul>
      </div>
      <div className="modal-options">
        <button className="btn btn-main cart-btn">Add to cart</button>
        <button className="btn btn-primary-outline whislist-btn ">
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  );
};

export default ModalCard;
