import React from "react";
import { Link } from "react-router-dom";

function PopularProduct() {
  return (
    <>
      <div className="popular-product">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img
                    src="/images/product-1.png"
                    alt="Malabar Solid Teak Chair"
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3>Malabar Solid Teak Chair</h3>
                  <p>
                    Crafted from plantation-grown teakwood with ergonomic curved lumbar support and a natural hand-rubbed finish.
                  </p>
                  <p>
                    <Link to="/shop">Explore Piece</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img
                    src="/images/product-2.png"
                    alt="Jodhpur Cane & Sheesham Armchair"
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3>Jodhpur Cane &amp; Sheesham</h3>
                  <p>
                    Hand-woven natural cane backrest anchored to a seasoned Sheesham frame, ideal for breezy Indian living rooms.
                  </p>
                  <p>
                    <Link to="/shop">Explore Piece</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img
                    src="/images/product-3.png"
                    alt="Bengaluru Ergonomic Study Chair"
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3>Bengaluru Ergonomic Chair</h3>
                  <p>
                    Engineered for long remote-work sessions, featuring high-density cushioning upholstered in breathable cotton linen.
                  </p>
                  <p>
                    <Link to="/shop">Explore Piece</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularProduct;
