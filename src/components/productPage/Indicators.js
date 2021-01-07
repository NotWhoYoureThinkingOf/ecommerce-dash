import React from "react";
import Indicator from "./Indicator";
import "./Indicators.css";

const Indicators = ({ number1, number2, number3, name1, name2, name3 }) => {
  return (
    <div className="indicators">
      <div className="indicator indicator1">
        <p className="productPage__indicatorNumber">{number1}.</p>
        <p className="productPage__indicatorName">{name1}</p>
      </div>
      <div className="indicator indicator2">
        <p className="productPage__indicatorNumber">{number2}.</p>
        <p className="productPage__indicatorName">{name2}</p>
      </div>
      <div className="indicator indicator3">
        <p className="productPage__indicatorNumber">{number3}.</p>
        <p className="productPage__indicatorName">{name3}</p>
      </div>
    </div>
  );
};

export default Indicators;
