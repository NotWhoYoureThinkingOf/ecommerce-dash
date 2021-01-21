import { ArrowDropDown, Menu, Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderOption from "../headerOption/HeaderOption";
import Dropdown from "./Dropdown";
import Fuse from "fuse.js";
import products from "../../productList.json";
import "./Header.css";

const Header = () => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fuse = new Fuse(products, {
      keys: ["brand", "name", "id"],
      includeScore: true,
    });
    const results = fuse.search(input);
    setSearchProducts(results);
  }, [input]);

  console.log("searchProducts", searchProducts);

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
          <div className="header__rightOption search">
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                spellCheck="false"
              />
            </form>
            <Search />
            {/* <HeaderOption name="Search" /> */}
            <div className="search__resultsContainer">
              <ul>
                {searchProducts.map((product) => (
                  <li>{product.item.name}</li>
                ))}
              </ul>
            </div>
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
