import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CollectionProduct from "./CollectionProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { selectMice } from "../../features/mice/miceSlice";
import { selectKeyboards } from "../../features/keyboards/keyboardsSlice";
import { selectHeadsets } from "../../features/headsets/headsetsSlice";
import { useSelector } from "react-redux";

const AllProducts = () => {
  const mice = useSelector(selectMice);
  const keyboards = useSelector(selectKeyboards);
  const headsets = useSelector(selectHeadsets);
  const [selectedProducts, setSelectedProducts] = useState("headsets");
  const settings = {
    fade: false,
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  useEffect(() => {
    console.log("selectedProducts", selectedProducts);
  }, [selectedProducts]);

  const carouselIn = {
    initial: {
      y: "100%",
      opacity: 0,
      zIndex: 20,
    },
    animate: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "-100%",
      zIndex: 10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="allProducts">
      <Header />
      <div className="allProducts__container">
        <div className="allProducts__menu">
          <div className="allProducts__menuContainer">
            <h3
              onClick={() => setSelectedProducts("headsets")}
              className={`allProducts__menuItem ${
                selectedProducts === "headsets" && "headsets"
              }`}
            >
              Headsets
            </h3>
            <h3
              onClick={() => setSelectedProducts("keyboards")}
              className={`allProducts__menuItem ${
                selectedProducts === "keyboards" && "keyboards"
              }`}
            >
              Keyboards
            </h3>
            <h3
              onClick={() => setSelectedProducts("mice")}
              className={`allProducts__menuItem ${
                selectedProducts === "mice" && "miceMenu"
              }`}
            >
              Mice
            </h3>
          </div>
        </div>
        <div className="allProducts__productBox">
          <AnimatePresence exitBeforeEnter>
            {selectedProducts === "mice" && (
              <motion.div
                key={"mice"}
                className="allProducts__products"
                variants={selectedProducts === "mice" && carouselIn}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Slider {...settings}>
                  {selectedProducts === "mice" &&
                    mice.map((mouse, i) => (
                      <CollectionProduct
                        key={i}
                        id={mouse.id}
                        link={`/products/mice/${mouse.id}`}
                        image={mouse.image}
                        brand={mouse.brand}
                        name={mouse.name}
                        price={mouse.price}
                        description1={mouse.description1}
                        description2={mouse.description2}
                        description3={mouse.description3}
                        description4={mouse.description4}
                        description5={mouse.description5}
                      />
                    ))}
                </Slider>
              </motion.div>
            )}
            {selectedProducts === "keyboards" && (
              <motion.div
                key={"keyboards"}
                className="allProducts__products"
                variants={selectedProducts === "keyboards" && carouselIn}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Slider {...settings}>
                  {selectedProducts === "keyboards" &&
                    keyboards.map((keyboard, i) => (
                      <CollectionProduct
                        key={i}
                        id={keyboard.id}
                        link={`/products/keyboards/${keyboard.id}`}
                        image={keyboard.image}
                        brand={keyboard.brand}
                        name={keyboard.name}
                        price={keyboard.price}
                        description1={keyboard.description1}
                        description2={keyboard.description2}
                        description3={keyboard.description3}
                        description4={keyboard.description4}
                        description5={keyboard.description5}
                      />
                    ))}
                </Slider>
              </motion.div>
            )}
            {selectedProducts === "headsets" && (
              <motion.div
                key={"headsets"}
                className="allProducts__products"
                variants={selectedProducts === "headsets" && carouselIn}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Slider {...settings}>
                  {selectedProducts === "headsets" &&
                    headsets.map((headset, i) => (
                      <CollectionProduct
                        key={i}
                        id={headset.id}
                        link={`/products/headsets/${headset.id}`}
                        image={headset.image}
                        brand={headset.brand}
                        name={headset.name}
                        price={headset.price}
                        description1={headset.description1}
                        description2={headset.description2}
                        description3={headset.description3}
                        description4={headset.description4}
                        description5={headset.description5}
                      />
                    ))}
                </Slider>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;

// db.collection("products")
//       .doc("MGSHZ1tujiFcMnsg47jF")
//       .collection("product")
//       .onSnapshot((snapshot) =>
//         setMiceProducts(
//           snapshot.docs.map((doc) => ({
//             id: doc.id,
//             image: doc.data().imageUrl,
//             brand: doc.data().brand,
//             name: doc.data().name,
//             price: doc.data().price,
//             description1: doc.data().description1,
//             description2: doc.data().description2,
//             description3: doc.data().description3,
//             description4: doc.data().description4,
//             description5: doc.data().description5,
//             pageImage: doc.data().pageImage,
//           }))
//         )
//       );

//     db.collection("products")
//       .doc("EA5T4fH22ynofbFmOyG2")
//       .collection("product")
//       .onSnapshot((snapshot) =>
//         setKeyboardProducts(
//           snapshot.docs.map((doc) => ({
//             id: doc.id,
//             image: doc.data().imageUrl,
//             brand: doc.data().brand,
//             name: doc.data().name,
//             price: doc.data().price,
//             description1: doc.data().description1,
//             description2: doc.data().description2,
//             description3: doc.data().description3,
//             description4: doc.data().description4,
//             description5: doc.data().description5,
//           }))
//         )
//       );

//     db.collection("products")
//       .doc("8o0MOnQoCNOIQFI7VZ96")
//       .collection("product")
//       .onSnapshot((snapshot) =>
//         setHeadsetProducts(
//           snapshot.docs.map((doc) => ({
//             id: doc.id,
//             image: doc.data().imageUrl,
//             brand: doc.data().brand,
//             name: doc.data().name,
//             price: doc.data().price,
//             description1: doc.data().description1,
//             description2: doc.data().description2,
//             description3: doc.data().description3,
//             description4: doc.data().description4,
//             description5: doc.data().description5,
//           }))
//         )
//       );
