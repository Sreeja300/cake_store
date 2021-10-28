import React from "react";
import { CartProvider } from "react-use-cart";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Banner from "./Component/Banner";
import Features from "./Component/Features";
import Products from "./Component/Products";
import { ProductData, ProductData2 } from "./Data";

const App = () => {
  return (
    <Router>
      <CartProvider>
      <Banner />
      <Products data={ProductData} />
      <Features />
      <Products data={ProductData2} />
      </CartProvider>
      {/* <Sidebar/> */}
    </Router>
  );
};

export default App;


