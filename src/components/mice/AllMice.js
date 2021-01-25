import React, { useEffect, useState, useRef } from "react";
import "./AllMice.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {
  motion,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { Button } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import promo from "../../assets/razerpromo3.jpg";
import { selectMice } from "../../features/mice/miceSlice";
import { useSelector } from "react-redux";

const AllMice = () => {
  // Notes about parallax in README.md as well

  // ref (reference) being made is the container that the parallax motion elements are in. useTransform is saying that they are moving in relation to the ref at that speed

  // <div
  //     className="allMice"
  //     ref={ref}
  //     style={{
  //       background: "white",
  //       position: "relative",
  //     }}
  //   >
  //     <Header />
  //     <motion.img
  //       style={{
  //         position: "absolute",
  //         left: "50%",
  //         top: 250,
  //         y: rocketY,
  //         // zIndex: 2,
  //       }}
  //       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbA7ixuyDr3rytiUOio2Pdu50DUWsxrxlrQ&usqp=CAU"
  //     ></motion.img>
  //     <motion.h1
  //       style={{
  //         position: "absolute",
  //         left: "30%",
  //         top: 250,
  //         background: "black",
  //         color: "white",
  //         y: textY,
  //         // zIndex: 2,
  //       }}
  //     ></motion.h1>
  //   </div>
  const mice = useSelector(selectMice);
  const ref = useRef();
  const { scrollY } = useViewportScroll(ref);
  const rocketY = useTransform(scrollY, (y) => 1.5 * y);
  const textY = useTransform(scrollY, (y) => 1.2 * y);
  const promoY = useTransform(scrollY, (y) => 0.5 * y);

  return (
    <div
      className="allMice"
      ref={ref}
      style={{
        background: "white",
        position: "relative",
      }}
    >
      <Header />
      {/* <motion.img
        style={{
          position: "absolute",
          left: "50%",
          top: 250,
          y: rocketY,
          // zIndex: 2,
        }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbA7ixuyDr3rytiUOio2Pdu50DUWsxrxlrQ&usqp=CAU"
      ></motion.img>
      <motion.h1
        style={{
          position: "absolute",
          left: "30%",
          top: 250,
          background: "black",
          color: "white",
          y: textY,
          // zIndex: 2,
        }}
      >
        Testing some stuff
      </motion.h1> */}
      <div className="allMice__container">
        <div className="allMice__top">
          <div className="allMice__topLeft">
            <motion.img src={promo} alt="" style={{ y: promoY }} />
          </div>
          <div className="allMice__topRight">
            <div className="allMice__topRightText">
              <h2>Aim with precision, speed, and comfort</h2>
            </div>
            <div className="allMice__topRightButton">
              <Button>Shop Gaming Mice Now</Button>
            </div>
          </div>
        </div>
        <div className="allMice__bottom">
          <div className="allMice__bottomSelection">
            {mice.map((mouse) => (
              // image: image,
              // brand: brand,
              // name: name,
              // price: price,
              // description1: description1,
              // description2: description2,
              // description3: description3,
              // description4: description4,
              // description5: description5,
              // link: link,
              // id: id,
              // have the mouse pictures along the top like the tabs in this link https://codesandbox.io/s/github/lintonye/smileys-in-motion/tree/simr-tab-with-router-end/smileys-in-motion-demos?file=/src/TabWithRouter.js. select the mouse picture and have the details and purchase buttons come in from the side maybe with staggered effects to give cooler appearance.
              <motion.div className="allMice__bottomMouse">
                <img src={mouse.image} alt="" />
              </motion.div>
            ))}
          </div>
          <div className="allMice__bottomSelected">
            <div className="allMice__bottomSelectedContainer">
              <div className="allMice__bottomSelectedLeft">
                <div className="allMice__bottomSelectedLeftDetails">
                  <p className="allMice__tagline">Product Tag Line</p>
                  <h2>Mouse Brand/Name</h2>
                  <ul className="allMice__description">
                    <li>description 1</li>
                    <li>description 2</li>
                    <li>description 3</li>
                    <li>description 4</li>
                    <li>description 5</li>
                  </ul>
                </div>
              </div>
              <div className="allMice__bottomSelectedCenter"></div>
              <div className="allMice__bottomSelectedRight">
                <div className="allMice__bottomRightContainer">
                  <h3>$249.00</h3>
                  <div className="allMice__options">
                    <div className="allMice__option">
                      <p className="allMice__optionTitle">Product Option</p>
                      <form>
                        <select>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                          <option value="4">Option 4</option>
                        </select>
                      </form>
                    </div>
                    <div className="allMice__quantity">
                      <p>Quantity</p>
                      <div className="allMice__count">
                        <Remove />
                        <p>0</p>
                        <Add />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="allMice__addToCart">
                  <Add />
                  <Button>ADD TO CART</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllMice;
