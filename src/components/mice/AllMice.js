import React, { useEffect, useState, useRef } from "react";
import "./AllMice.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  // useElementScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { Button } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import promo from "../../assets/razerpromo3.jpg";
import { selectMice } from "../../features/mice/miceSlice";
import { useSelector } from "react-redux";
import { TabWithRouter } from "./TabWithRouter";
import MouseSelection from "./MouseSelection";

const AllMice = () => {
  // Notes about parallax in google docs form as well

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
  // const rocketY = useTransform(scrollY, (y) => 1.5 * y);
  // const textY = useTransform(scrollY, (y) => 1.2 * y);
  const promoY = useTransform(scrollY, (y) => 0.5 * y);
  const [selected, setSelected] = useState(0);
  const [mouseId, setMouseId] = useState(null);
  const [selectedMouse, setSelectedMouse] = useState(null);

  useEffect(() => {
    console.log(mouseId);
    const result = mice.filter((mouse) => mouse.id === mouseId);
    mouseId && setSelectedMouse(result);
  }, [mouseId]);

  console.log("selected mouse", selectedMouse);

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
            <AnimateSharedLayout>
              <ul>
                {mice.map((mouse, i) => (
                  <motion.li
                    className={`allMice__bottomMouse ${
                      i === selected && "selected"
                    }`}
                    onClick={() => {
                      setSelected(i);
                      setMouseId(mouse.id);
                    }}
                    key={i}
                    id={mouse.id}
                  >
                    <img src={mouse?.image} alt="" />
                    {i === selected && (
                      <motion.div
                        className="underline"
                        layoutId="underline"
                        style={{
                          background:
                            "linear-gradient(  to right,#40fd0d, #01f3f6 60%)",
                        }}
                      ></motion.div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </AnimateSharedLayout>
          </div>
          <motion.div className="allMice__bottomSelected">
            {selectedMouse === null ? (
              <h1>Choose a mouse</h1>
            ) : (
              <div className="allMice__bottomShowcase">
                {mice.map((mouse, i) => (
                  <AnimatePresence exitBeforeEnter>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={
                        mouseId === mouse.id
                          ? { x: 0, opacity: 1 }
                          : { x: "-100vw", opacity: 0 }
                      }
                      exit={
                        mouseId === mouse.id
                          ? { x: "-100vw", opacity: 0 }
                          : { x: 0, opacity: 1 }
                      }
                      transition={{
                        duration: 1,
                        opacity: {
                          duration: 0.4,
                        },
                      }}
                      style={
                        mouseId === mouse.id
                          ? { transform: "translateX(0%)" }
                          : { transform: "translateX(-100vw)" }
                      }
                      className="allMice__showcaseMouse"
                    >
                      <MouseSelection
                        key={i}
                        brand={mouse.brand}
                        description1={mouse.description1}
                        description2={mouse.description2}
                        description3={mouse.description3}
                        description4={mouse.description4}
                        description5={mouse.description5}
                        group={mouse.group}
                        id={mouse.id}
                        image={mouse.image}
                        name={mouse.name}
                        price={mouse.price}
                        type={mouse.type}
                      />
                    </motion.div>
                  </AnimatePresence>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllMice;
