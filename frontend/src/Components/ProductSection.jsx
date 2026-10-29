import React from "react";
import CardProductList from "./CardProductList";

function ProductSection() {
  return (
    <>
      <div className="product-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafted with Seasoned Indian Timber
              </h2>
              <p className="mb-4">
                Handcrafted from sustainably sourced Malabar Teak and kiln-dried Rajasthani Sheesham. Every joint is engineered to endure diverse Indian climates for generations.
              </p>
              <p>
                <a href="/shop" className="btn">
                  Explore Collection
                </a>
              </p>
            </div>
            {/* End Column 1 */}
            {/* Start Column 2 */}
            <CardProductList
              one={{
                id: 2,
                productImage: "/images/product-1.png",
                productName: "Malabar Solid Teak Chair",
                productPrice: 9499,
              }}
            />
            {/* End Column 2 */}
            {/* Start Column 3 */}
            <CardProductList
              one={{
                id: 3,
                productImage: "/images/product-2.png",
                productName: "Jodhpur Cane & Sheesham Armchair",
                productPrice: 14999,
              }}
            />
            {/* End Column 3 */}
            {/* Start Column 4 */}
            <CardProductList
              one={{
                id: 4,
                productImage: "/images/product-3.png",
                productName: "Bengaluru Ergonomic Study Chair",
                productPrice: 12499,
              }}
            />
            {/* End Column 4 */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSection;
