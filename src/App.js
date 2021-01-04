import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import "./styles.css";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </Fragment>
  );
}
