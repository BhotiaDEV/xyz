import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./cart/Cart";
import DetailsPage from "./detailspage/DetailsPage";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./home/Home";
import ListingPage from "./listingpage/ListingPage"
import Wishlist from "./wishlist/Wishlist";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/listing/:category_id" component={ListingPage}/>
      {/* <Route path="/listing/:category_id" component={ListingPage}/> */}
      <Route path="/details/:product_id" component={DetailsPage} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/Cart" component={Cart} />
      {/* <Wishlist/> */}
      <Footer />
    </BrowserRouter>
  );
};
export default Routing;
