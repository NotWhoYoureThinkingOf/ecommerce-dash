import React, { useEffect, useState } from "react";
import "./InfoItem.css";
import { AnimatePresence, motion } from "framer-motion";

const InfoItem = ({
  className,
  imageClass,
  tagline,
  image,
  list1,
  list2,
  list3,
  list4,
  list5,
}) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    console.log(hovered);
  }, [hovered]);

  // consider making the pictures in photoshop to transition to
  // start with name and product showing, when hovered, have picture go to top right and shrink,

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`infoItem ${className}`}
    >
      <div className="infoItem__image">
        <img className={imageClass} src={image} alt="" />
        <div className="infoItem__shadow"></div>
      </div>

      <div className="infoItem__details">
        <div className="details__container">
          <h2>{tagline}</h2>
          <ul>
            <li>{list1}</li>
            <li>{list2}</li>
            <li>{list3}</li>
            <li>{list4}</li>
            <li>{list5}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
