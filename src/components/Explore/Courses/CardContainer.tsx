import React from "react";

import data from "../../../Data/courses.json";
import Card from "./Card";

import Slider from "react-slick";
import { Props } from "@fortawesome/react-fontawesome";

const CardContainer = () => {
  const cardSlides = data?.map((course, index) => {
    return (
      <div key={index}>
        <Card course={course} />
      </div>
    );
  });

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  interface SampleArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    className?: String;
    style?: React.CSSProperties;
  }
  function SampleNextArrow(props: SampleArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} next-slider__container`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: SampleArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} prev-slider__container`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div>
      <Slider {...settings}>{cardSlides}</Slider>
    </div>
  );
};

export default CardContainer;
