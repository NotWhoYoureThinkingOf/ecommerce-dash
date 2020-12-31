import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import MainPage from "./components/mainPage/MainPage";
import ProductPage from "./components/productPage/ProductPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  // const location = useLocation();
  return (
    <div className="app">
      {/* change all main component divs to motion.div in order for page change to actually happen */}
      <AnimatePresence exitBeforeEnter>
        <Switch>
          {/* customer side */}
          {/* products page */}
          <Route path="/products/:productId">
            <Header />
            <ProductPage />
            <Footer />
          </Route>
          {/* main page */}
          <Route path="/" exact>
            <MainPage />
          </Route>
          {/* product page */}
          {/* admin side */}
          {/* dashboard */}
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
