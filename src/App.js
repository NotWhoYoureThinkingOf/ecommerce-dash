import React from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import MainPage from "./components/mainPage/MainPage";
import ProductPage from "./components/productPage/ProductPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AllProducts from "./components/allproducts/AllProducts";
import Login from "./components/Login/Login";
import MicePage from "./components/mice/MicePage";
import Testing from "./components/testing/Testing";

function App() {
  // const location = useLocation();
  return (
    <div className="app">
      {/* change all main component divs to motion.div in order for page change to actually happen */}
      <AnimatePresence exitBeforeEnter>
        <Switch>
          {/* customer side */}
          {/* product page */}
          <Route path="/products/mice/:productId">
            <MicePage />
          </Route>

          <Route path="/products/:productId">
            <Header />
            <ProductPage />
            <Footer />
          </Route>
          {/* all products page */}
          <Route path="/allproducts">
            <AllProducts />
          </Route>
          {/* login */}
          <Route path="/login">
            <Header />
            <Login />
            <Footer />
          </Route>

          <Route path="/testing">
            <Testing />
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
