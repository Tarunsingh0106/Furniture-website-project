import React from "react";

function WhyChooseUs() {
  return (
    <>
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Furni India</h2>
              <p>
                We unite time-honored Indian woodworking heritage with modern minimalist aesthetics. Every creation is ethically crafted from seasoned hardwood to bring warmth, comfort, and heirloom quality to Indian homes.
              </p>
              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="/images/truck.svg"
                        alt="Pan-India Shipping"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Pan-India Free Shipping</h3>
                    <p>
                      Insured white-glove delivery across 19,000+ pin codes, complete with room placement and packaging disposal.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="/images/bag.svg"
                        alt="Seasoned Hardwood"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>100% Seasoned Hardwood</h3>
                    <p>
                      Kiln-dried Indian Sheesham and Malabar Teak chemically seasoned against termites, borers, and monsoons.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="/images/support.svg"
                        alt="Indian Design Support"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Design Consultation</h3>
                    <p>
                      Our interior architects help you select wood finishes, fabric weaves, and dimensions tailored to your apartment layout.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="/images/return.svg"
                        alt="10-Year Warranty"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>10-Year Warranty</h3>
                    <p>
                      Complete peace of mind with 10-year structural coverage and hassle-free 7-day in-home trial support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="img-wrap">
                <img
                  src="/images/why-choose-us-img.jpg"
                  alt="Handcrafted Indian Wooden Living Space"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
