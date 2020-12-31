import React from "react";
import "./Info.css";
import keyboard from "../../assets/rgbkeyboard.png";
import mouse from "../../assets/rgbmouse.png";
import cooler from "../../assets/rgbcooler.png";
import InfoItem from "./InfoItem";

const Info = () => {
  // put in when framer is implemented
  // only show item name at first, hover over item, name drops down rgb diagonal stripe shows up, product slides out
  return (
    <div className="info">
      <h2 className="info__title">New Releases</h2>
      <div className="info__keyboard">
        <InfoItem
          className="keyboard"
          imageClass="keyboardImage"
          tagline="Spectre Pro"
          image={keyboard}
          list1="16.8M Color Lighting"
          list2="3 Zone RGB Illumination"
          list3="Per-key RGB Lighting Customization"
          list4="Outemu Mechanical Switches"
          list5="Detachable USB-C Cable"
        />
      </div>
      <div className="info__mouse">
        <InfoItem
          className="mouse"
          imageClass="mouseImage"
          tagline="Torque"
          image={mouse}
          list1="Ergonomically Built"
          list2="Made For Gaming"
          list3="Firm Grip Maximum Control"
          list4="Less Cable Resistance, More Fluid Movement"
          list5="11 Adjustable Lighting Modes"
        />
      </div>
      <div className="info__cooler">
        <InfoItem
          className="cooler"
          tagline="Mirage"
          image={cooler}
          list1="Optimal Cooling Performance Paired with Beautiful Aesthetic"
          list2="Infinity Mirror LED Ring"
          list3="High Static Pressure Fans"
          list4="Outemu Mechanical Switches"
          list5="
          All-in-one Universal Controller"
        />
      </div>
    </div>
  );
};

export default Info;
