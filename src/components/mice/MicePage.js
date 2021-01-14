import React, { useEffect } from "react";
import "./MicePage.css";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import { selectProduct } from "../../features/product/productSlice";

const Mice = () => {
  const { productId } = useParams();
  const product = useSelector(selectProduct);

  useEffect(() => {
    // console.log(id);
  }, []);

  return (
    <div className="micePage">
      <Header />
      <div className="micePage__container">
        <p>{product.name}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Mice;
