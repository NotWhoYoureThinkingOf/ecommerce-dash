import React, { useState } from "react";
import "./Testing.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import First from "./First";
import Second from "./Second";

const Testing = () => {
  const [shownComponent, setShownComponent] = useState(true);

  return (
    <AnimateSharedLayout>
      <div className="testing">
        {shownComponent && (
          <div
            onClick={() => setShownComponent(!shownComponent)}
            className="firstComp"
          >
            <First
              layoutId={"yeet"}
              layoutId2={"lit"}
              layoutId3={"fam"}
              background={"bro"}
            />
          </div>
        )}
        {!shownComponent && (
          <div
            onClick={() => setShownComponent(!shownComponent)}
            className="secondComp"
          >
            <Second
              layoutId={"yeet"}
              layoutId2={"lit"}
              layoutId3={"fam"}
              background={"bro"}
            />
          </div>
        )}
      </div>
    </AnimateSharedLayout>
  );
};

export default Testing;
