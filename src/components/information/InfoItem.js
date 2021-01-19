import React, { useState } from "react";
import "./InfoItem.css";
import { motion } from "framer-motion";

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
  layoutId,
  layoutIdImg,
  layoutIdTitle,
  overflowImage,
}) => {
  // consider making the pictures in photoshop to transition to
  // start with name and product showing, when hovered, have picture go to top right and shrink,

  return (
    <div layoutId={layoutId} className={`infoItem ${className}`}>
      <motion.div className="infoItem__image" layoutId={layoutIdImg}>
        <img className={imageClass} src={image} alt="" />
        {/* <div className="infoItem__shadow"></div> */}
      </motion.div>

      <div className="infoItem__details">
        <div className="details__container">
          <motion.h2 layoutId={layoutIdTitle}>{tagline}</motion.h2>
          <ul>
            <li>{list1}</li>
            <li>{list2}</li>
            <li>{list3}</li>
            <li>{list4}</li>
            <li>{list5}</li>
          </ul>
        </div>
      </div>
      <motion.div className="infoItem__bg">
        <img src={overflowImage} alt="" />
        {/* <h2>Shop Now</h2> */}
      </motion.div>
    </div>
  );
};

export default InfoItem;
