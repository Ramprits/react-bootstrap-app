import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import "./styles.css";

export default function App() {
  return (
    <Fragment>
      <Helmet>
        <title>App | Page</title>
        <meta name="app" content="This is app component" />
      </Helmet>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}
