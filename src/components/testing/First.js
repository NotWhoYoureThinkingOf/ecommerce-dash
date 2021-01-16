import React from "react";
import "./First.css";
import { motion } from "framer-motion";

const First = ({ layoutId, layoutId2, layoutId3, background }) => {
  return (
    <motion.div
      className="first"
      initial={{ background: "rgb(186, 186, 255)" }}
      animate={{ background: "rgb(255, 184, 184)" }}
      transition={{ duration: 2 }}
      layoutId={layoutId3}
    >
      <motion.h1
        initial={{
          fontSize: "6rem",
          background: "transparent",
          textShadow: "-4px 14px 2px rgba(150, 150, 150, 1)",
        }}
        animate={{
          fontSize: "3rem",
          background: "transparent",
          textShadow: "4px 4px 2px rgba(150, 150, 150, 1)",
        }}
        transition={{ duration: 2 }}
        layoutId={layoutId}
      >
        Component Change
      </motion.h1>
      <motion.div
        className="box"
        initial={{ borderRadius: "0px" }}
        animate={{ borderRadius: "999px" }}
        transition={{ duration: 1 }}
        layoutId={layoutId2}
      ></motion.div>
      <motion.div
        className="clipped"
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{ clipPath: "circle(150% at 50% 50%)" }}
        style={{
          background: "rgb(71, 255, 255)",
        }}
        transition={{ duration: 3 }}
        layoutId={background}
      >
        <motion.h3 transition={{ duration: 1 }}>
          This is the first component
        </motion.h3>
        {/* <img
          src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg"
          alt=""
        /> */}
      </motion.div>
    </motion.div>
  );
};

export default First;
