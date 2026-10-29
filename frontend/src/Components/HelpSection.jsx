import React from "react";
import { Link } from "react-router-dom";

function HelpSection() {
  return (
    <>
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src="/images/img-grid-1.jpg" alt="Indian Modern Living Room" />
                </div>
                <div className="grid grid-2">
                  <img src="/images/img-grid-2.jpg" alt="Solid Wood Craftsmanship" />
                </div>
                <div className="grid grid-3">
                  <img src="/images/img-grid-3.jpg" alt="Natural Cane & Teak Wood" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                We Help You Style Modern Indian Homes
              </h2>
              <p>
                Whether you are decorating an urban apartment in Mumbai, a heritage home in Jaipur, or a contemporary villa in Bengaluru, our design team curates bespoke solid-wood layouts that honor Indian craft while embracing clean modern lines.
              </p>
              <ul className="list-unstyled custom-list my-4">
                <li>Bespoke wood tones: Natural Honey Teak, Warm Walnut, and Rich Mahogany.</li>
                <li>Artisanal hand-woven natural cane backrests for airy tropical comfort.</li>
                <li>Kiln-seasoned timber treated against moisture variations and termites.</li>
                <li>Hassle-free Pan-India white-glove installation right in your room.</li>
              </ul>
              <p>
                <Link to="/services" className="btn">
                  Explore Custom Services
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpSection;
