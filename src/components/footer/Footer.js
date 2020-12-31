import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left footer__section">
        <form>
          <h3>HEAR IT FIRST</h3>
          <input type="text" placeholder="Enter Your Email" />
        </form>
      </div>
      <div className="footer__border footer__section"></div>
      <div className="footer__center footer__section">
        <ul>
          <li>RECYCLING CENTER</li>
          <li>HELP CENTER</li>
          <li>CONTACT US</li>
          <li>PRODUCT HELP</li>
          <li>WARRANTY</li>
        </ul>
        <ul>
          <li>DISCOUNT PROGRAMS</li>
          <li>COMPARE</li>
          <li>CUSTOM PRODUCT</li>
          <li>BULK ORDERS</li>
          <li>PRESS RELEASES</li>
        </ul>
        <ul>
          <li>ABOUT</li>
          <li>BORN IN PC</li>
          <li>ORDER STATUS</li>
          <li>PROTECT OUT WINNERS</li>
          <li>CAREERS</li>
        </ul>
      </div>
      <div className="footer__border footer__section"></div>
      <div className="footer__right footer__section">
        <h3>FOLLOW US</h3>
        <div className="footer__socials">
          <Instagram />
          <YouTube />
          <Facebook />
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
