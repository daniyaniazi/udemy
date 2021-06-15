import React from "react";
import data from "../../Data/TopCategories.json";
import CategoryCard from "./CategoryCard";

const TopCategories = () => {
  return (
    <div className="top-category__container">
      <h2>Top Categories</h2>
      <div className="top-category-content">
        {data?.map((category, index) => (
          <CategoryCard category={category} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
