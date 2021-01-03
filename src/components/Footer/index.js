import React from "react";

export default function Footer() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-lg-3 mb-5 mb-lg-0 text-center text-lg-left">
            <a className="navbar-brand" href="#">
              <img
                className="img-fluid"
                src="assets/metis-assets/logos/metis/metis.svg"
                alt=""
                width="106"
              />
            </a>
          </div>
          <div className="col-12 col-lg-9 d-flex justify-content-center justify-content-lg-end">
            <ul className="d-flex list-unstyled flex-wrap">
              <li>
                <a
                  className="mr-5 text-decoration-none text-dark fs-5 fw-bold"
                  href="#"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  className="mr-5 text-decoration-none text-dark fs-5 fw-bold"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="mr-5 text-decoration-none text-dark fs-5 fw-bold"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-dark fs-5 fw-bold"
                  href="#"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 text-center text-lg-left order-1 order-lg-0">
            <p className="small text-muted mb-0">
              &copy; 2020. All rights reserved.
            </p>
          </div>
          <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center text-lg-right">
            <a className="mr-3" href="#">
              <img src="assets/metis-assets/icons/facebook-blue.svg" alt="" />
            </a>
            <a className="mr-3" href="#">
              <img src="assets/metis-assets/icons/twitter-blue.svg" alt="" />
            </a>
            <a href="#">
              <img src="assets/metis-assets/icons/instagram-blue.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
