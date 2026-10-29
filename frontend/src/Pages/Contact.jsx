import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

function Contact() {
  return (
    <>
      {/* navbar */}
      <Navbar one={{ highlight: "contact" }} />
      <Hero
        two={{
          title: "Connect with Our Design Studio",
          subtitle: "Reach out to our Jaipur & Bengaluru teams for custom solid-timber enquiries, material consultations, or order queries.",
        }}
      />
      {/* <h1>contact</h1> */}
      <ContactForm />
      {/* footer */}
      <Footer />
    </>
  );
}

export default Contact;
