import React from "react";
import { selectMice } from "../../features/mice/miceSlice";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { motion } from "framer-motion";
import "./MouseSelection.css";

const MouseSelection = ({
  brand,
  description1,
  description2,
  description3,
  description4,
  description5,
  group,
  id,
  image,
  name,
  price,
  type,
  key,
  initial,
  animate,
}) => {
  return (
    <motion.div className="mouseSelection" initial={initial} animate={animate}>
      <div className="mouseSelection__bottomSelectedContainer">
        <div className="mouseSelection__bottomSelectedLeft">
          <img src={image} alt="" />
        </div>
        <div className="mouseSelection__bottomSelectedRight">
          <div className="mouseSelection__bottomSelectedRightDetails">
            <h2>
              {brand}&nbsp;{name}
            </h2>
            <ul className="mouseSelection__description">
              <li>{description1}</li>
              <li>{description2}</li>
              <li>{description3}</li>
              <li>{description4}</li>
              <li>{description5}</li>
            </ul>
          </div>
          <div className="mouseSelection__bottomRightContainer">
            <h3>${price}</h3>
            <div className="mouseSelection__options">
              <div className="mouseSelection__option">
                <p className="mouseSelection__optionTitle">Product Option</p>
                <form>
                  <select>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                  </select>
                </form>
              </div>
              <div className="mouseSelection__quantity">
                <p>Quantity</p>
                <div className="mouseSelection__count">
                  <Remove />
                  <p>0</p>
                  <Add />
                </div>
              </div>
            </div>
          </div>

          <div className="mouseSelection__addToCart">
            <Add />
            <Button>Add To Cart</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MouseSelection;
