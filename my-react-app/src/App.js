import Header from "./component/Header";
import index from "./index.css";
import Footer from "./component/Footer";
import React, { useState } from "react";
import Home from "./component/Home";
import Category from "./component/Category"
import CategoryProducts from "./component/CategoryProducts";
import Allproducts from "./component/Allproducts";
import { Switch, Route } from "react-router-dom";
import ProductDetail from "./component/ProductDetail";
import Checkout from "./component/Checkout";
import Order from "./component/Order";
import Dashboard from "./component/Dashboard";
import { Orderconfirm } from "./component/Orderconfirm";
import Orderfailer from "./component/Orderfailer";
import Wishlist from "./component/Wishlist";
import Profile from "./component/Profile";
import Changepassword from "./component/Changepassword";
import Address from "./component/Address";
import AddAddress from "./component/AddAddress";
import Registration from "./component/Registration";
import Login from "./component/Login";
import Logout from "./component/Logout";

// seller pannel
import SellerLogin from "./Seller/SellerLogin";
import SellerRegistration from "./Seller/SellerRegistration";
import SellerDashboard from "./Seller/SellerDashboard";
import SellerProduct from "./Seller/SellerProduct";
import AddProduct from "./Seller/AddProduct";
import UpdateProduct from "./Seller/UpdateProduct";
import SellerOrder from "./Seller/SellerOrder";
import SellerCustomer from "./Seller/SellerCustomer";
import Reports from "./Seller/Reports";
import SellerProfile from "./Seller/SellerProfile"
import SellerChangepassword from "./Seller/SellerChangepassword"
import Relatedproduct from "./component/Relatedproduct";
import TagProducts from "./component/TagProducts";

import { CartContext,CurrencyContext} from "./congtext/context";
import Updateaddress from "./component/Updateaddress";
import SellerLogout from "./Seller/SellerLogout";
const checkCart = localStorage.getItem("cartData")
const currencycurrency =localStorage.getItem("currency")
function App() {
  const [cartData ,setCartData] =useState(JSON.parse(checkCart))
  const [CurrencyData ,setCurrencyData] =useState(currencycurrency)

  return (
    <>
            <CurrencyContext.Provider value={{CurrencyData,setCurrencyData}}>

        <CartContext.Provider value={{cartData,setCartData}}>

      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Allproduct" component={Allproducts} />
        <Route path="/categories" component={Category} />
        <Route path="/category/:slug/:id" component={CategoryProducts} />
        <Route path="/products/:slug_slug" component={TagProducts} />
        <Route path="/product/:product_slug/:id" component={ProductDetail} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/customer/Dashboard" component={Dashboard} />
        <Route path="/customer/order" component={Order} />
        <Route path="/order/success" component={Orderconfirm} />
        <Route path="/order/failuer" component={Orderfailer} />
        <Route path="/customer/wishlist" component={Wishlist} />
        <Route path="/customer/profile" component={Profile} />
        <Route path="/customer/changepassword" component={Changepassword} />
        <Route path="/customer/Address" component={Address} />
        <Route path="/customer/AddAddress" component={AddAddress} />
        <Route path="/customer/update-address/:id" component={Updateaddress}/>
        <Route path="/user/registration" component={Registration}></Route>
        <Route path="/user/Login" component={Login}></Route>
        <Route path="/relatedcategories/product" component={Relatedproduct}></Route>
        <Route path="/customer/logout" component={Logout}></Route>



        {/* selleer */}
        <Route path="/seller/registration" component={SellerRegistration}></Route>
        <Route path="/seller/login" component={SellerLogin}></Route>
        <Route path="/seller/logout" component={SellerLogout}/>
        <Route path="/seller/dashboard" component={SellerDashboard}></Route>
        <Route path="/seller/products" component={SellerProduct}></Route>
        <Route path="/seller/Addproduct" component={AddProduct}></Route>
        <Route path="/seller/updateProduct" component={UpdateProduct}></Route>
        <Route path="/seller/orders" component={SellerOrder}></Route>
        <Route path="/seller/Customer" component={SellerCustomer}></Route>
        <Route path="/seller/Reports" component={Reports}></Route>
        <Route path="/seller/Profile" component={SellerProfile}></Route>
        <Route path="/seller/Changepassword" component={SellerChangepassword}></Route>






      </Switch>
      </CartContext.Provider >
      </CurrencyContext.Provider >

      <Footer></Footer>
    </>
  );
}

export default App;