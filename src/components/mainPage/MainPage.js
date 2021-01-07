import React from "react";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Highlight from "../highlight/Highlight";
import Info from "../information/Info";
import Panels from "../panels/Panels";
import "./MainPage.css";
import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <motion.div className="mainPage">
      <div className="mainPage__header">
        <Header />
        <Banner />
        <Info />
        <Highlight />
        <Panels />
        <Footer />
      </div>
    </motion.div>
  );
};

export default MainPage;
