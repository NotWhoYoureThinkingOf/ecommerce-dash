import React, { useEffect, useState } from "react";
import "./MicePage.css";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {
  Add,
  Remove,
  AirlineSeatReclineExtra,
  Equalizer,
  Hearing,
  VolumeOff,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectProduct } from "../../features/product/productSlice";

const Mice = () => {
  const { productId } = useParams();
  const product = useSelector(selectProduct);
  const [scrolledFar, setScrolledFar] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y <= -730) {
      setScrolledFar(true);
    } else {
      setScrolledFar(false);
    }
  });

  useEffect(() => {
    // console.log(id);
  }, []);

  return (
    <div className="micePage">
      <Header />
      <div className="micePage__container">
        <motion.div className="micePage__fixedContainer">
          <img
            className={`micePage__fixed ${scrolledFar && "scrolledFar"}`}
            src={product?.image}
            alt=""
            // className={scrollY <= -930 && "imageIsSet"}
          />
        </motion.div>
        <div className="micePage__top">
          <div className="micePage__topLeft">
            <div className="topLeft__container">
              <p className="product__tagline">Product Tag Line</p>
              <h2>
                {product.brand}&nbsp;{product.name}
              </h2>
              <p className="product__description">
                <ul>
                  <li>{product.description1}</li>
                  <li>{product.description2}</li>
                  <li>{product.description3}</li>
                  <li>{product.description4}</li>
                  <li>{product.description5}</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="micePage__topCenter"></div>
          <div className="micePage__topRight">
            <div className="topRight__container">
              <h3>${product.price}</h3>
              <div className="product__options">
                <div className="product__option">
                  <p className="product__optionTitle">Product Option</p>
                  <form>
                    <select>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                      <option value="4">Option 4</option>
                    </select>
                  </form>
                </div>
                <div className="product__quantity">
                  <p>Quantity</p>
                  <div className="product__count">
                    <Remove />
                    <p>0</p>
                    <Add />
                  </div>
                </div>
              </div>
            </div>

            <div className="product__addToCart">
              <Add />
              <Button>ADD TO CART</Button>
            </div>
          </div>
        </div>
        <div className="micePage__center"></div>
        <div className="micePage__bottom">
          <div className="micePage__bottomLeft">
            <div className="feature feature1">
              <Equalizer />
              <h3>THX® CERTIFIED HEADPHONES</h3>
              <p>
                Tested and optimized by experts in cinematic audio immersion at
                THX Ltd., the headset presents a rich, balanced soundstage for
                all your movies, music and gaming.
              </p>
            </div>
            <div className="feature feature2">
              <VolumeOff />
              <h3>ADVANCED ACTIVE NOISE CANCELLATION (ANC) TECHNOLOGY</h3>
              <p>
                For an uninterrupted audio experience on the go. Whether you’re
                watching a movie or rocking out to your favorite track, shut out
                all distractions with advanced ANC tech which detects and
                nullifies all incoming noise.
              </p>
            </div>
          </div>
          <div className="micePage__bottomCenter"></div>
          <div className="micePage__bottomRight">
            <div className="feature feature3">
              <AirlineSeatReclineExtra />
              <h3>ENGINEERED FOR COMFORT</h3>
              <p>
                For long hours of wear. With plush leatherette memory foam ear
                cushions, a well-balanced weight and snug clamping force, you
                can keep the headphones on throughout long commutes and remain
                in supreme comfort.
              </p>
            </div>
            <div className="feature feature4">
              <Hearing />
              <h3>QUICK ATTENTION MODE</h3>
              <p>
                To stay aware of your surroundings. Press and hold the ANC
                button to instantly amplify ambient noise for a heightened sense
                of awareness.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mice;
