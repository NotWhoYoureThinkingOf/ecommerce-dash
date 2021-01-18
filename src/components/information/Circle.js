import React from "react";
import { motion } from "framer-motion";
import "./Circle.css";
import { Add, Remove } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import keyboardImg from "../../assets/keyboard-products.png";

const Circle = ({ layoutId, layoutImg }) => {
  return (
    <motion.div
      layout
      className="circle"
      initial={{ clipPath: "circle(120% at 22% 46%)" }}
      animate={{ clipPath: "circle(0% at 22% 46%)" }}
      style={{
        background: "linear-gradient(to right, #230038, #111)",
      }}
      transition={{ duration: 0.5 }}
      layoutId={layoutId}
    >
      <div className="circleExpand__content">
        <h3 className="circleExpand__return">Back to products</h3>
        <div className="content__left">
          <motion.img layoutId={layoutImg} src={keyboardImg} alt="" />
        </div>
        <div className="content__right">
          <div className="content__rightTop">
            <h3 className="content__title">Spectre Pro</h3>
            <ul>
              <li>16.8M Color Lighting</li>
              <li>3 Zone RGB Illumination</li>
              <li>Per-key RGB Lighting Customization</li>
              <li>Outemu Mechanical Switches</li>
              <li>Detachable USB-C Cable</li>
            </ul>
          </div>

          <div className="content__rightBuy">
            <div className="rightBuy__container">
              <h3>$249.00</h3>
              <div className="rightBuy__options">
                <div className="rightBuy__option">
                  <p className="rightBuy__optionTitle">Product Option</p>
                  <form>
                    <select>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                      <option value="4">Option 4</option>
                    </select>
                  </form>
                </div>
                <div className="rightBuy__quantity">
                  <p>Quantity</p>
                  <div className="rightBuy__count">
                    <Remove />
                    <p>0</p>
                    <Add />
                  </div>
                </div>
              </div>
            </div>

            <div className="rightBuy__addToCart">
              <Add />
              <Button>ADD TO CART</Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Circle;
