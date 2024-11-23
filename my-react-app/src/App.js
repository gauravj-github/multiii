import Header from "./component/Header";
import  index from "./index.css";
import Footer from "./component/Footer";
import React from "react";
import Home from "./component/Home";
import Category from "./component/Category"
import CategoryProducts from "./component/CategoryProducts";
import Allproducts from "./component/Allproducts";
import { Switch, Route } from "react-router-dom";
import ProductDetail from "./component/ProductDetail";
import Checkout from "./component/Checkout";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route  exact path="/" component={Home} />
        <Route path="/Allproduct" component={Allproducts} />
        <Route path="/categories" component={Category} />
        <Route path="/category/:category_slug/:category_id" component={CategoryProducts} />
        <Route path="/product/:product_slug/:product_id" component={ProductDetail} />
        <Route path="/checkout" component={Checkout} />

        </Switch>
      <Footer />
    </>
  );
}

export default App;
