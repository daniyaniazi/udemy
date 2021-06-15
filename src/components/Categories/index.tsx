import React from "react";
import data from "../../Data/categories.json";
import Topics from "./Topics";
const Categories = () => {
  return (
    <div className="categories__conatiner">
      <h1>Featured topics by category</h1>
      <div className="categories-section">
        {data.map((topics, index) => {
          return <Topics topics={topics} key={index} />;
        })}
      </div>
      <button className="btn btn-primary">Explore More</button>
    </div>
  );
};

export default Categories;
