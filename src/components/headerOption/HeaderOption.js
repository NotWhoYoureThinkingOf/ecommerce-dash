import React from "react";
import "./HeaderOption.css";

const HeaderOption = ({ name }) => {
  return (
    <div className="headerOption">
      <p>{name}</p>
    </div>
  );
};

export default HeaderOption;
