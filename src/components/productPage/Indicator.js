import React from "react";
import "./Indicator.css";

const Indicator = ({ number, name }) => {
  return (
    <div className="indicator">
      <p className="productPage__indicatorNumber">{number}</p>
      <p className="productPage__indicatorName">{name}</p>
    </div>
  );
};

export default Indicator;
