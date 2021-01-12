import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import { db } from "../../firebase";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CollectionProduct from "./CollectionProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AllProducts = () => {
  const [selectedProducts, setSelectedProducts] = useState("");
  const [products, setProducts] = useState([]);
  const [headsetProducts, setHeadsetProducts] = useState([]);
  const [miceProducts, setMiceProducts] = useState([]);
  const [keyboardProducts, setKeyboardProducts] = useState([]);
  const settings = {
    fade: false,
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  // calling from db so that more types of products can easily be added later in the dashboard as product line grows/changes
  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) =>
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );

    db.collection("products")
      .doc("MGSHZ1tujiFcMnsg47jF")
      .collection("product")
      .onSnapshot((snapshot) =>
        setMiceProducts(
          snapshot.docs.map((doc) => ({
            id: doc,
            image: doc.data().imageUrl,
            brand: doc.data().brand,
            name: doc.data().name,
            price: doc.data().price,
            description1: doc.data().description1,
            description2: doc.data().description2,
            description3: doc.data().description3,
            description4: doc.data().description4,
            description5: doc.data().description5,
          }))
        )
      );

    db.collection("products")
      .doc("EA5T4fH22ynofbFmOyG2")
      .collection("product")
      .onSnapshot((snapshot) =>
        setKeyboardProducts(
          snapshot.docs.map((doc) => ({
            id: doc,
            image: doc.data().imageUrl,
            brand: doc.data().brand,
            name: doc.data().name,
            price: doc.data().price,
            description1: doc.data().description1,
            description2: doc.data().description2,
            description3: doc.data().description3,
            description4: doc.data().description4,
            description5: doc.data().description5,
          }))
        )
      );

    db.collection("products")
      .doc("8o0MOnQoCNOIQFI7VZ96")
      .collection("product")
      .onSnapshot((snapshot) =>
        setHeadsetProducts(
          snapshot.docs.map((doc) => ({
            id: doc,
            image: doc.data().imageUrl,
            brand: doc.data().brand,
            name: doc.data().name,
            price: doc.data().price,
            description1: doc.data().description1,
            description2: doc.data().description2,
            description3: doc.data().description3,
            description4: doc.data().description4,
            description5: doc.data().description5,
          }))
        )
      );

    // const storageRef = storage.ref();

    // const imagesRef = storageRef.child("images");
    // const headsetsRef = imagesRef.child("headset-products.png");
    // const keyboardsRef = imagesRef.child("keyboard-products.png");
    // const miceRef = imagesRef.child("mice-products.png");

    // headsetsRef
    //   .getDownloadURL()
    //   .then((url) => {
    //     console.log(url);
    //     setHeadsetsPic(url);
    //   })
    //   .catch((error) => console.log(error));
  }, []);

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
                selectedProducts === "mice" && "mice"
              }`}
            >
              Mice
            </h3>
          </div>

          {/* {products.map((product) => (
            <div className="allProducts__selection">
              <Product key={product.id} name={product.name} />
            </div>
          ))} */}
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
                    miceProducts.map((mouse, i) => (
                      <CollectionProduct
                        key={i}
                        image={
                          "https://drive.google.com/file/d/1HxkXF2a6Xm33WXkq7nZvKIwoGEjrnY8e/view?usp=sharing"
                        }
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
                    keyboardProducts.map((keyboard, i) => (
                      <CollectionProduct
                        key={i}
                        image={
                          "https://drive.google.com/file/d/1HxkXF2a6Xm33WXkq7nZvKIwoGEjrnY8e/view?usp=sharing"
                        }
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
                    headsetProducts.map((headset, i) => (
                      <CollectionProduct
                        key={i}
                        image={
                          "https://drive.google.com/file/d/1HxkXF2a6Xm33WXkq7nZvKIwoGEjrnY8e/view?usp=sharing"
                        }
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
