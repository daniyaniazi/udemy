import React from "react";

type CategoryCardProp = {
  category: {
    name: String;
    imgUrl: string;
  };
};

const CategoryCard = ({ category }: CategoryCardProp) => {
  return (
    <div className="top-category-card">
      <div className="card-body">
        <img src={category.imgUrl} alt="category" />
        <h4>{category.name}</h4>
      </div>
    </div>
  );
};

export default CategoryCard;
