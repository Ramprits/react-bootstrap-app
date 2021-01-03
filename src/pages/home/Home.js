import React from "react";
import MetaData from "../../components/MetaData";

export default function Home() {
  return (
    <>
      <MetaData title="Home" />
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 col-lg-6">
              <h2 className="fs-1 fw-bold">
                <span>Make your</span>
                <span className="text-primary">life easier</span>
                <span>for marketing sales and customer support</span>
              </h2>
            </div>
            <div className="col-12 col-lg-6 d-flex">
              <p className="my-auto text-muted lh-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis. Quisque vitae nulla malesuada,
                auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
                imperdiet.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="p-5 text-center bg-white shadow-sm rounded">
                <div className="d-inline-block py-3 px-4 bg-light rounded-circle text-primary fw-bold">
                  1
                </div>
                <img
                  className="img-fluid my-4"
                  height="192"
                  src="metis-assets/illustrations/work-tv.png"
                  alt=""
                />
                <h5 className="mb-3">Donec fermentum</h5>
                <p className="text-muted">
                  Sed ac magna sit amet risus tristique interdum at vel velit.
                  In hac habitasse platea dictumst.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="p-5 text-center bg-white shadow-sm rounded">
                <div className="d-inline-block py-3 px-4 bg-light rounded-circle text-primary fw-bold">
                  2
                </div>
                <img
                  className="img-fluid my-4"
                  height="192"
                  src="metis-assets/illustrations/people-watching.png"
                  alt=""
                />
                <h5 className="mb-3">Donec fermentum</h5>
                <p className="text-muted">
                  Sed ac magna sit amet risus tristique interdum at vel velit.
                  In hac habitasse platea dictumst.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-4">
              <div className="p-5 text-center bg-white shadow-sm rounded">
                <div className="d-inline-block py-3 px-4 bg-light rounded-circle text-primary fw-bold">
                  3
                </div>
                <img
                  className="img-fluid my-4"
                  height="192"
                  src="metis-assets/illustrations/financial-report.png"
                  alt=""
                />
                <h5 className="mb-3">Donec fermentum</h5>
                <p className="text-muted">
                  Sed ac magna sit amet risus tristique interdum at vel velit.
                  In hac habitasse platea dictumst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
