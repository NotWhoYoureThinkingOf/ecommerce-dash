import React from "react";
import "./Panel.css";

const Panel = ({ image, text1, text2 }) => {
  return (
    <div className="panel">
      <img src={image} alt="" />
      <div className="panel__text">
        <h3>{text1}</h3>
        <p>{text2}</p>
      </div>
    </div>
  );
};

export default Panel;
