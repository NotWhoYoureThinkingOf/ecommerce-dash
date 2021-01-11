import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import { db } from "../../firebase";
import Product from "../product/Product";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CollectionProduct from "./CollectionProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AllProducts = () => {
  const [selectedProducts, setSelectedProducts] = useState("mice");
  const [products, setProducts] = useState([]);
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
  return (
    <div className="allProducts">
      <Header />
      <div className="allProducts__container">
        <div className="allProducts__menu">
          <div className="allProducts__menuContainer">
            <h3
              onClick={() => setSelectedProducts("headsets")}
              className="allProducts__menuItem headsets"
            >
              Headsets
            </h3>
            <h3
              onClick={() => setSelectedProducts("keyboards")}
              className="allProducts__menuItem keyboards"
            >
              Keyboards
            </h3>
            <h3
              onClick={() => setSelectedProducts("mice")}
              className="allProducts__menuItem mice"
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
        <div className="allProducts__products">
          <Slider {...settings}>
            {selectedProducts === "mice" &&
              miceProducts.map((mouse, i) => (
                <CollectionProduct
                  key={i}
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
            {selectedProducts === "keyboards" &&
              keyboardProducts.map((keyboard, i) => (
                <CollectionProduct
                  key={i}
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
