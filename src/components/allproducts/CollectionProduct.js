import React from "react";
import "./CollectionProduct.css";

const CollectionProduct = ({
  image,
  brand,
  name,
  price,
  description1,
  description2,
  description3,
  description4,
  description5,
}) => {
  return (
    <div className="collectionProduct">
      <div className="collectionProduct__top">
        <img src={image} alt="" />
      </div>
      <div className="collectionProduct__bottom">
        <h3>
          {brand}&nbsp;{name}
        </h3>
        <ul className="product__details">
          <li>{description1}</li>
          <li>{description2}</li>
          <li>{description3}</li>
          <li>{description4}</li>
          <li>{description5}</li>
        </ul>
        <p className="product__price">${price}</p>
      </div>
    </div>
  );
};

export default CollectionProduct;
