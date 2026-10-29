import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import WhyChooseUs from "../Components/WhyChooseUs";
import ProductSection from "../Components/ProductSection";
import Testimonial from "../Components/Testimonial";
function Service() {
  return (
    <>
      {/* navbar */}
      <Navbar one={{ highlight: "service" }} />
      <Hero
        two={{
          title: "Bespoke Interior & Furniture Services",
          subtitle: "From custom wood staining and apartment layout planning to pan-India white-glove installation, we provide complete interior support.",
        }}
      />
      {/* <h1>service</h1> */}
      <WhyChooseUs />
      <ProductSection />
      <Testimonial />
      {/* footer */}
      <Footer />
    </>
  );
}

export default Service;
