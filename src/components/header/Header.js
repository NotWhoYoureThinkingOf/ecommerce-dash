import { ArrowDropDown, Menu, Search } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import HeaderOption from "../headerOption/HeaderOption";
import Dropdown from "./Dropdown";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <div className="header__leftMenu">
            <Menu />
          </div>
          <Link to="/">
            <h2>Store Logo</h2>
          </Link>
        </div>
        <div className="header__center">
          <div className="header__centerOption shopMenu">
            <Link to="/allproducts">
              <HeaderOption name="Shop" />
              <ArrowDropDown />
            </Link>
            <div className="header__dropdown">
              <Dropdown />
            </div>
          </div>
        </div>
        <div className="header__right">
          <div className="header__rightOption">
            <Search />
            <HeaderOption name="Search" />
          </div>
          <div className="header__rightOption">
            <HeaderOption name="Cart" />
            <p className="cart__count">2</p>
          </div>
          <Link to="/login">
            <div className="header__rightOption">
              <HeaderOption name="Login" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
