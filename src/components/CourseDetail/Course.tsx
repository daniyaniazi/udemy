import React from "react";
import { useParams } from "react-router-dom";
import Description from "./Description";
import data from "../../Data/courses.json";

interface ParamTypes {
  id: string;
}

export const Course = () => {
  const { id } = useParams<ParamTypes>();
  const currentCourse = data.filter((course) => course.id === Number(id));

  return (
    <div>
      <Description currentCourse={currentCourse} />
    </div>
  );
};
