import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import keyboard2 from "../../assets/keyboard2.jpg";
import keyboard3 from "../../assets/keyboard3.jpg";
import mouse4 from "../../assets/mouse4.jpg";
import mouse5 from "../../assets/mouse5.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="banner">
      <div className="banner__left">
        <div className="banner__tagline">
          <h2>Gaming Keyboard</h2>
          <h2>+</h2>
          <h2>Gaming Mouse</h2>
        </div>
        <p className="banner__subtitle">The classic combo</p>
      </div>
      <div className="banner__right">
        {/* carousel with gaming mouse */}
        <Slider {...settings}>
          <Link to="/products/roccat" className="banner__carousel1">
            <img src={keyboard2} alt="" />
            <p>- Roccat Vulcan 100 Aimo</p>
          </Link>
          <Link to="/products/logitech" className="banner__carousel2">
            <img src={mouse5} alt="" />
            <p>- Logitech G Pro</p>
          </Link>
          <Link to="/products/steelseries" className="banner__carousel3">
            <img src={keyboard3} alt="" />
            <p>- SteelSeries Apex M750</p>
          </Link>
          <Link to="/products/razer" className="banner__carousel4">
            <img src={mouse4} alt="" />
            <p>- Razer Viper</p>
          </Link>
        </Slider>
      </div>
      {/* <div className="banner__fade"></div> */}
    </div>
  );
};

export default Banner;
