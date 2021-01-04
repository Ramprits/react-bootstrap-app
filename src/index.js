import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Router } from "react-router-dom";
import history from "./utils/history";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
axios.defaults.headers.common["Authorization"] = "";
axios.defaults.headers.post["Content-Type"] = "application/json";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  rootElement
);
