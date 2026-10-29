import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ProductList from "../Components/ProductList";

function Shop() {
  return (
    <>
      {/* navbar */}
      <Navbar one={{highlight:"shop"}}/>
      <Hero
        two={{
          title: "Handcrafted Furniture Collection",
          subtitle: "Explore artisan-made solid timber chairs, dining pieces, and study furniture with pan-India delivery and 10-year warranty.",
        }}
      />
      {/* <h1>shop</h1> */}
      <ProductList/>
      {/* footer */}
      <Footer/>
    </>
  );
}

export default Shop;
