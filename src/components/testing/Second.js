import React from "react";
import "./Second.css";
import { motion } from "framer-motion";

const Second = ({ layoutId, layoutId2, layoutId3 }) => {
  return (
    <motion.div
      className="second"
      initial={{ fontSize: "1rem" }}
      animate={{ fontSize: "3rem" }}
      transition={{ duration: 2 }}
      layoutId={layoutId3}
    >
      <motion.h1 transition={{ duration: 2 }} layoutId={layoutId}>
        let's get moving
      </motion.h1>
      <motion.div
        className="box2"
        initial={{ borderRadius: "40px" }}
        animate={{ borderRadius: "100px" }}
        transition={{ duration: 1 }}
        layoutId={layoutId2}
      ></motion.div>
    </motion.div>
  );
};

export default Second;
