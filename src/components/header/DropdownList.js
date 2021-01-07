import React from "react";
import { Link } from "react-router-dom";
import "./DropdownList.css";

const DropdownList = ({
  listName,
  linkName1,
  linkName2,
  linkName3,
  linkName4,
}) => {
  return (
    <div className="dropdownList">
      <ul>
        <h4>{listName}</h4>
        <li>
          <Link to="/products/keyboards" style={{ padding: 0 }}>
            {linkName1}
          </Link>
        </li>
        <li>
          <Link to="/products/keyboards" style={{ padding: 0 }}>
            {linkName2}
          </Link>
        </li>
        <li>
          <Link to="/products/keyboards" style={{ padding: 0 }}>
            {linkName3}
          </Link>
        </li>
        <li>
          <Link to="/products/keyboards" style={{ padding: 0 }}>
            {linkName4}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownList;
