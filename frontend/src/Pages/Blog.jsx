import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import BlogSection from "../Components/BlogSection";
import Testimonial from "../Components/Testimonial";

function Blog() {
  return (
    <>
      {/* navbar */}
      <Navbar one={{ highlight: "blog" }} />
      <Hero
        two={{
          title: "The Indian Design Journal",
          subtitle: "Expert insights on solid wood craftsmanship, seasonal timber care, and styling modern Indian interiors.",
        }}
      />
      {/* <h1>blog</h1> */}
      <BlogSection />
      <Testimonial />
      {/* footer */}
      <Footer />
    </>
  );
}

export default Blog;
