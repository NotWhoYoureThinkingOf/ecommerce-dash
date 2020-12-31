import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import {
  Add,
  AirlineSeatReclineExtra,
  DesktopWindows,
  Equalizer,
  Hearing,
  Remove,
  VolumeOff,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
import headset3 from "../../assets/headset3.png";
import headphoneswide1 from "../../assets/headphoneswide1.jpg";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { motion } from "framer-motion";

const ProductPage = () => {
  const { productId } = useParams();
  // make data.js with products

  const [scrolledFar, setScrolledFar] = useState(false);
  const [position, setPosition] = useState(0);
  const [scrollStuck, setScrollStuck] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y <= -730) {
      setScrolledFar(true);
    } else {
      setScrolledFar(false);
    }
  });

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y <= -1040) {
      setScrollStuck(true);
    } else {
      setScrollStuck(false);
    }
  });

  useEffect(() => {
    console.log(position);
  }, [position]);

  return (
    <motion.div className="productPage">
      <motion.div
        className={`productPage__fixed ${scrolledFar && "scrolledFar"} ${
          scrollStuck && "scrollStuck"
        }`}
        style={scrollStuck ? { display: "none" } : { display: "flex" }}
      >
        <img
          src={headset3}
          alt=""
          // className={scrollY <= -930 && "imageIsSet"}
        />
      </motion.div>
      <div className="productPage__top">
        <div className="productPage__topLeft">
          <div className="topLeft__container">
            <p className="product__tagline">Product Tag Line</p>
            <h2>Razer Opus</h2>
            <p className="product__description">
              THX® Certified Headphones for high-fidelity sound. Advanced active
              noise cancellation (ANC) technology for an uninterrupted audio
              experience on the go. Engineered for comfort for long hours of
              wear. Quick Attention Mode to stay aware of your surroundings
              Auto. Pause/Auto Play to stop and start media seamlessly.
            </p>
          </div>
        </div>
        <div className="productPage__topCenter"></div>
        <div className="productPage__topRight">
          <div className="topRight__container">
            <h3>$249.00</h3>
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
      <div className="productPage__center"></div>
      <div className="productPage__bottom">
        <div className="productPage__bottomLeft">
          <div className="feature feature1">
            <Equalizer />
            <h3>THX® CERTIFIED HEADPHONES</h3>
            <p>
              Tested and optimized by experts in cinematic audio immersion at
              THX Ltd., the headset presents a rich, balanced soundstage for all
              your movies, music and gaming.
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
        <div className="productPage__bottomCenter">
          <img
            src={headset3}
            alt=""
            style={scrollStuck ? { display: "block" } : { display: "none" }}
            // className={scrollY <= -930 && "imageIsSet"}
          />
        </div>
        <div className="productPage__bottomRight">
          <div className="feature feature3">
            <AirlineSeatReclineExtra />
            <h3>ENGINEERED FOR COMFORT</h3>
            <p>
              For long hours of wear. With plush leatherette memory foam ear
              cushions, a well-balanced weight and snug clamping force, you can
              keep the headphones on throughout long commutes and remain in
              supreme comfort.
            </p>
          </div>
          <div className="feature feature4">
            <Hearing />
            <h3>QUICK ATTENTION MODE</h3>
            <p>
              To stay aware of your surroundings. Press and hold the ANC button
              to instantly amplify ambient noise for a heightened sense of
              awareness.
            </p>
          </div>
        </div>
      </div>
      <div className="productPage__feature">
        <img src={headphoneswide1} alt="" />
      </div>
    </motion.div>
  );
};

export default ProductPage;
