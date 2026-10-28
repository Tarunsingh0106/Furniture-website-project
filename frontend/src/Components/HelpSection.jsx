import React from "react";

function HelpSection() {
  return (
    <>
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src="/images/img-grid-1.jpg" alt="Untree.co" />
                </div>
                <div className="grid grid-2">
                  <img src="/images/img-grid-2.jpg" alt="Untree.co" />
                </div>
                <div className="grid grid-3">
                  <img src="/images/img-grid-3.jpg" alt="Untree.co" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                We Help You Make Modern Interior Design
              </h2>
              <p>
              I help you achieve modern interior design with tailored solutions that match your unique style. My expertise ensures that your space is both beautiful and functional, and I manage every detail to make the process smooth and hassle-free. Using high-quality materials, I deliver results that are stylish and built to last.
              </p>
              <ul className="list-unstyled custom-list my-4">
                <li>Tailored designs to match your style and needs.</li>
                <li>From concept to completion, we handle every detail.</li>
                <li>Premium materials and finishes for lasting elegance.</li>
                <li>Your satisfaction is our priority.</li>
              </ul>
              <p>
                <a href="/services" className="btn">
                  Explore
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpSection;
