import React from "react";
import "./First.css";
import { motion } from "framer-motion";

const First = ({ layoutId, layoutId2, layoutId3 }) => {
  return (
    <motion.div
      className="first"
      initial={{ fontSize: "3rem" }}
      animate={{ fontSize: "1rem" }}
      transition={{ duration: 2 }}
      layoutId={layoutId3}
    >
      <motion.h1 transition={{ duration: 2 }} layoutId={layoutId}>
        let's get moving
      </motion.h1>
      <motion.div
        className="box"
        initial={{ borderRadius: "0px" }}
        animate={{ borderRadius: "40px" }}
        transition={{ duration: 1 }}
        layoutId={layoutId2}
      ></motion.div>
    </motion.div>
  );
};

export default First;
