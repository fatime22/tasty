import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="productCard col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0 ">
      <img src={item.image} alt="" />
      <div className="productText">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <span>{item.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
