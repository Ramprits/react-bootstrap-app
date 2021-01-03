import React, { Fragment } from "react";

export default function Header() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand">
            <img
              src="assets/metis-assets/logos/metis/metis.svg"
              alt=""
              width="106"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="side-menu"
            data-target="#sideMenu05"
            aria-controls="sideMenu05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample">
            <ul className="ml-auto mr-5 navbar-nav">
              <li className="nav-item mr-4">
                <a className="nav-link" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item mr-4">
                <a className="nav-link" href="#">
                  Company
                </a>
              </li>
              <li className="nav-item mr-4">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
            </ul>
            <div>
              <a className="btn btn-outline-primary mr-2" href="#">
                Log In
              </a>
              <a className="btn btn-primary" href="#">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="d-none fixed-top top-0 bottom-0" id="sideMenu05">
        <div
          className="position-absolute top-0 right-0 bottom-0 left-0 bg-dark"
          style={{ opacity: "0.7" }}
        ></div>
        <nav
          className="navbar navbar-light position-absolute top-0 bottom-0 left-0 w-75 pt-3 pb-4 px-4 bg-white"
          style={{ overflowY: "auto" }}
        >
          <div className="d-flex flex-column w-100 h-100">
            <div className="d-flex justify-content-between mb-4">
              <a href="#">
                <img
                  className="img-fluid"
                  src="metis-assets/logos/metis/metis.svg"
                  alt=""
                  width="106"
                />
              </a>
              <button
                className="btn-close"
                type="button"
                data-toggle="side-menu"
                data-target="#sideMenu05"
                aria-controls="sideMenu05"
                aria-label="Close"
              ></button>
            </div>
            <div>
              <ul className="navbar-nav mb-4">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Company
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
              </ul>
              <div className="border-top pt-4 mb-5">
                <a className="btn btn-outline-primary w-100 mb-2" href="#">
                  Log in
                </a>
                <a className="btn btn-primary w-100" href="#">
                  Sign up
                </a>
              </div>
            </div>
            <div className="mt-auto">
              <p>
                <span>Get in Touch</span>
                <a href="#">info@example.com</a>
              </p>
              <a className="mr-2" href="#">
                <img src="metis-assets/icons/facebook-blue.svg" alt="" />
              </a>
              <a className="mr-2" href="#">
                <img src="metis-assets/icons/twitter-blue.svg" alt="" />
              </a>
              <a className="mr-2" href="#">
                <img src="metis-assets/icons/instagram-blue.svg" alt="" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}
