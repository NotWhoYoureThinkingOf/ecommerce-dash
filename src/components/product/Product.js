import React from "react";
import "./Product.css";

const Product = ({ name }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
    </div>
  );
};

export default Product;
