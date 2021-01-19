import React, { useEffect, useState } from "react";
import "./Info.css";
import keyboard from "../../assets/rgbkeyboard.png";
import mouse from "../../assets/rgbmouse.png";
import cooler from "../../assets/rgbcooler.png";
import InfoItem from "./InfoItem";
import { motion, AnimateSharedLayout } from "framer-motion";
import Circle from "./Circle";
import CircleExpand from "./CircleExpand";
import Circle2 from "./Circle2";
import Circle2Expand from "./Circle2Expand";
import Circle3 from "./Circle3";
import Circle3Expand from "./Circle3Expand";

const Info = () => {
  const [normal, setNormal] = useState(true);
  const [mouseItem, setMouseItem] = useState(false);
  const [keyboardItem, setKeyboardItem] = useState(false);
  const [coolerItem, setCoolerItem] = useState(false);

  const mouseState = () => {
    setKeyboardItem(false);
    setCoolerItem(false);
    setMouseItem(true);
    setNormal(false);
    console.log("mouse");
  };

  const keyboardState = () => {
    setKeyboardItem(true);
    setCoolerItem(false);
    setMouseItem(false);
    setNormal(false);
    console.log("keyboard");
  };

  const coolerState = () => {
    setKeyboardItem(false);
    setCoolerItem(true);
    setMouseItem(false);
    setNormal(false);
    console.log("cooler");
  };

  const normalState = () => {
    setKeyboardItem(false);
    setCoolerItem(false);
    setMouseItem(false);
    setNormal(true);
    console.log("normal");
  };
  // put in when framer is implemented
  // only show item name at first, hover over item, name drops down rgb diagonal stripe shows up, product slides out

  // start with circle at 0% behind/in front of images and expand clicked circle to fill entire section revealing item and add to cart option

  return (
    <AnimateSharedLayout>
      <motion.div className="info">
        <motion.h2 className="info__title">New Releases</motion.h2>
        <motion.div
          className="info__keyboard"
          onClick={keyboardState}
          style={{ zIndex: 0 }}
        >
          <InfoItem
            className="keyboard"
            imageClass="keyboardImage"
            tagline="Spectre Pro"
            image={keyboard}
            layoutId="keyboard"
            layoutIdImg="keyboardImg"
            layoutIdTitle="keyboardTitle"
          />
        </motion.div>
        {keyboardItem ? (
          <motion.div
            animate={{ transitionEnd: { zIndex: 100 } }}
            className="keyboard__circleExpand"
          >
            <CircleExpand
              layoutId="keyboardCircle"
              layoutImg="image"
              onClick={normalState}
            />
          </motion.div>
        ) : (
          <motion.div
            animate={{ transitionEnd: { zIndex: 1 } }}
            className="keyboard__circle"
          >
            <Circle layoutId="keyboardCircle" layoutImg="image" />
          </motion.div>
        )}

        <motion.div
          onClick={mouseState}
          className="info__mouse"
          style={{ zIndex: 0 }}
        >
          <InfoItem
            className="mouse"
            imageClass="mouseImage"
            tagline="Torque"
            image={mouse}
            layoutId="mouse"
            layoutIdImg="mouseImg"
            layoutIdTitle="mouseTitle"
          />
        </motion.div>
        {mouseItem ? (
          <motion.div
            animate={{ transitionEnd: { zIndex: 100 } }}
            className="mouse__circleExpand"
          >
            <Circle2Expand
              layoutId="mouseCircle"
              layoutImg="mouseImage"
              onClick={normalState}
            />
          </motion.div>
        ) : (
          <motion.div
            animate={{ transitionEnd: { zIndex: 1 } }}
            className="mouse__circle"
          >
            <Circle2 layoutId="mouseCircle" layoutImg="mouseImage" />
          </motion.div>
        )}
        <motion.div
          onClick={coolerState}
          className="info__cooler"
          style={{ zIndex: 0 }}
        >
          <InfoItem
            className="cooler"
            tagline="Mirage"
            image={cooler}
            layoutId="cooler"
            layoutIdImg="coolerImg"
            layoutIdTitle="coolerTitle"
            overflowImage={cooler}
          />
        </motion.div>
        {coolerItem ? (
          <motion.div
            animate={{ transitionEnd: { zIndex: 100 } }}
            className="cooler__circleExpand"
          >
            <Circle3Expand
              layoutId="coolerCircle"
              layoutImg="coolerImage"
              onClick={normalState}
            />
          </motion.div>
        ) : (
          <motion.div
            animate={{ transitionEnd: { zIndex: 1 } }}
            className="cooler__circle"
          >
            <Circle3 layoutId="coolerCircle" layoutImg="coolerImage" />
          </motion.div>
        )}
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Info;
