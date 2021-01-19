import React from "react";
import { motion } from "framer-motion";
import "./Circle2.css";
import { Add, ArrowBack, Remove } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import mouseImg from "../../assets/rgbmouse.png";

const Circle2 = ({ layoutId, layoutImg }) => {
  return (
    <motion.div
      className="circle2"
      initial={{ clipPath: "circle(120% at 50% 46%)" }}
      animate={{ clipPath: "circle(0% at 50% 46%)" }}
      style={{
        background: "linear-gradient(to right, #230038, #111)",
      }}
      transition={{ duration: 0.5 }}
      layoutId={layoutId}
    >
      <div className="circle2Expand__content">
        <h3 className="circle2Expand__return">
          <ArrowBack />
        </h3>
        <div className="content2__left">
          <motion.img layoutId={layoutImg} src={mouseImg} alt="" />
        </div>
        <div className="content2__right">
          <div className="content2__rightTop">
            <h3 className="content2__title">Torque</h3>
            <ul>
              <li>Ergonomically Built</li>
              <li>Made For Gaming</li>
              <li>Firm Grip Maximum Control</li>
              <li>Less Cable Resistance, More Fluid Movement</li>
              <li>11 Adjustable Lighting Modes</li>
            </ul>
          </div>

          <div className="content2__rightBuy">
            <div className="rightBuy2__container">
              <h3>$249.00</h3>
              <div className="rightBuy2__options">
                <div className="rightBuy2__option">
                  <p className="rightBuy2__optionTitle">Product Option</p>
                  <form>
                    <select>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                      <option value="4">Option 4</option>
                    </select>
                  </form>
                </div>
                <div className="rightBuy2__quantity">
                  <p>Quantity</p>
                  <div className="rightBuy2__count">
                    <Remove />
                    <p>0</p>
                    <Add />
                  </div>
                </div>
              </div>
            </div>

            <div className="rightBuy2__addToCart">
              <Add />
              <Button>ADD TO CART</Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Circle2;
