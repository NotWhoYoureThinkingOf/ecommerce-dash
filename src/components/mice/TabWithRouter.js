import * as React from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import MouseSelection from "./MouseSelection";
import { selectMice } from "../../features/mice/miceSlice";
import { useSelector } from "react-redux";

/* eslint-disable jsx-a11y/accessible-emoji */

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
    };
  },
};

function Tab({ title, color, active, onSelect }) {
  return (
    <motion.div onClick={onSelect} style={{ cursor: "pointer" }}>
      <motion.div
        whileHover={{ color: "#fff" }}
        initial={false}
        animate={{ color: active ? "#fff" : "#999" }}
        style={{ padding: "8px 16px 8px 16px" }}
      >
        {title}
      </motion.div>
      {active && (
        <motion.div
          layoutId="indicator"
          style={{ height: 4, width: "100%", borderRadius: 4 }}
          initial={false}
          animate={{ background: color }}
        />
      )}
    </motion.div>
  );
}

const tabs = [
  { title: "Root", color: "#7b7c76", path: "/", content: "🥔" },
  { title: "Apples", color: "#64ff22", path: "/apples", content: "🍏" },
  { title: "Grapes", color: "#8b65fe", path: "/grapes", content: "🍇" },
  { title: "Bananas", color: "#e2ff22", path: "/bananas", content: "🍌" },
];

function Tabs({ activeIndex, onSelect }) {
  const mice = useSelector(selectMice);
  const miceTabs = [
    {
      title: `${mice[0].name}`,
      color: "red",
      path: `/product/mice/${mice[0].id}`,
      content: "hi",
    },
    {
      title: `${mice[1].name}`,
      color: "orange",
      path: `/product/mice/${mice[2].id}`,
      content: "hi",
    },
    {
      title: `${mice[2].name}`,
      color: "yellow",
      path: `/product/mice/${mice[2].id}`,
      content: "hi",
    },
    {
      title: `${mice[3].name}`,
      color: "green",
      path: `/product/mice/${mice[3].id}`,
      content: "hi",
    },
    {
      title: `${mice[4].name}`,
      color: "blue",
      path: `/product/mice/${mice[4].id}`,
      content: "hi",
    },
    {
      title: `${mice[5].name}`,
      color: "purple",
      path: `/product/mice/${mice[5].id}`,
      content: "hi",
    },
    {
      title: `${mice[6].name}`,
      color: "red",
      path: `/product/mice/${mice[6].id}`,
      content: "hi",
    },
    {
      title: `${mice[7].name}`,
      color: "orange",
      path: `/product/mice/${mice[7].id}`,
      content: "hi",
    },
  ];
  const history = useHistory();
  return (
    <AnimateSharedLayout>
      <div style={{ display: "flex", fontSize: 25, color: "#eee" }}>
        {miceTabs.map((mouse, i) => (
          <Tab
            {...mouse}
            key={mouse.title}
            onSelect={() => {
              onSelect(i);
              history &&
                typeof history.push === "function" &&
                history.push(mouse.path);
            }}
            active={activeIndex === i}
          />
        ))}
        {/* {tabs.map((tab, i) => (
          <Tab
            {...tab}
            key={tab.title}
            onSelect={() => {
              onSelect(i);
              history &&
                typeof history.push === "function" &&
                history.push(tab.path);
            }}
            active={activeIndex === i}
          />
        ))} */}
      </div>
    </AnimateSharedLayout>
  );
  return miceTabs;
}

function TabContent({ children, direction }) {
  return (
    <motion.div
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      style={{ fontSize: 120 }}
      custom={direction}
      // transition={{ type: "spring", stiffness: 300, damping: 30 }}
      transition={{ duration: 0.2 }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        }}
      >
        {/* {children} */}
        <MouseSelection />
      </div>
    </motion.div>
  );
}

function TabContents({ direction }) {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter={true} custom={direction} initial={false}>
      <Switch key={location.pathname} location={location}>
        {tabs.map(({ path, content }) => (
          <Route exact path={path} key={path}>
            <TabContent direction={direction}>{content}</TabContent>
          </Route>
        ))}
      </Switch>
    </AnimatePresence>
  );
}

function TabApp() {
  const location = useLocation();
  const currentIndex = tabs.findIndex((tab) => tab.path === location.pathname);
  const [index, setIndex] = useState(currentIndex);
  const prevIndex = useRef(-1);
  useEffect(() => (prevIndex.current = index));
  const direction = Math.sign(index - prevIndex.current);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid #888",
        borderRadius: 8,
        padding: 16,
        minWidth: "50%",
        minHeight: "50%",
      }}
    >
      <Tabs activeIndex={index} onSelect={(i) => setIndex(i)} />
      <TabContents direction={direction} />
    </div>
  );
}

export function TabWithRouter() {
  return (
    <Router>
      <TabApp />
    </Router>
  );
}
