import React, { useState, useEffect } from "react";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Highlight from "../highlight/Highlight";
import Info from "../information/Info";
import Panels from "../panels/Panels";
import "./MainPage.css";
import { motion } from "framer-motion";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { grabMice, selectMice } from "../../features/mice/miceSlice";
import {
  grabKeyboards,
  selectKeyboards,
} from "../../features/keyboards/keyboardsSlice";
import {
  grabHeadsets,
  selectHeadsets,
} from "../../features/headsets/headsetsSlice";
import { useSelector } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch();
  const mice = useSelector(selectMice);
  const keyboards = useSelector(selectKeyboards);
  const headsets = useSelector(selectHeadsets);

  useEffect(() => {
    db.collection("products")
      .doc("MGSHZ1tujiFcMnsg47jF")
      .collection("product")
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) =>
          dispatch(
            grabMice({
              id: doc.id,
              image: doc.data().imageUrl,
              brand: doc.data().brand,
              name: doc.data().name,
              price: doc.data().price,
              description1: doc.data().description1,
              description2: doc.data().description2,
              description3: doc.data().description3,
              description4: doc.data().description4,
              description5: doc.data().description5,
              pageImage: doc.data().pageImage,
            })
          )
        )
      );

    db.collection("products")
      .doc("EA5T4fH22ynofbFmOyG2")
      .collection("product")
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) =>
          dispatch(
            grabKeyboards({
              id: doc.id,
              image: doc.data().imageUrl,
              brand: doc.data().brand,
              name: doc.data().name,
              price: doc.data().price,
              description1: doc.data().description1,
              description2: doc.data().description2,
              description3: doc.data().description3,
              description4: doc.data().description4,
              description5: doc.data().description5,
              pageImage: doc.data().pageImage,
            })
          )
        )
      );

    db.collection("products")
      .doc("8o0MOnQoCNOIQFI7VZ96")
      .collection("product")
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) =>
          dispatch(
            grabHeadsets({
              id: doc.id,
              image: doc.data().imageUrl,
              brand: doc.data().brand,
              name: doc.data().name,
              price: doc.data().price,
              description1: doc.data().description1,
              description2: doc.data().description2,
              description3: doc.data().description3,
              description4: doc.data().description4,
              description5: doc.data().description5,
              pageImage: doc.data().pageImage,
            })
          )
        )
      );
  }, []);

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
