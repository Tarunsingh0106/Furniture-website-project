import React from "react";
import { Link } from "react-router-dom";

function Hero({ two = {} }) {
  const title = two.title || "Handcrafted Modern Indian Living";
  const subtitle = two.subtitle || "Authentic solid Sheesham and Malabar Teak wood furniture, crafted by Indian master artisans for contemporary urban homes.";

  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1 className="mb-3">{title}</h1>
              <p className="mb-4 text-white-50">{subtitle}</p>
              <p>
                <Link to="/shop" className="btn btn-secondary me-2">
                  Shop Collection
                </Link>
                <Link to="/about" className="btn btn-white-outline">
                  Our Artisans
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img src="/images/couch.png" alt="Handcrafted Indian Living Furniture" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
