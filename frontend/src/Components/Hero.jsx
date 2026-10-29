import React from "react";
import { Link } from "react-router-dom";

function Hero({ two = {} }) {
  const title = two.title || "Handcrafted Modern Indian Living";
  const subtitle = two.subtitle || "Authentic solid Sheesham and Malabar Teak wood furniture, crafted by Indian master artisans for contemporary urban homes.";

  const isHome = !two.title || two.title.includes("Living for Indian Homes");

  return (
    <div className={`hero ${!isHome ? 'hero-subpage' : ''}`}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1 className="mb-3 hero-title">{title}</h1>
              <p className="mb-4 text-white-50 hero-subtitle">{subtitle}</p>
              <div className="hero-cta-group d-flex flex-wrap gap-2">
                <Link to="/shop" className="btn btn-secondary">
                  Shop Collection
                </Link>
                <Link to="/about" className="btn btn-white-outline">
                  Our Artisans
                </Link>
              </div>
            </div>
          </div>
          <div className={`col-lg-7 ${!isHome ? 'd-none d-lg-block' : ''}`}>
            <div className="hero-img-wrap text-center">
              <img src="/images/couch.png" alt="Handcrafted Indian Living Furniture" className="img-fluid hero-couch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
