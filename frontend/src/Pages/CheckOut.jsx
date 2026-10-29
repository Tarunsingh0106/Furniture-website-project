import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import CheckoutSection from "../Components/CheckoutSection";
function CheckOut() {
  return (
    <>
      {/* navbar */}
      <Navbar one={{ highlight: "cart" }} />
      <Hero
        two={{
          title: "Secure Checkout",
          subtitle: "Provide your delivery address in India for free white-glove delivery and room assembly.",
        }}
      />
      {/* <h1>check out</h1> */}
      <CheckoutSection />
      {/* footer */}
      <Footer />
    </>
  );
}

export default CheckOut;
