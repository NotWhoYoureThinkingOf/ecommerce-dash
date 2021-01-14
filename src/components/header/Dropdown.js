import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import panel7 from "../../assets/panel7.png";
import DropdownList from "./DropdownList";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div className="dropdown__left">
        <ul className="dropdown__list">
          <li>
            <Link to="/allproducts" style={{ padding: 0 }}>
              Shop All
            </Link>
          </li>
          <li>
            <Link to="/products/keyboards" style={{ padding: 0 }}>
              Keyboards
            </Link>
          </li>
          <li>
            <Link to="/products/mice" style={{ padding: 0 }}>
              Mice
            </Link>
          </li>
          <li>
            <Link to="/products/headsets" style={{ padding: 0 }}>
              Headsets
            </Link>
          </li>
        </ul>
      </div>

      <div className="dropdown__right">
        <DropdownList
          listName="Wired"
          linkName1="Keyboard 1"
          linkName2="Keyboard 2"
          linkName3="Keyboard 3"
          linkName4="Keyboard 4"
        />
        <DropdownList
          listName="Wireless"
          linkName1="Keyboard 1"
          linkName2="Keyboard 2"
          linkName3="Keyboard 3"
          linkName4="Keyboard 4"
        />
      </div>

      <div className="dropdown__picture">
        <img src={panel7} alt="" />
      </div>
    </div>
  );
};

export default Dropdown;
