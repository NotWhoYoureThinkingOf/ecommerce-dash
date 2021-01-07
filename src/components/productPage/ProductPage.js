import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import { Link, useParams } from "react-router-dom";
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
import headphoneswide2 from "../../assets/headphoneswide2.jpg";
import headphoneswide5 from "../../assets/headphoneswide5.jpg";
import headphoneswide8 from "../../assets/headphoneswide8.jpg";
import thxLogo from "../../assets/thxLogo.png";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { motion } from "framer-motion";
import Indicators from "./Indicators";

const ProductPage = () => {
  const { productId } = useParams();
  // make data.js with products
  const [viewportWidth, setViewportWidth] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
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
      setScrollStuck(false);
    } else {
      setScrollStuck(false);
    }
  });

  return (
    <motion.div className="productPage">
      <div className="productPage__container">
        <motion.div
          className="productPage__fixedContainer"
          style={scrollStuck ? { display: "none" } : { display: "flex" }}
        >
          <img
            className={`productPage__fixed ${scrolledFar && "scrolledFar"} ${
              scrollStuck && "scrollStuck"
            }`}
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
                THX® Certified Headphones for high-fidelity sound. Advanced
                active noise cancellation (ANC) technology for an uninterrupted
                audio experience on the go. Engineered for comfort for long
                hours of wear. Quick Attention Mode to stay aware of your
                surroundings Auto. Pause/Auto Play to stop and start media
                seamlessly.
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
          <motion.div
            className={`productPage__absolute ${scrolledFar && "scrolledFar"} ${
              scrollStuck && "scrollStuck"
            }`}
            style={scrollStuck ? { display: "flex" } : { display: "none" }}
          >
            <img src={headset3} alt="" />
          </motion.div>
          <div className="productPage__bottomLeft">
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
          <div className="productPage__bottomCenter"></div>
          <div className="productPage__bottomRight">
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

      <div className="productPage__feature .wideFeature1">
        <img
          className="wideImage"
          src={headphoneswide8}
          alt=""
          style={{ width: "100%" }}
        />
        <div className="wideFeature__THX">
          <h3>THX® CERTIFIED HEADPHONES</h3>
          <p>
            For high-fidelity sound. Tested and optimized by experts in
            cinematic audio immersion at THX Ltd., the headset presents a rich,
            balanced soundstage for all your movies, music and gaming.
          </p>
          <a href="www.thx.com">
            Learn More <span>Here</span>
          </a>
          <div className="wideFeature__THXLogo">
            <img className="thxLogo" src={thxLogo} alt="" />
          </div>
        </div>
      </div>
      <div className="productPage__feature .wideFeature2">
        <img src={headphoneswide1} alt="" style={{ width: "100%" }} />
        <div className="wideFeature__app">
          <h3>COMPATIBLE WITH THE RAZER APP</h3>
          <p>
            Losing stuff sucks. That’s why Razer headphones and earbuds come
            with Tile™ finding technology — if you misplace them, you can just
            call them from the app.
          </p>
          <Link to="/products/app">
            Learn More <span>Here</span>
          </Link>
        </div>
      </div>
      <div className="productPage__diagram">
        <img src={headphoneswide5} alt="" />
        <div className="productPage__indicatorsSection">
          <hr />
          <div className="productPage__indicatorGroup">
            <Indicators
              number1={1}
              name1={"Adjustable padded leatherette headband"}
              number2={2}
              name2={" Rotatable circumaural ear cup design"}
              number3={3}
              name3={"Plush memory foam ear cushions"}
            />
            <Indicators
              number1={4}
              name1={"Volume down button"}
              number2={5}
              name2={"Center (multi function) button"}
              number3={6}
              name3={"Volume up button"}
            />
            <Indicators
              number1={7}
              name1={"Mic diaphragm"}
              number2={8}
              name2={"USB-C port"}
              number3={9}
              name3={"3.5mm audio port"}
            />
            <Indicators
              number1={10}
              name1={"Power button"}
              number2={11}
              name2={"Status indicator"}
              number3={12}
              name3={"ANC/Ambient button"}
            />
          </div>
        </div>
      </div>
      {/* <div className="productPage__reviews"></div> */}
    </motion.div>
  );
};

export default ProductPage;
