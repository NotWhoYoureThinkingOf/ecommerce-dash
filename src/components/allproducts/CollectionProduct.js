import React, { useEffect } from "react";
import "./CollectionProduct.css";
import { Link } from "react-router-dom";
import { grab, release } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";

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
  link,
  id,
}) => {
  // send product data to redux here
  const dispatch = useDispatch();

  const grabProduct = () => {
    dispatch(release());
    dispatch(
      grab({
        image: image,
        brand: brand,
        name: name,
        price: price,
        description1: description1,
        description2: description2,
        description3: description3,
        description4: description4,
        description5: description5,
        link: link,
        id: id,
      })
    );
  };

  return (
    <Link to={link} onClick={grabProduct} className="collectionProduct">
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
    </Link>
  );
};

export default CollectionProduct;
