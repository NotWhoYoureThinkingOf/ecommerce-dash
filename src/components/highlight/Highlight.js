import React from "react";
import "./Highlight.css";
import { Link } from "react-router-dom";
import gamer from "../../assets/gamer-cutout2.png";
import { Button } from "@material-ui/core";

const Highlight = () => {
  return (
    <div className="highlight">
      <div className="highlight__container">
        <div className="highlight__text">
          <h2>
            Communicate <br />
            On Another Level
          </h2>
          <div className="highlight__subtext">
            Talking to your squad is essential. Why not do it in high
            definition?
          </div>
        </div>
        <Link to="/allproducts">
          <Button>SHOP HEADSETS NOW</Button>
        </Link>
      </div>

      <img src={gamer} alt="" />
    </div>
  );
};

export default Highlight;
