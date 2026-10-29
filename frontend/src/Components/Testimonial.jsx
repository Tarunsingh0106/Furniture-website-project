import React, { useState } from "react";

const testimonials = [
  {
    quote: "“The Malabar Solid Teak chairs arrived in pristine condition at our Bengaluru home. The rich wood grain, satin touch, and solid weight reflect genuine artisanal craftsmanship. Easily the centerpiece of our living space.”",
    name: "Ananya Iyer",
    position: "Architect & Urban Planner, Bengaluru",
    image: "/images/person-1.png",
  },
  {
    quote: "“Finding solid Sheesham furniture that withstands Mumbai monsoons without creaking or swelling was tough until we found Furni India. Their seasoned timber and flawless joinery have stayed immaculate through two rainy seasons.”",
    name: "Rohan Malhotra",
    position: "Creative Director, Bandra (Mumbai)",
    image: "/images/person_2.jpg",
  },
  {
    quote: "“White-glove delivery in South Delhi was exceptionally smooth. The Jodhpur cane armchair brings together Rajasthan’s artisanal heritage and modern clean lines beautifully. Guests compliment it constantly!”",
    name: "Pooja Singhania",
    position: "Interior Stylist, Greater Kailash (New Delhi)",
    image: "/images/person_3.jpg",
  },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="section-title">Testimonials</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="testimonial-slider-wrap text-center">
              <div id="testimonial-nav">
                <span className="prev" onClick={prevSlide}>
                  <span className="fa fa-chevron-left" />
                </span>
                <span className="next" onClick={nextSlide}>
                  <span className="fa fa-chevron-right" />
                </span>
              </div>
              <div className="testimonial-slider">
                {testimonials.map((testimonial, index) => (
                  <div
                    className={`item ${index === currentIndex ? "active" : ""}`}
                    key={index}
                    style={{
                      display: index === currentIndex ? "block" : "none",
                    }}
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>{testimonial.quote}</p>
                          </blockquote>
                          <div className="author-info">
                            <div className="author-pic">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="font-weight-bold">
                              {testimonial.name}
                            </h3>
                            <span className="position d-block mb-3">
                              {testimonial.position}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
