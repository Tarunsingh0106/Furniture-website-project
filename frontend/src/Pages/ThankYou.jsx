import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ThankYouPage from "../Components/ThankYouPage";
function ThankYou() {
  return (
    <>
      <Navbar one={{ highlight: "cart" }} />
      <Hero
        two={{
          title: "Order Confirmation",
          subtitle: "Thank you for choosing Furni India. Your demo order details and pan-India white-glove delivery.",
        }}
      />
      <ThankYouPage />
      {/* footer */}
      <Footer />
    </>
  );
}

export default ThankYou;
