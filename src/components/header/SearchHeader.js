import { grab, release } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import React from "react";

const SearchHeader = ({
  image,
  brand,
  name,
  price,
  link,
  id,
  group,
  type,
  description1,
  description2,
  description3,
  description4,
  description5,
}) => {
  const dispatch = useDispatch();

  const grabSearchProduct = () => {
    dispatch(release());
    dispatch(
      grab({
        image: image,
        brand: brand,
        name: name,
        price: price,
        link: link,
        id: id,
        group: group,
        type: type,
        description1: description1,
        description2: description2,
        description3: description3,
        description4: description4,
        description5: description5,
      })
    );
  };

  return (
    <Link to={link} onClick={grabSearchProduct}>
      <li>
        <div className="result__img">
          <img src={image} alt="" />
        </div>
        <div className="result__info">
          <h3>
            {brand}&nbsp;{name}
          </h3>
          <p>${price}</p>
        </div>
      </li>
    </Link>
  );
};

export default SearchHeader;
