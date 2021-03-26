import React from "react";
import "./category.css";

//catergories of the Menu
export const Category = (props) => {
  
  const { cat, handleCategory } = props;
  return (
    <button className="btn" onClick={() => handleCategory(cat)}>
      {cat}
    </button>
  );
};
