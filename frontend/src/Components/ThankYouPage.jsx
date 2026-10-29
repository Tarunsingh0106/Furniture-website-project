import React from "react";
import { Link, useLocation } from 'react-router-dom';

function ThankYouPage() {
  const { state } = useLocation();
  return (
    <>
      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pt-5">
              <span className="display-3 thankyou-icon text-primary">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-cart-check mb-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                  />
                </svg>
              </span>
              <h2 className="display-4 text-black mb-3">
                {state?.orderId ? 'Dhanyavaad! Order Confirmed' : 'Furni India Demo'}
              </h2>
              <p className="lead mb-4 text-muted">
                {state?.orderId
                  ? `Your demo order (${state.orderId}) has been successfully recorded. In a production store, you would receive an instant WhatsApp & SMS update with delivery tracking.`
                  : 'Explore our handcrafted collection of solid Sheesham and Teak wood furniture to place a demo order.'}
              </p>
              {state?.orderId && (
                <div className="card max-w-md mx-auto p-4 mb-5 border rounded bg-white shadow-sm text-start" style={{ maxWidth: 500 }}>
                  <h5 className="text-black fw-bold mb-3">Delivery Expectations</h5>
                  <p className="mb-2 text-muted small"><i className="fa fa-truck text-primary me-2"></i> Pan-India white-glove transit: <strong>4–7 business days</strong></p>
                  <p className="mb-2 text-muted small"><i className="fa fa-wrench text-primary me-2"></i> Free room-of-choice placement and on-site assembly</p>
                  <p className="mb-0 text-muted small"><i className="fa fa-shield-alt text-primary me-2"></i> Covered by Furni India's 10-Year Woodcraft Warranty</p>
                </div>
              )}
              <p>
                <Link to="/shop" className="btn btn-black px-4 py-2">
                  Continue Exploring
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYouPage;
