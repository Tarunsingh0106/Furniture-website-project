import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import WhyChooseUs from "../Components/WhyChooseUs";
import OurTeams from "../Components/OurTeams";
import Testimonial from "../Components/Testimonial";

function About() {
  return (
    <>
      {/* navbar */}
      <Navbar one={{ highlight: "about" }} />
      <Hero
        two={{
          title: "Artisanal Heritage & Modern Design",
          subtitle: "Rooted in India's rich traditions of master woodworking, Furni India creates heirloom timber furniture for contemporary living.",
        }}
      />
      {/* <h1>about</h1> */}
      <WhyChooseUs />
      <OurTeams />
      <Testimonial />
      {/* footer */}
      <Footer />
    </>
  );
}

export default About;
