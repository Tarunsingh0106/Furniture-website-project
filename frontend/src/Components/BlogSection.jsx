import React from "react";
import { Link } from "react-router-dom";

function BlogSection() {
  return (
    <>
      <div className="blog-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2 className="section-title">Design Journal</h2>
              <p className="text-muted">Stories on Indian woodcraft, festive styling, and care for modern homes.</p>
            </div>
            <div className="col-md-6 text-start text-md-end">
              <Link to="/blog" className="more">
                View All Articles
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <Link to="/blog" className="post-thumbnail">
                  <img
                    src="/images/post-1.jpg"
                    alt="Sheesham vs Teak Wood for Indian Homes"
                    className="img-fluid"
                  />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link to="/blog">Sheesham vs Teak: Choosing Solid Wood for Indian Climates</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <span className="text-dark">Tarun Singh</span>
                    </span>{" "}
                    <span>
                      on <span>Oct 24, 2026</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <Link to="/blog" className="post-thumbnail">
                  <img
                    src="/images/post-2.jpg"
                    alt="Protecting Wood Furniture During Indian Monsoons"
                    className="img-fluid"
                  />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link to="/blog">How to Protect Solid Wood Furniture During Indian Monsoons</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <span className="text-dark">Vikramaditya Rathore</span>
                    </span>{" "}
                    <span>
                      on <span>Sep 18, 2026</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <Link to="/blog" className="post-thumbnail">
                  <img
                    src="/images/post-3.jpg"
                    alt="Styling Cane and Brass in Indian Living Spaces"
                    className="img-fluid"
                  />
                </Link>
                <div className="post-content-entry">
                  <h3>
                    <Link to="/blog">5 Ways to Style Cane &amp; Brass Accents in Modern Living Rooms</Link>
                  </h3>
                  <div className="meta">
                    <span>
                      by <span className="text-dark">Meera Nambiar</span>
                    </span>{" "}
                    <span>
                      on <span>Aug 29, 2026</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSection;
