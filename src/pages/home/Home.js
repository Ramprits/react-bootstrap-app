import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/product";
import Loader from "../../components/Loader";
import MetaData from "../../components/MetaData";
import Product from "./components/Product";

export default function Home() {
  const { isLoading, error, productCollections } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    return () => {};
  }, [dispatch]);
  return (
    <>
      <MetaData title="Home" />
      <section className="py-5 bg-light">
        <div className="container">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="row">
              {productCollections.map((product) => (
                <Product key={product._id} {...product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
