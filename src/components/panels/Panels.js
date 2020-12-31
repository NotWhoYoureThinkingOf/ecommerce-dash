import React from "react";
import Panel from "./Panel";
import "./Panels.css";
import panel1 from "../../assets/panel1.png";
import panel2 from "../../assets/panel2.PNG";
import panel3 from "../../assets/panel3.jpg";
import panel4 from "../../assets/panel4.jpg";
import panel5 from "../../assets/panel5.jpg";
import panel6 from "../../assets/panel6.jpg";
import panel7 from "../../assets/panel7.png";
import panel8 from "../../assets/panel8.png";
import panel9 from "../../assets/panel9.jpg";

const Panels = () => {
  return (
    <div className="panels">
      <Panel
        image={panel1}
        text1="HOT NEW PRODUCTS"
        text2="LEARN MORE ABOUT OUR LATEST PRODUCTS"
      />
      <Panel
        image={panel5}
        text1="COMING SOON TO A RIG NEAR YOU"
        text2="SEE WHAT WE'RE WORKING ON"
      />
      <Panel
        image={panel2}
        text1="ENHANCE YOUR SETUP"
        text2="CHECK OUT OUR ACCESSORIES"
      />
    </div>
  );
};

export default Panels;
