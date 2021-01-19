import React from "react";
import { motion } from "framer-motion";
import "./Circle3Expand.css";
import { Add, ArrowBack, Remove } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import coolerImg from "../../assets/rgbcooler.png";

const Circle3Expand = ({ layoutId, onClick, layoutImg }) => {
  return (
    <motion.div
      className="circle3Expand"
      initial={{ clipPath: "circle(0% at 78% 46%)" }}
      animate={{ clipPath: "circle(120% at 78% 46%)" }}
      style={{
        background: "linear-gradient(to right, #230038, #111)",
      }}
      transition={{ duration: 0.5 }}
      layoutId={layoutId}
    >
      <div className="circle3Expand__content">
        <h3 className="circle3Expand__return" onClick={onClick}>
          <ArrowBack />
        </h3>
        <div className="content3__left">
          <motion.img layoutId={layoutImg} src={coolerImg} alt="" />
        </div>
        <div className="content3__right">
          <div className="content3__rightTop">
            <h3 className="content3__title">Mirage</h3>
            <ul>
              <li>
                Optimal Cooling Performance
                <br /> Paired with Beautiful Aesthetic
              </li>
              <li>Infinity Mirror LED Ring</li>
              <li>High Static Pressure Fans</li>
              <li>Outemu Mechanical Switches</li>
              <li>All-in-one Universal Controller</li>
            </ul>
          </div>

          <div className="content3__rightBuy">
            <div className="rightBuy3__container">
              <h3>$249.00</h3>
              <div className="rightBuy3__options">
                <div className="rightBuy3__option">
                  <p className="rightBuy3__optionTitle">Product Option</p>
                  <form>
                    <select>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                      <option value="4">Option 4</option>
                    </select>
                  </form>
                </div>
                <div className="rightBuy3__quantity">
                  <p>Quantity</p>
                  <div className="rightBuy3__count">
                    <Remove />
                    <p>0</p>
                    <Add />
                  </div>
                </div>
              </div>
            </div>

            <div className="rightBuy3__addToCart">
              <Add />
              <Button>ADD TO CART</Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Circle3Expand;
