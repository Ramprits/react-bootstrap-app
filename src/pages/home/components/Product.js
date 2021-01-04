import React from "react";

function Product({ name, price }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4 ">
      <div className="p-5 text-center bg-white shadow-sm rounded w-100 h-100">
        <img
          className="img-fluid"
          height="100"
          src="assets/metis-assets/illustrations/work-tv.png"
          alt=""
        />
        <h5 className="mb-3">{name}</h5>
        <p>$ {price}</p>
      </div>
    </div>
  );
}

export default Product;
