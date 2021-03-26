import React from "react";
import "./item.css";

export const Item = (props) => {
  const { title,  price, img, desc } = props;
  return (
    <div className="item-container">
      <div className="img-container">
        <img className="photo" src={img} alt="" />
      </div>
      <div className="details">
        <div className="name_price">
          <h3>{title}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};
