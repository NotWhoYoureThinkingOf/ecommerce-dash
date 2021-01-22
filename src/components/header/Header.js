import { ArrowDropDown, Menu, Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderOption from "../headerOption/HeaderOption";
import Dropdown from "./Dropdown";
import Fuse from "fuse.js";
import "./Header.css";
import { selectMice } from "../../features/mice/miceSlice";
import { selectKeyboards } from "../../features/keyboards/keyboardsSlice";
import { selectHeadsets } from "../../features/headsets/headsetsSlice";
import { grab, release } from "../../features/product/productSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SearchHeader from "./SearchHeader";

const Header = () => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [combinedProducts, setCombinedProducts] = useState([]);
  const [input, setInput] = useState("");
  const mice = useSelector(selectMice);
  const keyboards = useSelector(selectKeyboards);
  const headsets = useSelector(selectHeadsets);
  const dispatch = useDispatch();

  useEffect(() => {
    const settingCombined = () => {
      setCombinedProducts([...mice, ...keyboards, ...headsets]);
    };

    settingCombined();
  }, [mice, keyboards, headsets]);

  useEffect(() => {
    const fuse = new Fuse(combinedProducts, {
      keys: ["brand", "name", "type", "group", "id", "imageUrl", "price"],
      includeScore: true,
    });

    const results = fuse.search(input);
    setSearchProducts(results);
  }, [input]);

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
                {searchProducts.slice(0, 5).map((product) => (
                  <SearchHeader
                    image={product.item.image}
                    brand={product.item.brand}
                    name={product.item.name}
                    price={product.item.price}
                    link={`/products/${product.item.group}/${product.item.id}`}
                    id={product.item.id}
                  />
                  // <Link
                  //   to={`/products/${product.item.group}/${product.item.id}`}
                  // >
                  //   <li>
                  //     <div className="result__img">
                  //       <img src={product.item.image} alt="" />
                  //     </div>
                  //     <div className="result__info">
                  //       <h3>
                  //         {product.item.brand}&nbsp;{product.item.name}
                  //       </h3>
                  //       <p>${product.item.price}</p>
                  //     </div>
                  //   </li>
                  // </Link>
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
